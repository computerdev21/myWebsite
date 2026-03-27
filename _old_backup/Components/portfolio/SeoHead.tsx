import Head from "next/head";
import type { PortfolioContent } from "../../types/portfolio";

type SeoHeadProps = {
  content: PortfolioContent;
  title?: string;
  description?: string;
};

export function SeoHead({ content, title, description }: SeoHeadProps) {
  const finalTitle = title
    ? `${title} | ${content.profile.name}`
    : content.meta.siteTitle;
  const finalDescription = description || content.meta.siteDescription;

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={content.meta.siteUrl} />
      <meta property="og:image" content={content.profile.heroImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
