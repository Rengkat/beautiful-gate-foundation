import { Link } from "react-router-dom";
import { COLOR, FONT_DISPLAY, FONT_BODY } from "../lib/theme";

export default function NotFound() {
  return (
    <section className="py-28" style={{ backgroundColor: COLOR.cream }}>
      <div className="max-w-lg mx-auto px-6 text-center">
        <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "3rem", color: COLOR.amberDeep }}>404</p>
        <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "1.75rem", color: COLOR.ink }}>
          Page not found.
        </h1>
        <p className="mt-3" style={{ fontFamily: FONT_BODY, color: COLOR.slate }}>
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 rounded-full font-bold text-sm"
          style={{ backgroundColor: COLOR.navy, color: "white", fontFamily: FONT_BODY }}
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
