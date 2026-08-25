import { Link } from "react-router-dom";
import { Quote, ArrowRight } from "lucide-react";
import { COLOR, FONT_DISPLAY, FONT_BODY } from "../lib/theme";
import Eyebrow from "../components/Eyebrow";
import StatStrip from "../components/StatStrip";

export default function Impact() {
  return (
    <>
      <section className="py-20 md:py-24" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto px-6">
          <Eyebrow>Numbers that matter</Eyebrow>
          <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(1.9rem,3.5vw,2.75rem)", color: COLOR.ink, lineHeight: 1.15 }}>
            Every number is a life changed.
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ fontFamily: FONT_BODY, color: COLOR.slate, lineHeight: 1.7 }}>
            A family strengthened, and a future made brighter — that's what sits behind each figure below.
          </p>
        </div>
      </section>

      <StatStrip />

      <section className="py-20 md:py-28" style={{ backgroundColor: COLOR.cream }}>
        <div className="max-w-3xl mx-auto px-6">
          <blockquote className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: COLOR.navy }}>
            <Quote size={28} color={COLOR.amber} aria-hidden="true" />
            <p style={{ fontFamily: FONT_DISPLAY, color: "white", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", lineHeight: 1.6 }} className="mt-4">
              Placeholder: "Beautiful Gate paid for my daughter's braille textbooks and trained her teacher.
              She reads faster than I do now."
            </p>
            <footer className="mt-6 text-sm" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.6)" }}>
              — Placeholder parent, programme beneficiary. Replace with a real, consented story and photo.
            </footer>
          </blockquote>

          <div className="mt-10 text-center">
            <p style={{ fontFamily: FONT_BODY, color: COLOR.slate }}>
              Want your gift to move a number like these?
            </p>
            <Link
              to="/donate"
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ backgroundColor: COLOR.navy, color: "white", fontFamily: FONT_BODY }}
            >
              Donate now <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
