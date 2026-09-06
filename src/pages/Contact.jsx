import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { COLOR, FONT_DISPLAY, FONT_BODY } from "../lib/theme";
import Eyebrow from "../components/Eyebrow";
import FAQ from "../components/FAQ";
import SEO from "../components/SEO";
import { ORG_ADDRESS_LINE, ORG_PHONE_DISPLAY, ORG_WHATSAPP_DISPLAY, ORG_EMAIL, WHATSAPP_LINK } from "../lib/seo";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Enter a message.";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${ORG_EMAIL}?subject=${subject}&body=${body}`;
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: COLOR.cream, border: `1px solid ${COLOR.line}` }}>
        <CheckCircle2 size={36} color={COLOR.green} className="mx-auto mb-3" aria-hidden="true" />
        <p style={{ fontFamily: FONT_BODY, fontWeight: 700, color: COLOR.ink }}>Almost there.</p>
        <p className="text-sm mt-1" style={{ fontFamily: FONT_BODY, color: COLOR.slate }}>
          We've opened your email app with your message pre-filled — just hit send. If nothing opened,
          email us directly at {ORG_EMAIL}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-bold mb-2" style={{ fontFamily: FONT_BODY, color: COLOR.ink }}>
          Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg outline-none"
          style={{ fontFamily: FONT_BODY, border: `1px solid ${errors.name ? COLOR.danger : COLOR.line}` }}
        />
        {errors.name && <p className="text-xs mt-1" style={{ color: COLOR.danger }}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-bold mb-2" style={{ fontFamily: FONT_BODY, color: COLOR.ink }}>
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg outline-none"
          style={{ fontFamily: FONT_BODY, border: `1px solid ${errors.email ? COLOR.danger : COLOR.line}` }}
        />
        {errors.email && <p className="text-xs mt-1" style={{ color: COLOR.danger }}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold mb-2" style={{ fontFamily: FONT_BODY, color: COLOR.ink }}>
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg outline-none resize-none"
          style={{ fontFamily: FONT_BODY, border: `1px solid ${errors.message ? COLOR.danger : COLOR.line}` }}
        />
        {errors.message && <p className="text-xs mt-1" style={{ color: COLOR.danger }}>{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full py-3.5 rounded-full font-bold text-sm"
        style={{ backgroundColor: COLOR.navy, color: "white", fontFamily: FONT_BODY }}
      >
        Send message
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Beautiful Gate Foundation for the Blind — visit, call, WhatsApp or email us at our office in Ohaukwu, Ebonyi State, Nigeria."
        path="/contact"
      />
      <section className="py-20 md:py-28" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <div>
            <Eyebrow>Contact us</Eyebrow>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "clamp(1.9rem,3.5vw,2.5rem)", color: COLOR.ink, lineHeight: 1.15 }}>
              We'd love to hear from you.
            </h1>
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-3">
                <MapPin size={18} color={COLOR.amberDeep} aria-hidden="true" />
                <span style={{ fontFamily: FONT_BODY, color: COLOR.ink }}>{ORG_ADDRESS_LINE}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} color={COLOR.amberDeep} aria-hidden="true" />
                <a href={`tel:${ORG_PHONE_DISPLAY.replace(/\s/g, "")}`} style={{ fontFamily: FONT_BODY, color: COLOR.ink }}>
                  {ORG_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={18} color={COLOR.amberDeep} aria-hidden="true" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ fontFamily: FONT_BODY, color: COLOR.ink }}>
                  WhatsApp: {ORG_WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} color={COLOR.amberDeep} aria-hidden="true" />
                <a href={`mailto:${ORG_EMAIL}`} style={{ fontFamily: FONT_BODY, color: COLOR.ink }}>
                  {ORG_EMAIL}
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <FAQ />
    </>
  );
}
