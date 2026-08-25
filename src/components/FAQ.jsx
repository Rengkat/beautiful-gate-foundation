import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { COLOR, FONT_BODY, FONT_DISPLAY } from "../lib/theme";
import Eyebrow from "./Eyebrow";

const DEFAULT_FAQS = [
  {
    q: "Is my donation tax deductible?",
    a: "Yes — Beautiful Gate Foundation for the Blind is a registered nonprofit, and gifts are 100% tax deductible. Replace this with your actual registration and tax-ID details.",
  },
  {
    q: "How is my donation used?",
    a: "Gifts fund our three programmes directly: education, legal service and economic empowerment. Placeholder — link to a real annual report or financial breakdown here.",
  },
  {
    q: "Can I volunteer instead of donating?",
    a: "Yes. Placeholder — describe volunteer roles (teaching assistance, legal aid, mentorship) and link to an application form.",
  },
];

export default function FAQ({ items = DEFAULT_FAQS, title = "Frequently asked." }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: COLOR.cream }}>
      <div className="max-w-3xl mx-auto px-6">
        <Eyebrow>Questions</Eyebrow>
        <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.25rem)", color: COLOR.ink }}>
          {title}
        </h2>
        <div className="mt-8 divide-y" style={{ borderColor: COLOR.line }}>
          {items.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={f.q} style={{ borderTop: i === 0 ? "none" : `1px solid ${COLOR.line}` }}>
                <button
                  className="w-full flex items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span style={{ fontFamily: FONT_BODY, fontWeight: 700, color: COLOR.ink }}>{f.q}</span>
                  <ChevronDown
                    size={20}
                    color={COLOR.slate}
                    aria-hidden="true"
                    style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm" style={{ fontFamily: FONT_BODY, color: COLOR.slate, lineHeight: 1.7 }}>
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
