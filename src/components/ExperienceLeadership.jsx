import { Reveal } from "./Reveal";
import { experience, leadership } from "../data/portfolio";

function SectionDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 24, height: 2, background: "var(--pink)" }} />
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

/* ============================================================
   EXPERIENCE
   ============================================================ */
export function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "var(--bg)", position: "relative" }}>
      {/* Pink ambient glow — top left */}
      <div className="glow-orb" style={{
        width: 460, height: 460,
        background: "radial-gradient(circle, rgba(160,50,100,0.45) 0%, transparent 70%)",
        top: -60, left: 90,
      }} />

      {/* Pink ambient glow — bottom right */}
      <div className="glow-orb" style={{
        width: 360, height: 360,
        background: "radial-gradient(circle, rgba(180,70,120,0.25) 0%, transparent 70%)",
        bottom: -90, right: -110,
      }} />

      {/* Dot grid texture */}
      <div className="dot-grid" />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <Reveal>
          <p className="sec-label">// 07</p>
          <SectionDivider />
          <h2 className="sec-title">EXPERIENCE</h2>
        </Reveal>

        {experience.map((job) => (
          <Reveal key={job.company} delay={80}>
            <div className="card" style={{ padding: "36px 40px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, marginBottom: 28 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--pink)", letterSpacing: ".14em", marginBottom: 10 }}>
                    {job.period}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", color: "var(--text-1)", letterSpacing: ".04em", lineHeight: 1, marginBottom: 8 }}>
                    {job.company}
                  </h3>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-3)", letterSpacing: ".08em" }}>
                    {job.role}
                  </p>
                </div>
              </div>
              <div style={{ borderLeft: "1px solid var(--border-pink)", paddingLeft: 24 }}>
                {job.responsibilities.map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: i < job.responsibilities.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <span style={{ color: "var(--pink)", fontSize: 12, marginTop: 1 }}>›</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   LEADERSHIP
   ============================================================ */
export function Leadership() {
  return (
    <section id="leadership" className="section" style={{ background: "var(--bg)", position: "relative" }}>
      {/* Pink ambient glow — top center */}
      <div className="glow-orb" style={{
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(160,50,100,0.45) 0%, transparent 70%)",
        top: -120, left: "50%",
        transform: "translateX(-50%)",
      }} />

      {/* Pink ambient glow — bottom left */}
      <div className="glow-orb" style={{
        width: 360, height: 360,
        background: "radial-gradient(circle, rgba(180,70,120,0.25) 0%, transparent 70%)",
        bottom: -70, left: -140,
      }} />

      {/* Dot grid texture */}
      <div className="dot-grid" />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <Reveal>
          <p className="sec-label">// 08</p>
          <SectionDivider />
          <h2 className="sec-title">LEADERSHIP</h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {leadership.map((role, i) => (
            <Reveal key={role.title} delay={i * 55}>
              <LeadershipRow role={role} index={i} last={i === leadership.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipRow({ role, index, last }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "48px 160px 1fr",
      gap: 32, padding: "24px 0",
      borderBottom: last ? "none" : "1px solid var(--border)",
      alignItems: "start",
    }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-4)", paddingTop: 2 }}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--pink)", letterSpacing: ".1em", marginBottom: 4 }}>
          {role.period}
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-3)", letterSpacing: ".06em" }}>
          {role.org}
        </p>
      </div>
      <div>
        <h3 style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, color: "var(--text-1)", marginBottom: 6, lineHeight: 1.3 }}>
          {role.title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-3)", lineHeight: 1.7 }}>
          {role.description}
        </p>
      </div>
    </div>
  );
}
