import { Link } from "react-router-dom";
import { Quote, ArrowRight } from "lucide-react";
import { COLOR, FONT_DISPLAY, FONT_BODY } from "../lib/theme";
import Eyebrow from "../components/Eyebrow";
import StatStrip from "../components/StatStrip";
import SEO from "../components/SEO";

const TESTIMONIALS = [
  {
    quote:
      "Thanks to Beautiful Gate Foundation for providing legal service for a person with disability like me.",
    name: "Rosemary Okafor",
  },
  {
    quote:
      "My gratitude goes to the management of Beautiful Gate Foundation for the education of my only son. I'm grateful to the management.",
    name: "John Okpala",
  },
  {
    quote:
      "May God continue to bless the management of Beautiful Gate Foundation for considering me worthy for empowerment. Today, I can boast of my own source of income, thanks to Beautiful Gate Foundation for the Blind.",
    name: "Prosper Williams",
  },
  {
    quote:
      "I'm delighted for the education of my daughter. My prayer is that God almighty may continue to favour the management of Beautiful Gate Foundation for the Blind.",
    name: "Charles Ogbodo",
  },
  {
    quote: "Thanks to Beautiful Gate Foundation for my education, I'm now a graduate in the name of Jesus.",
    name: "Queen Elizy",
  },
];

export default function Impact() {
  return (
    <>
      <SEO
        title="Our Impact & Testimonials"
        description="See the impact of Beautiful Gate Foundation for the Blind — real testimonials from beneficiaries whose lives have changed through education, legal service and economic empowerment."
        path="/impact"
      />
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
        <div className="max-w-5xl mx-auto px-6">
          <Eyebrow>In their words</Eyebrow>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(1.7rem,3vw,2.25rem)", color: COLOR.ink }}>
            Stories from the people we serve.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="rounded-2xl p-7" style={{ backgroundColor: COLOR.navy }}>
                <Quote size={24} color={COLOR.amber} aria-hidden="true" />
                <p style={{ fontFamily: FONT_DISPLAY, color: "white", fontSize: "1.05rem", lineHeight: 1.6 }} className="mt-4">
                  "{t.quote}"
                </p>
                <footer className="mt-5 text-sm" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.6)" }}>
                  — {t.name}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-12 text-center">
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
