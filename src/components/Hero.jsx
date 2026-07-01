import React from "react";
import { profile } from "../data/profile.json";
import { Mail, LinkedIn, GitHub, Docker } from "./Icons.jsx";

export default function Hero() {
  const initials = profile.name.split(" ").map((w) => w[0]).join("");

  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-dot" /> {profile.role} · {profile.location}
          </p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-tagline">
            I build <span className="hl">scalable, production-grade</span> web applications for{" "}
            <span className="hl">fintech</span> and <span className="hl">marketplace</span> products.
          </p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Mail width="17" height="17" /> Get in touch
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <LinkedIn width="16" height="16" /> LinkedIn
            </a>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <GitHub width="16" height="16" /> GitHub
              </a>
            )}
            {profile.dockerhub && (
              <a href={profile.dockerhub} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <Docker width="16" height="16" /> Docker Hub
              </a>
            )}
          </div>

          <ul className="hero-facts">
            {profile.facts.map((f) => (
              <li key={f.label}>
                <span className="hero-fact-value">{f.value}</span>
                <span className="hero-fact-label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-aside" aria-hidden="true">
          <div className="monogram-card">
            <div className="monogram-ring">
              <span className="monogram">{initials}</span>
            </div>
            <p className="monogram-name">{profile.name}</p>
            <p className="monogram-role">{profile.role}</p>
            <div className="monogram-meta">
              <span>📍 {profile.location.split(",")[0]}</span>
              <span>★ 3.5+ yrs</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll">scroll ↓</a>
    </section>
  );
}
