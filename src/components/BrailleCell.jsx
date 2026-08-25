import { DOTS, DOT_POSITIONS } from "../lib/braille";

// Draws one 2x3 braille cell for a single letter — used decoratively in
// the Hero and inside BrailleTool's live dot preview.
export default function BrailleCell({ letter, size = 8, dot = "rgba(232,163,61,0.55)" }) {
  const active = DOTS[letter?.toLowerCase()] || [];
  return (
    <svg width={size * 2} height={size * 3} viewBox="0 0 20 30" aria-hidden="true">
      {[1, 2, 3, 4, 5, 6].map((n) => {
        const [col, row] = DOT_POSITIONS[n];
        return (
          <circle
            key={n}
            cx={5 + col * 10}
            cy={5 + row * 10}
            r={active.includes(n) ? 3.2 : 1.1}
            fill={active.includes(n) ? dot : "rgba(255,255,255,0.08)"}
          />
        );
      })}
    </svg>
  );
}
