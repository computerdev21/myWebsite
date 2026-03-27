import fs from "fs/promises";
import path from "path";
import type { GetServerSideProps } from "next";
import type { PortfolioContent } from "../types/portfolio";

const CONTENT_PATH = path.join(process.cwd(), "content", "portfolio.json");

export async function readPortfolioContent(): Promise<PortfolioContent> {
  const file = await fs.readFile(CONTENT_PATH, "utf8");
  return JSON.parse(file) as PortfolioContent;
}

export async function writePortfolioContent(content: PortfolioContent) {
  const nextContent: PortfolioContent = {
    ...content,
    updatedAt: new Date().toISOString(),
  };

  await fs.writeFile(CONTENT_PATH, JSON.stringify(nextContent, null, 2));
  return nextContent;
}

export const withPortfolioContent: GetServerSideProps<{
  content: PortfolioContent;
}> = async () => {
  const content = await readPortfolioContent();

  return {
    props: {
      content,
    },
  };
};
