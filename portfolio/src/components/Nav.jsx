import { useState, useEffect } from "react";

const LINKS = [
  { label: "About Me",   id: "about" },
  { label: "Projects",   id: "projects" },
  { label: "Designs",    id: "designs" },
  { label: "Leadership", id: "leadership" },
  { label: "Events",     id: "events" },
  { label: "Contact",    id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
      padding: "22px 52px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(14,10,13,.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      transition: "background .4s, border .4s",
    }}>
      {/* Logo / Home Link */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          background: "none", border: "none",
          color: "var(--pink-light)",
          fontFamily: "var(--font-display)",
          fontSize: 16, fontWeight: 700,
          letterSpacing: ".08em",
          cursor: "pointer",
          transition: "color var(--t)",
        }}
      >
        MD
      </button>

      {/* Desktop Menu */}
      <div style={{
        display: "flex", gap: 4,
      }}>
        {LINKS.map((l) => (
          <NavLink key={l.id} label={l.label} onClick={() => go(l.id)} />
        ))}
      </div>

      {/* Mobile Hamburger Menu */}
      <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} links={LINKS} go={go} />
    </nav>
  );
}

function NavLink({ label, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "none", border: "none",
        color: hov ? "var(--pink-light)" : "var(--text-2)",
        fontFamily: "var(--font-mono)",
        fontSize: 11, fontWeight: 400,
        letterSpacing: ".12em", textTransform: "uppercase",
        padding: "4px 18px",
        transition: "color var(--t)",
        cursor: "pointer",
        display: "none",
      }}
      className="desktop-nav"
    >
      {label}
    </button>
  );
}

function HamburgerMenu({ menuOpen, setMenuOpen, links, go }) {
  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none", border: "none",
          display: "none",
          flexDirection: "column", gap: 5,
          cursor: "pointer",
          padding: "8px",
        }}
        className="hamburger-btn"
      >
        <span style={{
          width: 24, height: 2,
          background: menuOpen ? "var(--pink-light)" : "var(--text-2)",
          transition: "all 0.3s ease",
          transform: menuOpen ? "rotate(45deg) translateY(11px)" : "none",
        }} />
        <span style={{
          width: 24, height: 2,
          background: "var(--text-2)",
          opacity: menuOpen ? 0 : 1,
          transition: "opacity 0.3s ease",
        }} />
        <span style={{
          width: 24, height: 2,
          background: menuOpen ? "var(--pink-light)" : "var(--text-2)",
          transition: "all 0.3s ease",
          transform: menuOpen ? "rotate(-45deg) translateY(-11px)" : "none",
        }} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: 70, left: 0, right: 0,
          background: "rgba(14,10,13,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          display: "flex", flexDirection: "column",
          gap: 0,
          padding: "20px 24px",
          animation: "fadeIn 0.3s ease",
        }}>
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              style={{
                background: "none", border: "none",
                color: "var(--text-2)",
                fontFamily: "var(--font-mono)",
                fontSize: 11, fontWeight: 400,
                letterSpacing: ".12em", textTransform: "uppercase",
                padding: "12px 0",
                textAlign: "left",
                transition: "color var(--t)",
                cursor: "pointer",
                borderBottom: "1px solid rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => e.target.style.color = "var(--pink-light)"}
              onMouseLeave={(e) => e.target.style.color = "var(--text-2)"}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 768px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: block !important; }
        }
      `}</style>
    </>
  );
}
