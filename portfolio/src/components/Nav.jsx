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

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
      padding: "22px 52px",
      display: "flex", alignItems: "center", justifyContent: "flex-end",
      background: scrolled ? "rgba(14,10,13,.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      transition: "background .4s, border .4s",
    }}>
      {LINKS.map((l) => (
        <NavLink key={l.id} label={l.label} onClick={() => go(l.id)} />
      ))}
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
      }}
    >
      {label}
    </button>
  );
}
