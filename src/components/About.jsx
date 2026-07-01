import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/profile.json";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="about-grid">
        <Reveal className="about-copy">
          {profile.about.split("\n\n").map((p, i) => (
            <p key={i} className="about-para">{p}</p>
          ))}
        </Reveal>
        <Reveal className="about-facts" delay={80}>
          {profile.facts.map((f) => (
            <div key={f.label} className="about-fact">
              <span className="about-fact-label">{f.label}</span>
              <span className="about-fact-value">{f.value}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
