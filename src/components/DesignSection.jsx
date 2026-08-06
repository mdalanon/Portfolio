import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { designs } from "../data/portfolio";

/* ── Shared divider ── */
function SectionDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 24, height: 2, background: "var(--pink)" }} />
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

function formatDescription(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = urlRegex.exec(text)) !== null) {
    parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        key={`link-${match.index}`}
        href={match[0]}
        target="_blank"
        rel="noreferrer noopener"
        style={{ color: "var(--pink-light)", textDecoration: "underline" }}
      >
        {match[0]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  parts.push(text.slice(lastIndex));
  return parts;
}

/* ── Design Details Modal ── */
function DesignModal({ design, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
        animation: "fadeIn 0.3s ease",
      }}
    >
      <div
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border)",
          borderRadius: 2,
          maxWidth: 800,
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          position: "relative",
          animation: "scaleIn 0.3s ease",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "none",
            border: "none",
            color: "var(--text-2)",
            fontSize: 24,
            cursor: "pointer",
            zIndex: 1,
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            transition: "background var(--t)",
          }}
          onMouseEnter={(e) => e.target.style.background = "var(--bg-card)"}
          onMouseLeave={(e) => e.target.style.background = "none"}
        >
          ×
        </button>

        <div style={{ padding: "40px 32px 32px" }}>
          {/* Design image */}
          <div style={{
            width: "100%",
            height: 400,
            background: "var(--bg-card)",
            borderRadius: 2,
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Actual image or placeholder */}
            {design.image ? (
              <img
                src={design.image}
                alt={design.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, var(--pink-dim), var(--bg-card))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-2)",
                fontFamily: "var(--font-mono)",
                fontSize: 16,
                textAlign: "center",
                padding: "20px",
              }}>
                {design.title}
                <br />
                <span style={{ fontSize: 12, opacity: 0.7 }}>
                  Image preview coming soon
                </span>
              </div>
            )}
          </div>

          {/* Design info */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "start" }}>
            <div>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--pink)",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}>
                {design.category}
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 48px)",
                color: "var(--text-1)",
                letterSpacing: ".04em",
                lineHeight: 1.1,
                marginBottom: 20,
              }}>
                {design.title}
              </h2>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--text-2)",
                lineHeight: 1.8,
                marginBottom: 24,
              }}>
                {formatDescription(design.description)}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text-3)",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}>
                    Tools Used
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--text-2)",
                  }}>
                    {design.tools}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ minWidth: 200 }}>
              <div style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 2,
                padding: "24px 20px",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  color: "var(--text-1)",
                  marginBottom: 16,
                }}>
                  Project Details
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--text-3)",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}>
                      Category
                    </p>
                    <p style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "var(--text-2)",
                    }}>
                      {design.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   DESIGN SHOWCASE
   ============================================================ */
export default function DesignSection() {
  const [hov, setHov] = useState(null);
  const [filter, setFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const categories = ["All", ...new Set(designs.map(d => d.category))];
  const filteredDesigns = filter === "All" ? designs : designs.filter(d => d.category === filter);

  const openModal = (design) => {
    setSelectedDesign(design);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDesign(null);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (modalOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [modalOpen]);

  return (
    <section id="designs" className="section" style={{ background: "var(--bg)", position: "relative" }}>
      {/* Pink ambient glow — top left */}
      <div className="glow-orb" style={{
        width: 480, height: 480,
        background: "radial-gradient(circle, rgba(160,50,100,0.45) 0%, transparent 70%)",
        top: -80, left: -100,
      }} />

      {/* Pink ambient glow — bottom right */}
      <div className="glow-orb" style={{
        width: 380, height: 380,
        background: "radial-gradient(circle, rgba(180,70,120,0.25) 0%, transparent 70%)",
        bottom: -100, right: -80,
      }} />

      {/* Dot grid texture */}
      <div className="dot-grid" />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <Reveal>
          <p className="sec-label">// 06</p>
          <SectionDivider />
          <h2 className="sec-title">DESIGN SHOWCASE</h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "var(--text-3)",
            marginBottom: 32,
            maxWidth: 600,
          }}>
            A collection of my UI/UX, graphic design, and creative work
          </p>
        </Reveal>

        {/* Filter buttons */}
        <Reveal delay={100}>
          <div style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "8px 16px",
                  background: filter === cat ? "var(--pink)" : "var(--bg-card)",
                  border: `1px solid ${filter === cat ? "var(--pink)" : "var(--border)"}`,
                  borderRadius: 2,
                  color: filter === cat ? "#fff" : "var(--text-2)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all var(--t)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Design grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
        }}>
          {filteredDesigns.map((design, i) => (
            <Reveal key={design.title} delay={i * 60}>
              <div
                className="card"
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  padding: 0,
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                {/* Design image */}
                <div style={{
                  width: "100%",
                  height: 200,
                  background: "var(--bg-card)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Actual image or placeholder */}
                  {design.image ? (
                    <img
                      src={design.image}
                      alt={design.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div style={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(135deg, var(--pink-dim), var(--bg-card))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-2)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                    }}>
                      {design.title}
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: hov === i ? 1 : 0,
                    transition: "opacity var(--t)",
                  }}>
                    <button 
                      onClick={() => openModal(design)}
                      style={{
                      padding: "12px 24px",
                      background: "var(--pink)",
                      border: "none",
                      borderRadius: 2,
                      color: "#fff",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "background var(--t)",
                    }}>
                      View Design
                    </button>
                  </div>
                </div>

                {/* Design info */}
                <div style={{ padding: "24px 20px" }}>
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--pink)",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}>
                    {design.category}
                  </p>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    color: hov === i ? "var(--text-1)" : "var(--text-2)",
                    letterSpacing: ".04em",
                    lineHeight: 1.2,
                    marginBottom: 12,
                    transition: "color var(--t)",
                  }}>
                    {design.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--text-3)",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}>
                    {formatDescription(design.description)}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text-2)",
                    letterSpacing: ".08em",
                  }}>
                    {design.tools}
                  </p>
                </div>

                {/* Number watermark */}
                <span style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  fontFamily: "var(--font-display)",
                  fontSize: 48,
                  color: hov === i ? "rgba(212,84,138,0.15)" : "rgba(255,255,255,0.03)",
                  lineHeight: 1,
                  letterSpacing: ".04em",
                  transition: "color var(--t)",
                  userSelect: "none",
                  pointerEvents: "none",
                  zIndex: 1,
                }}>
                  {design.num}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1023px) {
          [class*="design-grid"] {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 767px) {
          [class*="design-grid"] {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
            gap: 16px !important;
          }
          [class*="design"] > div > div:nth-child(1) {
            height: 160px !important;
          }
        }
        @media (max-width: 480px) {
          [class*="design-grid"] {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          [class*="design"] > div > div:nth-child(1) {
            height: 140px !important;
          }
        }
      `}</style>

      {/* Design Details Modal */}
      {modalOpen && selectedDesign && (
        <DesignModal design={selectedDesign} onClose={closeModal} />
      )}
    </section>
  );
}