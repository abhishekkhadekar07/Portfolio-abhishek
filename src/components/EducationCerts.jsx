import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/profile.json";

export default function EducationCerts() {
  const { education, certifications } = profile;
  return (
    <Section id="education" index="06" title="Education & Certifications">
      <div className="edu-grid">
        <Reveal className="edu-card">
          <span className="edu-tag">Education</span>
          <h3 className="edu-degree">{education.degree}</h3>
          <p className="edu-school">{education.school}</p>
          <p className="edu-meta">{education.period} · {education.detail}</p>
        </Reveal>

        <Reveal className="edu-card" delay={80}>
          <span className="edu-tag">Certifications</span>
          {certifications.map((c) => (
            <div key={c.code} className="cert">
              <h3 className="cert-name">{c.name}</h3>
              <p className="cert-meta">
                <span className="cert-code">{c.code}</span> · {c.issuer}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
