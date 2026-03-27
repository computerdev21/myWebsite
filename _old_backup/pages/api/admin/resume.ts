import fs from "fs/promises";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";
import { assertAuthorized } from "../../../lib/admin-auth";

const allowedExtensions = new Set(["pdf", "doc", "docx"]);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!assertAuthorized(req, res)) {
    return;
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const filename = String(req.body?.filename || "");
  const contentBase64 = String(req.body?.contentBase64 || "");

  if (!filename || !contentBase64) {
    return res.status(400).json({ error: "Missing file data" });
  }

  const extension = filename.split(".").pop()?.toLowerCase() || "";

  if (!allowedExtensions.has(extension)) {
    return res
      .status(400)
      .json({ error: "Only PDF, DOC, and DOCX files are supported" });
  }

  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "-");
  const fileBuffer = Buffer.from(contentBase64, "base64");

  if (fileBuffer.byteLength > 8 * 1024 * 1024) {
    return res.status(400).json({ error: "Resume file is too large" });
  }

  const targetDir = path.join(process.cwd(), "public", "resume");
  const targetPath = path.join(targetDir, safeName);

  await fs.mkdir(targetDir, { recursive: true });
  await fs.writeFile(targetPath, fileBuffer);

  return res.status(200).json({
    url: `/resume/${safeName}`,
    filename: safeName,
  });
}
