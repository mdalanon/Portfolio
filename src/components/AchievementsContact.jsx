import { Reveal } from "./Reveal";
import { achievements, meta } from "../data/portfolio";

function SectionDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 24, height: 2, background: "var(--pink)" }} />
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

/* ============================================================
   ACHIEVEMENTS
   ============================================================ */
export function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: "var(--bg)", position: "relative" }}>
      {/* Pink ambient glow — top left */}
      <div className="glow-orb" style={{
        width: 420, height: 420,
        background: "radial-gradient(circle, rgba(160,50,100,0.45) 0%, transparent 70%)",
        top: -90, left: -120,
      }} />

      {/* Pink ambient glow — bottom right */}
      <div className="glow-orb" style={{
        width: 320, height: 320,
        background: "radial-gradient(circle, rgba(180,70,120,0.25) 0%, transparent 70%)",
        bottom: -100, right: -80,
      }} />

      {/* Dot grid texture */}
      <div className="dot-grid" />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <Reveal>
          <p className="sec-label">// 10</p>
          <SectionDivider />
          <h2 className="sec-title">ACHIEVEMENTS</h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 45}>
              <div className="card" style={{ padding: "24px 26px" }}>
                <span style={{
                  display: "inline-block",
                  background: a.highlight ? "var(--pink)" : "transparent",
                  border: `1px solid ${a.highlight ? "var(--pink)" : "var(--border)"}`,
                  color: a.highlight ? "#fff" : "var(--text-3)",
                  fontFamily: "var(--font-mono)", fontSize: 9,
                  letterSpacing: ".14em", textTransform: "uppercase",
                  padding: "4px 10px", marginBottom: 14,
                }}>
                  {a.tag}
                </span>
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600, color: "var(--text-1)", lineHeight: 1.4, marginBottom: 8 }}>
                  {a.title}
                </h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: ".06em", marginBottom: 6 }}>
                  {a.org}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-4)", letterSpacing: ".05em", textTransform: "uppercase" }}>
                  {a.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
export function Footer() {
  return (
    <footer style={{
      background: "var(--bg)",
      padding: "24px 52px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--text-1)", letterSpacing: ".08em" }}>
        {meta.name.toUpperCase()}<span style={{ color: "var(--pink)" }}>.</span>
      </span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-4)", letterSpacing: ".12em", textTransform: "uppercase" }}>
        © {meta.year}
      </span>
    </footer>
  );
}
