import type { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

AWS.config.update({ region: process.env.AWS_SES_REGION || "ap-south-1" });

type ResponseData = {
  data?: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim();
  const message = String(req.body?.message || "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please complete all fields." });
  }

  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const source = process.env.AWS_SES_SOURCE_EMAIL;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || source;

  if (!accessKeyId || !secretAccessKey || !source || !recipient) {
    return res.status(500).json({
      error:
        "Email is not configured yet. Set AWS SES credentials and sender env vars first.",
    });
  }

  try {
    const ses = new AWS.SES({
      apiVersion: "2010-12-01",
      accessKeyId,
      secretAccessKey,
      region: process.env.AWS_SES_REGION || "ap-south-1",
    });

    await ses
      .sendEmail({
        Destination: {
          ToAddresses: [recipient],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `
                <div><strong>Name:</strong> ${name}</div>
                <div><strong>Email:</strong> ${email}</div>
                <div style="margin-top:12px;"><strong>Message:</strong><br/>${message}</div>
              `,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: `Portfolio contact from ${name}`,
          },
        },
        ReplyToAddresses: [email],
        Source: source,
      })
      .promise();

    return res.status(200).json({ data: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "The message could not be delivered. Please try email directly.",
    });
  }
}
