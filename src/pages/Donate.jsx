import { useState } from "react";
import { CheckCircle2, HandCoins } from "lucide-react";
import { COLOR, FONT_DISPLAY, FONT_BODY, FONT_MONO } from "../lib/theme";
import Eyebrow from "../components/Eyebrow";
import { useDonationStore } from "../store/donationStore";

const AMOUNTS = [25, 50, 100, 250];
const DESIGNATIONS = ["Where needed most", "Education", "Legal service", "Economic empowerment"];

function ThankYou() {
  const reset = useDonationStore((s) => s.reset);
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: COLOR.navy }}>
      <div className="max-w-lg mx-auto px-6 text-center">
        <CheckCircle2 size={48} color={COLOR.amber} className="mx-auto mb-6" aria-hidden="true" />
        <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "2rem", color: "white" }}>
          Thank you.
        </h1>
        <p className="mt-4" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
          This is a demo confirmation — no payment was processed. In production this hands off to your
          payment processor (e.g. Stripe, Paystack, or a donor-management platform).
        </p>
        <button
          onClick={reset}
          className="mt-8 px-6 py-3 rounded-full font-bold text-sm"
          style={{ backgroundColor: COLOR.amber, color: COLOR.navyDeep, fontFamily: FONT_BODY }}
        >
          Make another gift
        </button>
      </div>
    </section>
  );
}

function DonateSubmit() {
  const [error, setError] = useState("");
  // Selector pulls only what's needed from the store — this component
  // re-renders on amount/customAmount changes, nothing else does.
  const amount = useDonationStore((s) => s.amount);
  const customAmount = useDonationStore((s) => s.customAmount);
  const submit = useDonationStore((s) => s.submit);
  const effectiveAmount = customAmount ? Number(customAmount) || 0 : amount || 0;

  const handleSubmit = () => {
    if (!effectiveAmount || effectiveAmount <= 0) {
      setError("Enter an amount greater than $0 first.");
      return;
    }
    setError("");
    submit();
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className="w-full py-4 rounded-full font-bold text-base transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
        style={{ backgroundColor: COLOR.amber, color: COLOR.navyDeep, fontFamily: FONT_BODY }}
      >
        <HandCoins size={18} aria-hidden="true" />
        Continue to secure checkout
      </button>
      {error && (
        <p className="mt-3 text-sm" role="alert" style={{ color: COLOR.danger, fontFamily: FONT_BODY }}>
          {error}
        </p>
      )}
      <p className="mt-4 text-xs text-center" style={{ fontFamily: FONT_BODY, color: COLOR.slate }}>
        Demo only — wire this button to your payment processor of choice.
      </p>
    </div>
  );
}

function DonateForm() {
  const amount = useDonationStore((s) => s.amount);
  const customAmount = useDonationStore((s) => s.customAmount);
  const frequency = useDonationStore((s) => s.frequency);
  const designation = useDonationStore((s) => s.designation);
  const setAmount = useDonationStore((s) => s.setAmount);
  const setCustom = useDonationStore((s) => s.setCustom);
  const setFrequency = useDonationStore((s) => s.setFrequency);
  const setDesignation = useDonationStore((s) => s.setDesignation);
  const effectiveAmount = customAmount ? Number(customAmount) || 0 : amount || 0;

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: COLOR.navy }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto">
          <Eyebrow dark>Join our mission</Eyebrow>
          <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(1.9rem,3.5vw,2.5rem)", color: "white" }}>
            Every gift is 100% tax deductible.
          </h1>
        </div>

        <div className="mt-12 rounded-2xl p-6 md:p-10" style={{ backgroundColor: COLOR.cream }}>
          <div className="flex gap-2 mb-8" role="radiogroup" aria-label="Donation frequency">
            {["once", "monthly"].map((f) => (
              <button
                key={f}
                role="radio"
                aria-checked={frequency === f}
                onClick={() => setFrequency(f)}
                className="flex-1 py-3 rounded-full text-sm font-bold capitalize transition-colors"
                style={{
                  fontFamily: FONT_BODY,
                  backgroundColor: frequency === f ? COLOR.navy : "transparent",
                  color: frequency === f ? "white" : COLOR.ink,
                  border: `1px solid ${frequency === f ? COLOR.navy : COLOR.line}`,
                }}
              >
                {f === "once" ? "One-time" : "Monthly"}
              </button>
            ))}
          </div>

          <label className="block text-sm font-bold mb-3" style={{ fontFamily: FONT_BODY, color: COLOR.ink }}>
            Choose an amount (USD)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {AMOUNTS.map((a) => (
              <button
                key={a}
                onClick={() => setAmount(a)}
                aria-pressed={amount === a}
                className="py-3.5 rounded-xl font-bold transition-colors"
                style={{
                  fontFamily: FONT_MONO,
                  backgroundColor: amount === a ? COLOR.amber : "white",
                  color: amount === a ? COLOR.navyDeep : COLOR.ink,
                  border: `1px solid ${amount === a ? COLOR.amber : COLOR.line}`,
                }}
              >
                ${a}
              </button>
            ))}
          </div>
          <label htmlFor="custom-amount" className="sr-only">
            Custom donation amount
          </label>
          <div className="relative mb-8">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: COLOR.slate, fontFamily: FONT_MONO }}>
              $
            </span>
            <input
              id="custom-amount"
              type="number"
              min="1"
              inputMode="numeric"
              placeholder="Other amount"
              value={customAmount}
              onChange={(e) => setCustom(e.target.value)}
              className="w-full pl-8 pr-4 py-3.5 rounded-xl outline-none"
              style={{ fontFamily: FONT_MONO, border: `1px solid ${COLOR.line}` }}
            />
          </div>

          <label htmlFor="designation" className="block text-sm font-bold mb-3" style={{ fontFamily: FONT_BODY, color: COLOR.ink }}>
            Direct my gift to
          </label>
          <select
            id="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl mb-8 outline-none"
            style={{ fontFamily: FONT_BODY, border: `1px solid ${COLOR.line}`, color: COLOR.ink, backgroundColor: "white" }}
          >
            {DESIGNATIONS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <div className="flex items-center justify-between p-4 rounded-xl mb-6" style={{ backgroundColor: "white", border: `1px solid ${COLOR.line}` }}>
            <span className="text-sm" style={{ fontFamily: FONT_BODY, color: COLOR.slate }}>
              Your gift
            </span>
            <span style={{ fontFamily: FONT_MONO, fontWeight: 700, fontSize: "1.25rem", color: COLOR.ink }}>
              ${effectiveAmount.toLocaleString()}
              {frequency === "monthly" ? " / month" : ""}
            </span>
          </div>

          <DonateSubmit />
        </div>
      </div>
    </section>
  );
}

export default function Donate() {
  const submitted = useDonationStore((s) => s.submitted);
  return submitted ? <ThankYou /> : <DonateForm />;
}
