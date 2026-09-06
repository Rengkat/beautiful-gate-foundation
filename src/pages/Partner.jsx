import { Link } from "react-router-dom";
import { Building2, CheckCircle2 } from "lucide-react";
import { COLOR, FONT_DISPLAY, FONT_BODY } from "../lib/theme";
import Eyebrow from "../components/Eyebrow";
import SEO from "../components/SEO";

export default function Partner() {
  return (
    <>
    <SEO
      title="Partner With Us"
      description="Corporate and organisational partnerships that amplify our work for people with visual impairment in Nigeria — funding, in-kind support, employee volunteering and shared advocacy."
      path="/partner"
    />
    <section className="py-20 md:py-28" style={{ backgroundColor: "white" }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>Partnership</Eyebrow>
          <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(1.9rem,3.5vw,2.5rem)", color: COLOR.ink, lineHeight: 1.15 }}>
            Corporate and organisational partnerships amplify our impact.
          </h1>
          <p className="mt-5 text-base md:text-lg" style={{ fontFamily: FONT_BODY, color: COLOR.slate, lineHeight: 1.75 }}>
            Join us as a partner and reach more people — through funding, in-kind support, employee
            volunteering, or shared advocacy.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
            style={{ backgroundColor: COLOR.navy, color: "white", fontFamily: FONT_BODY }}
          >
            <Building2 size={16} aria-hidden="true" />
            Become a partner
          </Link>
        </div>
        <div className="rounded-2xl p-8" style={{ backgroundColor: COLOR.cream, border: `1px solid ${COLOR.line}` }}>
          <ul className="space-y-5">
            {[
              "Fund a scholarship or a full classroom of braille equipment.",
              "Sponsor legal representation for a family fighting for a child's right to education.",
              "Co-design a job-training cohort with our economic empowerment team.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} color={COLOR.amberDeep} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span style={{ fontFamily: FONT_BODY, color: COLOR.ink }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
