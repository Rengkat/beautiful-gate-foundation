import { COLOR, FONT_MONO } from "../lib/theme";

export default function Eyebrow({ children, dark }) {
  return (
    <p
      className="text-xs font-bold uppercase mb-3"
      style={{
        fontFamily: FONT_MONO,
        color: dark ? COLOR.amber : COLOR.amberDeep,
        letterSpacing: "0.18em",
      }}
    >
      {children}
    </p>
  );
}
