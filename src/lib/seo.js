// Central place for SEO + contact constants so every page, the footer,
// the sitemap and the structured data all stay in sync.
//
// IMPORTANT: replace SITE_URL with your real, live domain once the site
// is deployed (e.g. https://beautifulgatefoundation.org). Search engines
// use this for canonical URLs, the sitemap and Open Graph/Twitter cards —
// if it's wrong, shares and rich results will point to the wrong place.
export const SITE_URL = "https://beautifulgatefoundation.org";
export const SITE_NAME = "Beautiful Gate Foundation for the Blind";

export const ORG_EMAIL = "beautifulgatefoundation@gmail.com";
export const ORG_PHONE = "+2349032251030";
export const ORG_PHONE_DISPLAY = "+234 903 225 1030";
export const ORG_WHATSAPP = "2348137940805";
export const ORG_WHATSAPP_DISPLAY = "+234 813 794 0805";
export const WHATSAPP_LINK = `https://wa.me/${ORG_WHATSAPP}`;

export const ORG_ADDRESS_LINE = "Obodo Odo Umuoru, Izzhia-ngbo, Ohaukwu LGA, Ebonyi State, Nigeria";

export const SOCIAL_LINKS = {
  twitter: "https://x.com/gatefoundationB",
  instagram: "https://www.instagram.com/beautifulgatefoundation81",
};
export const TWITTER_HANDLE = "@gatefoundationB";

export const DEFAULT_DESCRIPTION =
  "Beautiful Gate Foundation for the Blind empowers people with visual impairment in Nigeria through education, legal representation and economic empowerment. Based in Ohaukwu, Ebonyi State.";

// Structured data (schema.org) describing the organisation. Rendered once,
// site-wide, so search engines can build a Knowledge Panel-style entry and
// understand the org's identity, contact details and social profiles.
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE_NAME,
    alternateName: "Beautiful Gate Foundation",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: DEFAULT_DESCRIPTION,
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Obodo Odo Umuoru, Izzhia-ngbo",
      addressRegion: "Ebonyi State",
      addressCountry: "NG",
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    sameAs: Object.values(SOCIAL_LINKS),
  };
}
