import type { NextApiRequest, NextApiResponse } from "next";
import {
  isDefaultAdminPassword,
  isValidAdminPassword,
  setAuthorizedSession,
} from "../../../lib/admin-auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const password = String(req.body?.password || "");

  if (!isValidAdminPassword(password)) {
    return res.status(401).json({ error: "Incorrect password" });
  }

  setAuthorizedSession(res);

  return res.status(200).json({
    ok: true,
    defaultPassword: isDefaultAdminPassword(),
  });
}
