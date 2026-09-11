import { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, MessageCircle } from "lucide-react";
import { COLOR, FONT_BODY, FONT_DISPLAY } from "../lib/theme";
import { NAV_LINKS } from "./Navbar";
import { SOCIAL_LINKS, WHATSAPP_LINK } from "../lib/seo";

const SOCIALS = [
  { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Follow us on X (Twitter)" },
  { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Follow us on Instagram" },
  { Icon: MessageCircle, href: WHATSAPP_LINK, label: "Chat with us on WhatsApp" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer style={{ backgroundColor: COLOR.navyDeep }} className="pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="" width="36" height="36" className="w-9 h-9 rounded-full flex-shrink-0" />
              <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: "white", fontSize: "1.1rem" }}>
                Beautiful Gate Foundation
              </span>
            </div>
            <p className="mt-3 text-sm" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
              Empowering people with visual impairment through education, legal representation and economic opportunity.
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <Icon size={16} color="white" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold mb-3" style={{ fontFamily: FONT_BODY, color: "white" }}>
              Quick links
            </p>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.5)" }}>
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.5)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-3" style={{ fontFamily: FONT_BODY, color: "white" }}>
              Stay updated
            </p>
            {subscribed ? (
              <p className="text-sm" style={{ fontFamily: FONT_BODY, color: COLOR.amber }}>
                Thanks — you're on the list.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (/^\S+@\S+\.\S+$/.test(email)) setSubscribed(true);
                }}
                className="flex gap-2"
              >
                <label htmlFor="newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2.5 rounded-lg text-sm outline-none"
                  style={{ fontFamily: FONT_BODY, backgroundColor: "rgba(255,255,255,0.06)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }}
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg text-sm font-bold"
                  style={{ backgroundColor: COLOR.amber, color: COLOR.navyDeep, fontFamily: FONT_BODY }}
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Beautiful Gate Foundation for the Blind. All rights reserved.
          </p>
          <p className="text-xs" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.35)" }}>
            Ohaukwu LGA, Ebonyi State, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
