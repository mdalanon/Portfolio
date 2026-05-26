import { useState, useEffect } from "react";
import { meta, roles } from "../data/portfolio";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "0 52px",
      }}
    >
      {/* Pink ambient glow — bottom left */}
      <div className="glow-orb" style={{
        width: 480, height: 480,
        background: "radial-gradient(circle, rgba(160,50,100,0.45) 0%, transparent 70%)",
        bottom: -80, left: -100,
      }} />

      {/* Pink ambient glow — top right */}
      <div className="glow-orb" style={{
        width: 360, height: 360,
        background: "radial-gradient(circle, rgba(180,70,120,0.25) 0%, transparent 70%)",
        top: -60, right: 100,
      }} />

      {/* Dot grid texture */}
      <div className="dot-grid" />

      {/* Content */}
      <div style={{
        maxWidth: "var(--max-w)", margin: "0 auto", width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: 48,
        position: "relative", zIndex: 1,
        paddingTop: 100,
      }}
      className="hero-grid"
      >

        {/* LEFT — text */}
        <div style={{ animation: "fadeUp .9s .1s both" }}>
          {/* Pixel accent dots */}
          <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
            {[...Array(8)].map((_, i) => (
              <div key={i} style={{
                width: 5, height: 5,
                background: i < 3 ? "var(--pink)" : "var(--text-4)",
                borderRadius: 1,
              }} />
            ))}
          </div>

          {/* Big display title */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(80px, 14vw, 160px)",
            color: "var(--text-1)",
            lineHeight: .9,
            letterSpacing: ".05em",
            marginBottom: 24,
            textShadow: "0 0 60px rgba(180,60,120,0.2)",
          }}>
            {meta.title}
          </h1>

          {/* Name + role row */}
          <div style={{
            display: "flex", alignItems: "center", gap: 20,
            marginBottom: 36,
            borderLeft: "2px solid var(--pink)",
            paddingLeft: 16,
          }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13, fontWeight: 700,
              letterSpacing: ".14em", textTransform: "uppercase",
              color: "var(--text-1)",
            }}>
              {meta.name}
            </span>
            <span style={{ color: "var(--text-3)", fontSize: 11 }}>|</span>
            <span
              key={idx}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12, color: "var(--pink-light)",
                letterSpacing: ".08em",
                animation: "roleCycle .3s ease",
              }}
            >
              {roles[idx]}
            </span>
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 14 }}>
            <PinkButton onClick={() => go("projects")}>View Work</PinkButton>
            <GhostButton onClick={() => go("contact")}>Contact Me</GhostButton>
          </div>

          {/* Mono year tag */}
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10, color: "var(--text-3)",
            letterSpacing: ".14em", textTransform: "uppercase",
            marginTop: 48,
          }}>
            © {meta.year} — {meta.name}
          </p>
        </div>

        {/* RIGHT — character art / avatar */}
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          animation: "fadeUp 1s .3s both",
          position: "relative",
          minHeight: 320,
          width: "100%",
          maxWidth: 360,
          margin: "0 auto",
        }} className="hero-image-container">
          {meta.heroImage ? (
            <img
              src={meta.heroImage}
              alt="Character"
              style={{
                width: "100%",
                maxWidth: 320,
                maxHeight: 420,
                objectFit: "contain",
                filter: "drop-shadow(0 0 40px rgba(180,80,130,0.5))",
                animation: "float 5s ease-in-out infinite",
              }}
            />
          ) : (
            /* Placeholder when no image set */
            <CharacterPlaceholder />
          )}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding-top: 80px !important;
          }
          .hero-image-container {
            min-height: 300px !important;
            align-items: center !important;
            margin: 0 auto !important;
          }
          .hero-image-container img {
            max-height: 320px !important;
          }
        }
        @media (max-width: 767px) {
          .hero-grid {
            gap: 24px !important;
            padding-top: 60px !important;
          }
          .hero-image-container {
            min-height: 260px !important;
          }
          .hero-image-container img {
            max-height: 280px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-grid {
            gap: 16px !important;
            padding-top: 50px !important;
          }
          .hero-image-container {
            min-height: 220px !important;
          }
          .hero-image-container img {
            max-height: 220px !important;
          }
        }
      `}</style>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        animation: "fadeIn 1s 1.2s both",
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-3)", letterSpacing: ".16em" }}>SCROLL</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, var(--pink), transparent)" }} />
      </div>
    </section>
  );
}

/* Shown when no hero image is set — pixel-art placeholder frame */
function CharacterPlaceholder() {
  return (
    <div style={{
      width: 280, height: 380,
      border: "1px solid var(--border-pink)",
      background: "rgba(180,60,120,0.04)",
      position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: 12,
    }}>
      {/* Dot grid inside the frame */}
      <div className="dot-grid" style={{ opacity: .6 }} />
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 10 }}>
          Add your character art
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-4)", letterSpacing: ".1em" }}>
          meta.heroImage in portfolio.js
        </p>
      </div>
      {/* Corner accents */}
      {[
        { top: -1, left: -1, borderTop: "2px solid var(--pink)", borderLeft: "2px solid var(--pink)" },
        { top: -1, right: -1, borderTop: "2px solid var(--pink)", borderRight: "2px solid var(--pink)" },
        { bottom: -1, left: -1, borderBottom: "2px solid var(--pink)", borderLeft: "2px solid var(--pink)" },
        { bottom: -1, right: -1, borderBottom: "2px solid var(--pink)", borderRight: "2px solid var(--pink)" },
      ].map((s, i) => (
        <div key={i} style={{ position: "absolute", width: 16, height: 16, ...s }} />
      ))}
    </div>
  );
}

function PinkButton({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "var(--pink-light)" : "var(--pink)",
        color: "#fff", border: "none",
        padding: "12px 28px",
        fontFamily: "var(--font-mono)",
        fontSize: 11, fontWeight: 700,
        letterSpacing: ".14em", textTransform: "uppercase",
        transition: "background var(--t)",
        boxShadow: hov ? "0 0 24px rgba(212,84,138,0.5)" : "0 0 12px rgba(212,84,138,0.2)",
      }}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "transparent",
        color: hov ? "var(--pink-light)" : "var(--text-2)",
        border: `1px solid ${hov ? "var(--border-pink)" : "var(--border)"}`,
        padding: "12px 28px",
        fontFamily: "var(--font-mono)",
        fontSize: 11, fontWeight: 400,
        letterSpacing: ".14em", textTransform: "uppercase",
        transition: "color var(--t), border-color var(--t)",
      }}
    >
      {children}
    </button>
  );
}
