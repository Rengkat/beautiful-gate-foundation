import { COLOR, FONT_DISPLAY, FONT_BODY } from "../lib/theme";
import Eyebrow from "../components/Eyebrow";
import BrailleTool from "../components/BrailleTool";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
    <SEO
      title="About Us"
      description="Learn about Beautiful Gate Foundation for the Blind — our mission to empower, train and rehabilitate people with visual impairment in Nigeria from childhood to self-reliance."
      path="/about"
    />
    <section className="py-20 md:py-28" style={{ backgroundColor: COLOR.cream }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <Eyebrow>Our mission</Eyebrow>
          <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(1.9rem,3.5vw,2.75rem)", color: COLOR.ink, lineHeight: 1.15 }}>
            Building a better world, together.
          </h1>
          <p className="mt-6 text-base md:text-lg" style={{ fontFamily: FONT_BODY, color: COLOR.slate, lineHeight: 1.75 }}>
            We are driven by the belief that lasting change starts with human development — through education,
            empowerment, grassroots partnership and sustainable programming.
          </p>
          <p className="mt-4 text-base md:text-lg" style={{ fontFamily: FONT_BODY, color: COLOR.slate, lineHeight: 1.75 }}>
            We empower, train and rehabilitate people with visual impairment from childhood until they become
            self-reliant, so they can contribute meaningfully to the progress of society.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "We listen first.",
              "We learn second.",
              "We act third — every initiative reflects the real needs of the people we serve.",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-xs font-bold"
                  style={{ backgroundColor: COLOR.amber, color: COLOR.navyDeep, fontFamily: FONT_BODY }}
                >
                  {i + 1}
                </span>
                <p style={{ fontFamily: FONT_BODY, color: COLOR.ink }}>{line}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8" style={{ borderTop: `1px solid ${COLOR.line}` }}>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "1.4rem", color: COLOR.ink }}>
              Our approach
            </h2>
            <p className="mt-3 text-sm md:text-base" style={{ fontFamily: FONT_BODY, color: COLOR.slate, lineHeight: 1.75 }}>
              We combine evidence-based strategies with a deep cultural and legal understanding, ensuring every
              initiative reflects the unique needs and aspirations of the people with disability we serve —
              in education, legal standing, and economic opportunity alike.
            </p>
          </div>
        </div>

        <div className="md:sticky md:top-24">
          <BrailleTool />
        </div>
      </div>
    </section>
    </>
  );
}
