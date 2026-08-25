import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Scale, Briefcase, Quote } from "lucide-react";
import { COLOR, FONT_DISPLAY, FONT_BODY } from "../lib/theme";
import Eyebrow from "../components/Eyebrow";
import StatStrip from "../components/StatStrip";
import BrailleCell from "../components/BrailleCell";

const PROGRAMME_TEASERS = [
  { icon: GraduationCap, title: "Education for all", body: "Special schools, trained teachers, scholarships from primary school to university." },
  { icon: Scale, title: "Legal service", body: "Representation and advocacy for the rights of people with disability." },
  { icon: Briefcase, title: "Economic empowerment", body: "Grants, job training and cooperatives that break the cycle of poverty." },
];

function Hero() {
  const headline = "beautifulgate";
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: COLOR.navy }}>
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(232,163,61,0.10), transparent 40%), radial-gradient(circle at 85% 75%, rgba(232,163,61,0.08), transparent 45%)",
        }}
      />
      <div className="absolute top-16 right-6 md:right-16 hidden sm:flex gap-1 flex-wrap max-w-[220px] opacity-80" aria-hidden="true">
        {headline.split("").map((ch, i) => (
          <BrailleCell key={i} letter={ch} size={7} />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <Eyebrow dark>Together, we make the difference</Eyebrow>
        <h1
          className="text-white max-w-3xl"
          style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 4.25rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
        >
          Change lives,
          <br />
          one family <span style={{ color: COLOR.amber }}>at a time.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
          Every child with a visual impairment deserves education, welfare, opportunity and legal representation.
          Join us in building a world where communities thrive and futures are limitless.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: COLOR.amber, color: COLOR.navyDeep, fontFamily: FONT_BODY }}
          >
            Donate now <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold border transition-colors hover:bg-white/10"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "white", fontFamily: FONT_BODY }}
          >
            Our mission
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProgrammeTeasers() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "white" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-xl">
            <Eyebrow>How we help</Eyebrow>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(1.9rem,3.5vw,2.5rem)", color: COLOR.ink, lineHeight: 1.15 }}>
              Three flagship programmes.
            </h2>
          </div>
          <Link to="/programmes" className="text-sm font-bold inline-flex items-center gap-1" style={{ fontFamily: FONT_BODY, color: COLOR.amberDeep }}>
            See all programmes <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {PROGRAMME_TEASERS.map((p) => (
            <div key={p.title} className="rounded-2xl p-7 transition-transform hover:-translate-y-1" style={{ border: `1px solid ${COLOR.line}` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#F4E8D3" }}>
                <p.icon size={22} color={COLOR.amberDeep} aria-hidden="true" />
              </div>
              <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "1.25rem", color: COLOR.ink }}>{p.title}</h3>
              <p className="mt-3 text-sm" style={{ fontFamily: FONT_BODY, color: COLOR.slate, lineHeight: 1.7 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialTeaser() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: COLOR.cream }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Quote size={28} color={COLOR.amberDeep} className="mx-auto mb-4" aria-hidden="true" />
        <p style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.3rem,2.5vw,1.75rem)", color: COLOR.ink, lineHeight: 1.5 }}>
          Placeholder: "Beautiful Gate paid for my daughter's braille textbooks and trained her teacher.
          She reads faster than I do now."
        </p>
        <p className="mt-5 text-sm" style={{ fontFamily: FONT_BODY, color: COLOR.slate }}>
          — Placeholder parent, programme beneficiary
        </p>
        <Link to="/impact" className="mt-6 inline-flex items-center gap-1 text-sm font-bold" style={{ fontFamily: FONT_BODY, color: COLOR.amberDeep }}>
          Read our impact <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

function DonateBanner() {
  return (
    <section className="py-16" style={{ backgroundColor: COLOR.navy }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(1.7rem,3vw,2.25rem)", color: "white" }}>
          Every gift is 100% tax deductible.
        </h2>
        <Link
          to="/donate"
          className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-transform hover:scale-105"
          style={{ backgroundColor: COLOR.amber, color: COLOR.navyDeep, fontFamily: FONT_BODY }}
        >
          Donate now <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatStrip />
      <ProgrammeTeasers />
      <TestimonialTeaser />
      <DonateBanner />
    </>
  );
}
