import { Reveal } from "./Reveal";
import { education } from "../data/portfolio";



export default function Education() {
  return (
    
    <section
      id="education"
      className="section"
      style={{
        background: "var(--bg)",
        position: "relative",
      }}
    >
      {/* Pink ambient glow — bottom right */}
      <div className="glow-orb" style={{
        width: 520, height: 520,
        background: "radial-gradient(circle, rgba(160,50,100,0.45) 0%, transparent 70%)",
        bottom: -100, right: -120,
      }} />

      {/* Pink ambient glow — top left */}
      <div className="glow-orb" style={{
        width: 340, height: 340,
        background: "radial-gradient(circle, rgba(180,70,120,0.25) 0%, transparent 70%)",
        top: -80, left: 80,
      }} />

      {/* Dot grid texture */}
      <div className="dot-grid" />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <Reveal>
          <p className="sec-label">// 03</p>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 24, height: 2, background: "var(--pink)" }} />
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>
          <h2 className="sec-title">EDUCATION</h2>
        </Reveal>

        {education.map((edu) => (
          <Reveal key={edu.institution} delay={80}>
            <div className="card" style={{ padding: "36px 40px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--pink)", letterSpacing: ".14em", marginBottom: 12 }}>
                    {edu.period}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 52px)", color: "var(--text-1)", letterSpacing: ".04em", lineHeight: 1, marginBottom: 10 }}>
                    {edu.institution}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)", marginBottom: 6 }}>
                    {edu.degree}
                  </p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-3)" }}>
                    {edu.location}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
