# Beautiful Gate Foundation for the Blind — website

A multi-page NGO website built with React 18, React Router, Tailwind CSS,
Zustand and react-helmet-async, using Roboto (body), Roboto Slab (display)
and Roboto Mono (data/stats).

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## SEO — what's built in

- **Per-page meta tags** (`src/components/SEO.jsx`, used on every page): unique
  title, description, canonical URL, Open Graph and Twitter Card tags, so
  each page — not just the homepage — can rank and produces a good link
  preview on WhatsApp/X/Instagram.
- **Structured data**: `src/components/OrganizationSchema.jsx` renders a
  schema.org `NGO` JSON-LD block site-wide with your name, address, contact
  details and social links, for Google rich results.
- **`public/robots.txt`** and **`public/sitemap.xml`** listing every route.
- All contact/social constants live in one place: `src/lib/seo.js`.

### Before you launch — two things you must update

1. **`SITE_URL` in `src/lib/seo.js`** (and the matching URLs in
   `index.html`, `public/robots.txt`, `public/sitemap.xml`) — currently set
   to `https://beautifulgatefoundation.org.ng` as a placeholder domain. Replace
   every occurrence with your real, live domain once you deploy, or
   canonical links/sitemap/social previews will point to the wrong place.
2. **Images**: `og-image.jpg` (1200×630, used for link previews),
   `logo.png`, and the favicon files referenced in `index.html` /
   `public/site.webmanifest` don't exist yet — add real photos/logo files
   to `public/` with those exact names.
3. Once live, submit `sitemap.xml` in Google Search Console and Bing
   Webmaster Tools — that's what gets you indexed and ranking quickly
   rather than waiting for crawlers to find you.

### One honest limitation

This is a client-rendered single-page app (Vite + React Router). Google
generally indexes JS-rendered pages fine, but for the strongest possible
SEO (instant indexing, best previews on platforms that don't run
JavaScript), consider prerendering the built site (e.g. `react-snap`) or
migrating to a server-rendered framework (Next.js/Astro) later. Everything
above works either way — it's an upgrade, not a rewrite.

## Contact & social — real, wired in

- WhatsApp: +234 813 794 0805
- Phone: +234 903 225 1030
- Email: beautifulgatefoundation@gmail.com
- Address: Obodo Odo Umuoru, Izzhia-ngbo, Ohaukwu LGA, Ebonyi State, Nigeria
- X (Twitter): https://x.com/gatefoundationB
- Instagram: https://www.instagram.com/beautifulgatefoundation81

These live in `src/lib/seo.js` and are used in the Footer, Contact page,
and the Donate flow.

## Donations — Naira, via WhatsApp handoff

The Donate page collects amount (₦), frequency and designation, then opens
WhatsApp with a pre-filled message to your number so your team can send
bank transfer details and confirm the gift — there's no payment gateway
wired in yet since no processor account/API keys were supplied.

When you're ready to accept card/bank payments automatically, wire
`DonateSubmit` in `src/pages/Donate.jsx` to a Nigerian payment processor
such as Paystack or Flutterwave (both support NGN and have straightforward
React SDKs) instead of — or alongside — the WhatsApp handoff.

## Structure

```
src/
  components/    Navbar, Footer, Eyebrow, StatStrip, BrailleTool,
                  BrailleCell, FAQ, SEO, OrganizationSchema
  hooks/          useCountUp, useInView (scroll-triggered stat animation)
  lib/            theme.js (design tokens), braille.js (Grade-1 English
                  braille map), seo.js (contact/social constants + schema)
  pages/          Home, About, Programmes, Impact, Donate, Partner,
                  Contact, NotFound — one file per route
  store/          donationStore.js — Zustand store for the donate flow
public/
  robots.txt, sitemap.xml, site.webmanifest
```

## Still worth doing

- Wire the contact form and newsletter signup to a real backend or service
  (e.g. Formspree, Resend) instead of the current mailto/local-only
  behaviour.
- Replace the illustrative impact figures in `StatStrip.jsx` with your
  verified totals.
- Add real photos throughout (testimonial photos, programme photos, the
  OG/logo images above) — photos meaningfully improve both engagement and
  social-share click-through.

## Notes

- Colors and fonts are defined once in `src/lib/theme.js` and also
  registered in `tailwind.config.js` (as `navy`, `amber`, `cream`, etc.)
  so you can use either the JS constants or Tailwind utility classes
  depending on what's cleaner in context.
- Accessibility: skip-to-content link, visible focus rings, semantic
  landmarks, `aria-live` on the braille preview, and `prefers-reduced-motion`
  support are all built in.
