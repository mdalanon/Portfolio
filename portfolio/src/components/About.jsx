import { Reveal } from "./Reveal";
import { about, meta } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section" style={{ minHeight: "100vh",
        background: "var(--bg)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "0 52px"}}>

      {/* Subtle glow */}
      <div className="glow-orb" style={{
        width: 300, height: 300,
        background: "radial-gradient(circle, rgba(160,50,100,0.2) 0%, transparent 70%)",
        top: 0, right: "20%",
      }} />

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

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 72, alignItems: "center" }}>

          {/* LEFT — pixel art image */}
          <Reveal direction="left">
            <div style={{ position: "relative" }}>
              {/* Dotted border frame matching the reference screenshot */}
              <div style={{
                position: "absolute",
                top: -12, left: -12,
                right: 12, bottom: 12,
                border: "1px dashed rgba(212,84,138,0.25)",
                pointerEvents: "none",
              }} />

              <div style={{
                width: "100%",
                aspectRatio: "3/4",
                background: "rgba(180,60,120,0.06)",
                border: "1px solid var(--border-pink)",
                overflow: "hidden",
                position: "relative",
              }}>
                {/* Dot grid texture inside image frame */}
                <div className="dot-grid" style={{ opacity: .5 }} />

                {meta.aboutImage ? (
                  <img
                    src={meta.aboutImage}
                    alt={meta.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1 }}
                  />
                ) : (
                  <div style={{
                    position: "relative", zIndex: 1,
                    height: "100%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexDirection: "column", gap: 8,
                  }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: ".12em", textTransform: "uppercase" }}>
                      Your photo here
                    </p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-4)", letterSpacing: ".1em" }}>
                      meta.aboutImage
                    </p>
                  </div>
                )}

                {/* Corner accents */}
                {[
                  { top: 0, left: 0, borderTop: "2px solid var(--pink)", borderLeft: "2px solid var(--pink)" },
                  { top: 0, right: 0, borderTop: "2px solid var(--pink)", borderRight: "2px solid var(--pink)" },
                  { bottom: 0, left: 0, borderBottom: "2px solid var(--pink)", borderLeft: "2px solid var(--pink)" },
                  { bottom: 0, right: 0, borderBottom: "2px solid var(--pink)", borderRight: "2px solid var(--pink)" },
                ].map((s, i) => (
                  <div key={i} style={{ position: "absolute", width: 18, height: 18, ...s, zIndex: 2 }} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT — text */}
          <Reveal delay={120}>
            <p className="sec-label">// 02</p>
            <h2 className="sec-title">ABOUT ME</h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 14, lineHeight: 2,
              color: "var(--text-2)",
              maxWidth: 520,
              marginBottom: 40,
              fontWeight: 300,
              letterSpacing: ".02em",
            }}>
              {about.body}
            </p>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 32, marginTop: 8 }}>
              {[
                { n: "9+", l: "Events" },
                { n: "5",  l: "Org Roles" },
                { n: "3+", l: "Years Active" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 44, color: "var(--pink)", lineHeight: 1, letterSpacing: ".04em" }}>{n}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: ".12em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
