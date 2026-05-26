import { useState } from "react";
import { Reveal } from "./Reveal";
import { events } from "../data/portfolio";

function SectionDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 24, height: 2, background: "var(--pink)" }} />
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

/* ── Modal ── */
function EventModal({ event, onClose }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const hasPhotos = event.photos?.length > 0;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(8,4,10,.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 40, backdropFilter: "blur(12px)",
        animation: "fadeIn .25s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#110c10",
          border: "1px solid var(--border-pink)",
          maxWidth: 700, width: "100%",
          position: "relative",
          animation: "modalIn .35s cubic-bezier(.16,1,.3,1)",
        }}
      >
        {/* Corner accents */}
        {[
          { top: -1, left: -1, borderTop: "2px solid var(--pink)", borderLeft: "2px solid var(--pink)" },
          { top: -1, right: -1, borderTop: "2px solid var(--pink)", borderRight: "2px solid var(--pink)" },
          { bottom: -1, left: -1, borderBottom: "2px solid var(--pink)", borderLeft: "2px solid var(--pink)" },
          { bottom: -1, right: -1, borderBottom: "2px solid var(--pink)", borderRight: "2px solid var(--pink)" },
        ].map((s, i) => (
          <div key={i} style={{ position: "absolute", width: 18, height: 18, ...s, zIndex: 2 }} />
        ))}

        {/* Photo / placeholder area */}
        <div style={{
          height: 260,
          background: "rgba(180,60,120,0.06)",
          borderBottom: "1px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div className="dot-grid" style={{ opacity: .4 }} />

          {hasPhotos ? (
            <>
              <img
                src={event.photos[photoIdx]}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
              />
              {event.photos.length > 1 && (
                <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6, zIndex: 2 }}>
                  {event.photos.map((_, i) => (
                    <button key={i} onClick={() => setPhotoIdx(i)} style={{
                      width: i === photoIdx ? 20 : 6, height: 6,
                      background: i === photoIdx ? "var(--pink)" : "var(--text-3)",
                      border: "none", borderRadius: 3, cursor: "pointer",
                      transition: "width .3s, background .3s",
                    }} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <span style={{ fontFamily: "var(--font-display)", fontSize: 52, color: "rgba(255,255,255,0.04)", letterSpacing: ".08em", position: "relative" }}>
              GALLERY
            </span>
          )}

          <span style={{
            position: "absolute", bottom: 14, right: 18,
            background: "var(--pink)", color: "#fff",
            fontFamily: "var(--font-mono)", fontSize: 10,
            letterSpacing: ".12em", padding: "5px 12px",
          }}>
            {event.date}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: "32px 40px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--pink)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 8 }}>
            {event.role}
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 3vw, 32px)", color: "var(--text-1)", letterSpacing: ".04em", lineHeight: 1.15, marginBottom: 16 }}>
            {event.title}
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)", lineHeight: 1.85, marginBottom: 28 }}>
            {event.description}
          </p>
          {!hasPhotos && (
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-4)", marginBottom: 20 }}>
              Add photos in src/data/portfolio.js → events[].photos
            </p>
          )}
          <CloseBtn onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

function CloseBtn({ onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "transparent",
        color: hov ? "var(--pink-light)" : "var(--text-3)",
        border: `1px solid ${hov ? "var(--border-pink)" : "var(--border)"}`,
        padding: "10px 24px",
        fontFamily: "var(--font-mono)", fontSize: 10,
        letterSpacing: ".14em", textTransform: "uppercase",
        cursor: "pointer", transition: "color var(--t), border-color var(--t)",
      }}
    >
      Close
    </button>
  );
}

/* ── Event row ── */
function EventRow({ event, index }) {
  const [hov, setHov] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Reveal delay={index * 40}>
        <div
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          onClick={() => setOpen(true)}
          style={{
            display: "grid", gridTemplateColumns: "52px 120px 1fr 1fr 24px",
            gap: 28, alignItems: "center",
            padding: "22px 16px",
            borderBottom: "1px solid var(--border)",
            cursor: "pointer",
            background: hov ? "rgba(212,84,138,0.04)" : "transparent",
            transition: "background var(--t)",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-4)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: ".04em" }}>
            {event.date}
          </span>
          <h3 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.8vw, 17px)", fontWeight: 600,
            color: hov ? "var(--text-1)" : "var(--text-2)",
            transition: "color var(--t)", lineHeight: 1.3,
          }}>
            {event.title}
          </h3>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-4)", letterSpacing: ".06em", textTransform: "uppercase" }}>
            {event.role}
          </p>
          <span style={{ color: hov ? "var(--pink)" : "var(--text-4)", fontSize: 14, transition: "color var(--t), transform var(--t)", transform: hov ? "translateX(2px)" : "none" }}>›</span>
        </div>
      </Reveal>

      {open && <EventModal event={event} onClose={() => setOpen(false)} />}
    </>
  );
}

/* ── Section ── */
export default function Events() {
  return (
    <section id="events" className="section" style={{ background: "var(--bg)", position: "relative" }}>
      {/* Pink ambient glow — top right */}
      <div className="glow-orb" style={{
        width: 520, height: 520,
        background: "radial-gradient(circle, rgba(160,50,100,0.45) 0%, transparent 70%)",
        top: -90, right: -60,
      }} />

      {/* Pink ambient glow — bottom center */}
      <div className="glow-orb" style={{
        width: 360, height: 360,
        background: "radial-gradient(circle, rgba(180,70,120,0.25) 0%, transparent 70%)",
        bottom: -100, left: "50%",
        transform: "translateX(-50%)",
      }} />

      {/* Dot grid texture */}
      <div className="dot-grid" />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <Reveal>
          <p className="sec-label">// 09</p>
          <SectionDivider />
          <h2 className="sec-title">EVENTS</h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "var(--text-3)",
            marginBottom: 32,
            maxWidth: 600,
          }}>
            Events i've organized. Click on any event to see details and photos.
          </p>
        </Reveal>
        <div>
          {events.map((e, i) => (
            <EventRow key={e.title} event={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
