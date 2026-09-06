import { COLOR, FONT_MONO, FONT_BODY } from "../lib/theme";
import { useCountUp, useInView } from "../hooks/useScrollEffects";

const STATS = [
  { value: 2000, suffix: "+", label: "Lives impacted" },
  { value: 250, suffix: "+", label: "Schools assisted" },
  { value: 15, suffix: "", label: "Legal cases represented" },
  { value: 50, suffix: "+", label: "Communities reached" },
];

function Stat({ stat, inView }) {
  const count = useCountUp(stat.value, inView);
  return (
    <div className="text-center md:text-left">
      <p style={{ fontFamily: FONT_MONO, color: COLOR.amber, fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 700 }}>
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="text-sm mt-1" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.65)" }}>
        {stat.label}
      </p>
    </div>
  );
}

export default function StatStrip({ note = true }) {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ backgroundColor: COLOR.navyDeep }} className="py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <Stat key={s.label} stat={s} inView={inView} />
        ))}
      </div>
      {note && (
        <p className="text-center mt-6 text-xs px-6" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.35)" }}>
          Figures are illustrative placeholders — swap in your foundation's verified totals.
        </p>
      )}
    </section>
  );
}
