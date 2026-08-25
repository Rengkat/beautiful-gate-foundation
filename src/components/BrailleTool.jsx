import { useMemo, useState } from "react";
import { COLOR, FONT_BODY, FONT_MONO } from "../lib/theme";
import { toBraille } from "../lib/braille";
import BrailleCell from "./BrailleCell";

// The site's signature interactive element: a live Grade-1 English braille
// transliterator. Not decoration — it's the organisation's own craft, made
// into something a sighted visitor can actually try.
export default function BrailleTool() {
  const [word, setWord] = useState("hope");
  const cleaned = word.replace(/[^a-zA-Z ]/g, "").toLowerCase();
  const brailleStr = useMemo(() => toBraille(cleaned || " "), [cleaned]);

  return (
    <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: COLOR.navy, border: "1px solid rgba(255,255,255,0.08)" }}>
      <p className="text-xs font-bold uppercase mb-2" style={{ fontFamily: FONT_MONO, color: COLOR.amber, letterSpacing: "0.15em" }}>
        See your name in braille
      </p>
      <p className="text-sm mb-5" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.6)" }}>
        Every child we serve learns to read the world this way. Type a word below.
      </p>
      <label htmlFor="braille-input" className="sr-only">
        Enter a word to see it in braille
      </label>
      <input
        id="braille-input"
        type="text"
        value={word}
        maxLength={16}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Type a word"
        className="w-full px-4 py-3 rounded-lg text-base mb-5 outline-none"
        style={{ fontFamily: FONT_BODY, backgroundColor: "rgba(255,255,255,0.06)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }}
      />
      <div className="flex flex-wrap gap-3 mb-4" aria-hidden="true">
        {(cleaned || " ").split("").map((ch, i) => (
          <div key={i} className="rounded-lg p-2" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
            <BrailleCell letter={ch} size={9} />
          </div>
        ))}
      </div>
      <p aria-live="polite" className="text-3xl tracking-widest break-all" style={{ fontFamily: "serif", color: COLOR.amber }}>
        {brailleStr}
      </p>
    </div>
  );
}
