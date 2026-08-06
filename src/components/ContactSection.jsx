import { useState } from "react";
import { Reveal } from "./Reveal";
import { contact, meta } from "../data/portfolio";

function SectionDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 24, height: 2, background: "var(--pink)" }} />
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

function ContactItem({ label, value, href, onCopy }) {
  return (
    <a
      href={href || "#"}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      onClick={(e) => {
        if (!href) e.preventDefault();
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "22px 24px",
        borderRadius: 2,
        border: "1px solid var(--border)",
        background: "rgba(255,255,255,0.08)",
        transition: "transform var(--t), border-color var(--t), background var(--t)",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 6 }}>
          {label}
        </p>
        <p style={{ color: "var(--text-2)", fontFamily: "var(--font-body)", fontSize: 14, margin: 0 }}>
          {value}
        </p>
      </div>
      {onCopy && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onCopy();
          }}
          style={{
            padding: "10px 14px",
            background: "rgba(212,84,138,0.12)",
            border: "1px solid transparent",
            borderRadius: 2,
            color: "var(--pink)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background var(--t), border-color var(--t)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(212,84,138,0.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(212,84,138,0.12)")}
        >
          Copy
        </button>
      )}
    </a>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg)", position: "relative" }}>
      <div className="glow-orb" style={{ width: 440, height: 440, background: "radial-gradient(circle, rgba(160,50,100,0.4) 0%, transparent 70%)", top: -80, left: -100 }} />
      <div className="glow-orb" style={{ width: 360, height: 360, background: "radial-gradient(circle, rgba(180,70,120,0.24) 0%, transparent 70%)", bottom: -100, right: -80 }} />
      <div className="dot-grid" />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal>
          <p className="sec-label">// 10</p>
          <SectionDivider />
          <h2 className="sec-title">CONTACT ME</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-2)", maxWidth: 620, lineHeight: 1.8, marginBottom: 48 }}>
            Let's connect! Feel free to reach out through any of the platforms below.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            <ContactItem label="Full Name" value={meta.name} />
            <ContactItem label="Email" value={contact.email} href={`mailto:${contact.email}`} onCopy={() => handleCopy(contact.email)} />
            <ContactItem label="Phone" value={contact.phone} href={`tel:${contact.phone}`} onCopy={() => handleCopy(contact.phone)} />
            <ContactItem label="Location" value="Alabang, Muntinlupa, Philippines" />
            <ContactItem label="LinkedIn" value={contact.linkedin} href={contact.linkedinUrl} />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div style={{ marginTop: 40, padding: "22px 24px", borderRadius: 2, border: "1px solid var(--border)", background: "rgba(255,255,255,0.06)" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.8, marginBottom: 18 }}>
              I am open to freelance work, full-time positions, collaborations, and project opportunities.
            </p>
            <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", padding: "12px 16px", borderRadius: 2, border: "1px solid var(--border)", background: "rgba(255,255,255,0.08)", color: "var(--text-1)", fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase" }}>
              LinkedIn
            </a>
          </div>
        </Reveal>

        {copied && (
          <div style={{ marginTop: 28, padding: "14px 18px", borderRadius: 2, border: "1px solid var(--border)", background: "rgba(212,84,138,0.12)", color: "var(--pink)", fontFamily: "var(--font-body)", fontSize: 14, maxWidth: 360 }}>
            Copied to clipboard.
          </div>
        )}
      </div>
    </section>
  );
}
