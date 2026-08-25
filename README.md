# Beautiful Gate Foundation for the Blind — website

A multi-page NGO website built with React 18, React Router, Tailwind CSS,
and Zustand, using Roboto (body), Roboto Slab (display) and Roboto Mono
(data/stats).

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

## Structure

```
src/
  components/    Navbar, Footer, Eyebrow, StatStrip, BrailleTool,
                  BrailleCell, FAQ — shared across pages
  hooks/          useCountUp, useInView (scroll-triggered stat animation)
  lib/            theme.js (design tokens), braille.js (Grade-1 English
                  braille map — the site's signature interactive element)
  pages/          Home, About, Programmes, Impact, Donate, Partner,
                  Contact, NotFound — one file per route
  store/          donationStore.js — real Zustand store for the donate flow
```

## What still needs your real data

Search the codebase for "placeholder" to find every spot that needs
replacing before launch:

- `src/pages/Contact.jsx` — address, phone, email, social links
- `src/pages/Impact.jsx` / `src/pages/Home.jsx` — testimonial quote
- `src/components/StatStrip.jsx` — impact figures (the source document
  had two conflicting "countries served" numbers; verify against your
  real totals)
- `src/pages/Donate.jsx` — the "Continue to secure checkout" button is a
  demo state change only. Wire it to a real payment processor (Stripe,
  Paystack, GoCardless, etc.) before accepting real donations.
- `src/pages/Contact.jsx` — the contact form validates client-side only
  and has no backend. Wire it to an email service, form API, or CRM.
- Footer newsletter signup — same: client-side only, no real subscribe.

## Notes

- Colors and fonts are defined once in `src/lib/theme.js` and also
  registered in `tailwind.config.js` (as `navy`, `amber`, `cream`, etc.)
  so you can use either the JS constants or Tailwind utility classes
  (`bg-navy`, `text-amber-deep`) depending on what's cleaner in context.
- Accessibility: skip-to-content link, visible focus rings, semantic
  landmarks, `aria-live` on the braille preview, and `prefers-reduced-motion`
  support are all built in — worth keeping given the audience this site
  represents.
