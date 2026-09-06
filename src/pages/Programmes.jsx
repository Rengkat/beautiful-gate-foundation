import { Link } from "react-router-dom";
import { GraduationCap, Scale, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import { COLOR, FONT_DISPLAY, FONT_BODY, FONT_MONO } from "../lib/theme";
import Eyebrow from "../components/Eyebrow";
import SEO from "../components/SEO";

const PROGRAMMES = [
  {
    icon: GraduationCap,
    title: "Education for all",
    body:
      "We build and support special schools, train specialist teachers, and provide scholarships from primary school through university — so a visual impairment never closes the door on learning.",
    activities: [
      "Constructing and equipping special schools with braille materials",
      "Training and certifying teachers in special-needs instruction",
      "Awarding scholarships from primary school to university level",
    ],
  },
  {
    icon: Scale,
    title: "Legal service",
    body:
      "Our team of lawyers advocates for the rights, opportunity and inclusion of people with disability, and provides direct legal representation so those rights are upheld without stigma.",
    activities: [
      "Free legal representation in disability-rights cases",
      "Advocacy in decision-making processes that affect the disabled community",
      "Public-interest litigation against discriminatory practice",
    ],
  },
  {
    icon: Briefcase,
    title: "Economic empowerment",
    body:
      "Grants, job-training programmes and small cooperatives help people with disability build sustainable livelihoods and break the cycle of poverty.",
    activities: [
      "Seed grants for small businesses run by people with disability",
      "Vocational and job-readiness training programmes",
      "Formation of savings and trading cooperatives",
    ],
  },
];

export default function Programmes() {
  return (
    <>
      <SEO
        title="Our Programmes"
        description="Education, legal service and economic empowerment — the three flagship programmes Beautiful Gate Foundation for the Blind runs for people with visual impairment in Nigeria."
        path="/programmes"
      />
      <section className="py-20 md:py-24" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <Eyebrow>How we help</Eyebrow>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(1.9rem,3.5vw,2.75rem)", color: COLOR.ink, lineHeight: 1.15 }}>
              Three flagship programmes.
            </h1>
            <p className="mt-4 text-base md:text-lg" style={{ fontFamily: FONT_BODY, color: COLOR.slate, lineHeight: 1.7 }}>
              Each one addresses a critical need for people with disability, from the classroom to the courtroom
              to the workplace.
            </p>
          </div>
        </div>
      </section>

      {PROGRAMMES.map((p, i) => (
        <section key={p.title} className="py-16 md:py-20" style={{ backgroundColor: i % 2 === 0 ? COLOR.cream : "white" }}>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#F4E8D3" }}>
                <p.icon size={26} color={COLOR.amberDeep} aria-hidden="true" />
              </div>
              <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(1.6rem,3vw,2.1rem)", color: COLOR.ink }}>
                {p.title}
              </h2>
              <p className="mt-4 text-base" style={{ fontFamily: FONT_BODY, color: COLOR.slate, lineHeight: 1.75 }}>
                {p.body}
              </p>
              <Link
                to="/donate"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
                style={{ fontFamily: FONT_BODY, color: COLOR.amberDeep }}
              >
                Fund this programme <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <ul className="space-y-4 rounded-2xl p-7" style={{ backgroundColor: "white", border: `1px solid ${COLOR.line}` }}>
                {p.activities.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <CheckCircle2 size={20} color={COLOR.amberDeep} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span style={{ fontFamily: FONT_BODY, color: COLOR.ink, fontSize: "0.95rem" }}>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
