import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME, TWITTER_HANDLE, DEFAULT_DESCRIPTION } from "../lib/seo";

/**
 * Drop this at the top of every page component with a unique title and
 * description. It sets the document title, meta description, canonical
 * link, and Open Graph / Twitter card tags for that specific route —
 * this is what lets each page (not just the homepage) rank and produce
 * a good-looking preview when shared on WhatsApp, X or Instagram.
 */
export default function SEO({ title, description = DEFAULT_DESCRIPTION, path = "/", noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Education, Legal Aid & Empowerment for the Blind`;
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const image = `${SITE_URL}/og-image.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph — controls previews on WhatsApp, Facebook, LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter / X card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
