import React, { useEffect, useState } from "react";
import { profile, navLinks } from "../data/profile.json";

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-brand-mark">{"</>"}</span> {profile.name.split(" ")[0]}
        </a>
        <nav className="nav-links">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={`nav-link ${active === l.id ? "active" : ""}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${profile.email}`} className="nav-cta">Get in touch</a>
      </div>
    </header>
  );
}
