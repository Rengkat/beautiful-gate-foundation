import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { COLOR, FONT_DISPLAY, FONT_BODY } from "../lib/theme";

export const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Programmes", to: "/programmes" },
  { label: "Impact", to: "/impact" },
  { label: "Partner", to: "/partner" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) => ({
    fontFamily: FONT_BODY,
    color: "white",
    opacity: isActive ? 1 : 0.75,
    fontWeight: isActive ? 700 : 500,
  });

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: COLOR.navy,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <a
        href="#main"
        className="absolute left-2 top-2 -translate-y-24 focus:translate-y-0 transition-transform px-4 py-2 rounded-md z-50"
        style={{ backgroundColor: COLOR.amber, color: COLOR.navyDeep, fontFamily: FONT_BODY, fontWeight: 700 }}
      >
        Skip to main content
      </a>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Beautiful Gate Foundation home">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: COLOR.amber }}>
            <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: COLOR.navyDeep, fontSize: "18px" }}>BG</span>
          </div>
          <span className="hidden sm:block text-white leading-tight" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "15px" }}>
            Beautiful Gate
            <br />
            <span className="text-xs font-normal" style={{ fontFamily: FONT_BODY, color: COLOR.slateLight }}>
              Foundation for the Blind
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className="text-sm" style={linkStyle}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/donate"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-transform hover:scale-105"
            style={{ backgroundColor: COLOR.amber, color: COLOR.navyDeep, fontFamily: FONT_BODY }}
          >
            <Heart size={16} aria-hidden="true" />
            Donate now
          </Link>
          <button
            className="md:hidden p-2 rounded-md text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ backgroundColor: COLOR.navy }} aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-white text-base" style={linkStyle}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-sm"
            style={{ backgroundColor: COLOR.amber, color: COLOR.navyDeep, fontFamily: FONT_BODY }}
          >
            <Heart size={16} aria-hidden="true" />
            Donate now
          </Link>
        </nav>
      )}
    </header>
  );
}
