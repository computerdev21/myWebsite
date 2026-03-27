import type { NextApiRequest, NextApiResponse } from "next";
import { assertAuthorized } from "../../../lib/admin-auth";
import {
  readPortfolioContent,
  writePortfolioContent,
} from "../../../lib/portfolio-content";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!assertAuthorized(req, res)) {
    return;
  }

  if (req.method === "GET") {
    const content = await readPortfolioContent();
    return res.status(200).json({ content });
  }

  if (req.method === "PUT") {
    const content = req.body;

    if (!content || typeof content !== "object") {
      return res.status(400).json({ error: "Invalid content payload" });
    }

    const nextContent = await writePortfolioContent(content);
    return res.status(200).json({ content: nextContent });
  }

  res.setHeader("Allow", "GET, PUT");
  return res.status(405).json({ error: "Method not allowed" });
}
