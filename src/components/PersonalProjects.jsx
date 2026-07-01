import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/profile.json";
import ProjectLinks from "./ProjectLinks.jsx";

// Reads profile.personalProjects — add entries there to grow this section.
export default function PersonalProjects() {
  const items = profile.personalProjects || [];
  if (!items.length) return null;

  return (
    <Section id="personal" index="04" title="Personal Projects">
      <div className="projects">
        {items.map((p, i) => (
          <Reveal key={p.name} className="project-card" delay={(i % 2) * 70}>
            <div className="project-top">
              <span className="project-domain">{p.domain}</span>
              <span className="project-period">{p.period}</span>
            </div>
            <h3 className="project-name">{p.name}</h3>
            <ul className="project-highlights">
              {p.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
            <div className="project-foot">
              <ul className="project-tech">
                {p.tech.map((t) => (
                  <li key={t} className="chip chip-sm">{t}</li>
                ))}
              </ul>
              <ProjectLinks project={p} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
