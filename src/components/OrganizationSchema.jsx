import { Helmet } from "react-helmet-async";
import { buildOrganizationSchema } from "../lib/seo";

/**
 * Renders the organisation's schema.org/NGO structured data as JSON-LD.
 * This is what allows Google to show rich results (logo, social links,
 * contact info) and understand this is the same "entity" across pages —
 * mounted once in App.jsx so it's present on every route.
 */
export default function OrganizationSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(buildOrganizationSchema())}</script>
    </Helmet>
  );
}
