import { useState } from "react";
import { Reveal } from "./Reveal";
import { skills, projects } from "../data/portfolio";

/* ── Shared divider ── */
function SectionDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 24, height: 2, background: "var(--pink)" }} />
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

/* ============================================================
   SKILLS
   ============================================================ */
export function Skills() {
  const [hov, setHov] = useState(null);
  return (
    <section id="skills" className="section" style={{ background: "var(--bg)", position: "relative" }}>
      {/* Pink ambient glow — top left */}
      <div className="glow-orb" style={{
        width: 420, height: 420,
        background: "radial-gradient(circle, rgba(160,50,100,0.45) 0%, transparent 70%)",
        top: -70, left: -90,
      }} />

      {/* Pink ambient glow — bottom right */}
      <div className="glow-orb" style={{
        width: 360, height: 360,
        background: "radial-gradient(circle, rgba(180,70,120,0.25) 0%, transparent 70%)",
        bottom: -90, right: -120,
      }} />

      {/* Dot grid texture */}
      <div className="dot-grid" />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <Reveal>
          <p className="sec-label">// 04</p>
          <SectionDivider />
          <h2 className="sec-title">SKILLS</h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 16 }} className="skills-grid">
          {skills.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 60}>
              <div
                className="card"
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{ padding: "24px 20px", cursor: "default" }}
              >
                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  color: "var(--pink)", letterSpacing: ".14em", textTransform: "uppercase",
                  marginBottom: 14,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
                  color: hov === i ? "var(--text-1)" : "var(--text-2)",
                  letterSpacing: ".04em", marginBottom: 14,
                  transition: "color var(--t)",
                }}>
                  {cat.name}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {cat.items.map((item) => (
                    <span key={item} style={{
                      fontFamily: "var(--font-mono)", fontSize: 11,
                      color: "var(--text-3)",
                    }}>
                      — {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1023px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)) !important;
          }
        }
        @media (max-width: 767px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   PROJECTS
   ============================================================ */
export function Projects() {
  const [hov, setHov] = useState(null);
  return (
    <section id="projects" className="section" style={{ background: "var(--bg)", position: "relative" }}>
      {/* Pink ambient glow — top right */}
      <div className="glow-orb" style={{
        width: 520, height: 520,
        background: "radial-gradient(circle, rgba(160,50,100,0.45) 0%, transparent 70%)",
        top: -90, right: 20,
      }} />

      {/* Pink ambient glow — bottom left */}
      <div className="glow-orb" style={{
        width: 320, height: 320,
        background: "radial-gradient(circle, rgba(180,70,120,0.25) 0%, transparent 70%)",
        bottom: -110, left: 80,
      }} />

      {/* Dot grid texture */}
      <div className="dot-grid" />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <Reveal>
          <p className="sec-label">// 05</p>
          <SectionDivider />
          <h2 className="sec-title">PROJECTS</h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }} className="projects-list">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div
                className="card"
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{ padding: "32px 36px", position: "relative", overflow: "hidden" }}
              >
                {/* Number watermark */}
                <span style={{
                  position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)",
                  fontFamily: "var(--font-display)", fontSize: 96,
                  color: hov === i ? "rgba(212,84,138,0.08)" : "rgba(255,255,255,0.03)",
                  lineHeight: 1, letterSpacing: ".04em",
                  transition: "color var(--t)",
                  userSelect: "none", pointerEvents: "none",
                }}>
                  {p.num}
                </span>

                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "start" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--pink)", letterSpacing: ".14em", marginBottom: 10 }}>
                      {p.stack}
                    </p>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 40px)",
                      color: hov === i ? "var(--text-1)" : "var(--text-2)",
                      letterSpacing: ".04em", lineHeight: 1.1, marginBottom: 14,
                      transition: "color var(--t)",
                    }}>
                      {p.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-3)", lineHeight: 1.8, maxWidth: 560 }}>
                      {p.description}
                    </p>
                  </div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: ".08em", whiteSpace: "nowrap", paddingTop: 4 }}>
                    {p.period}
                  </p>
                </div>

                {/* Bottom pink line on hover */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0,
                  height: 1,
                  width: hov === i ? "100%" : "0%",
                  background: "var(--pink)",
                  transition: "width .4s ease",
                }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1023px) {
          .projects-list > div .card {
            padding: 24px 28px !important;
          }
          .projects-list > div .card span {
            font-size: 72px !important;
          }
        }
        @media (max-width: 767px) {
          .projects-list > div .card {
            padding: 20px 24px !important;
          }
          .projects-list > div .card div[style*="grid"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .projects-list > div .card span {
            font-size: 48px !important;
          }
          .projects-list > div .card p[style*="whiteSpace"] {
            white-space: normal !important;
          }
        }
        @media (max-width: 480px) {
          .projects-list {
            gap: 16px !important;
          }
          .projects-list > div .card {
            padding: 16px 20px !important;
          }
          .projects-list > div .card span {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
