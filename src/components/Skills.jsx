import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/profile.json";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Technologies">
      <div className="skills-grid">
        {profile.skills.map((group, i) => (
          <Reveal key={group.group} className="skill-card" delay={i * 60}>
            <h3 className="skill-group">{group.group}</h3>
            <ul className="skill-chips">
              {group.items.map((item) => (
                <li key={item} className="chip">{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
