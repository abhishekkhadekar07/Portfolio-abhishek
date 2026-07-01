import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/profile.json";

export default function Experience() {
  return (
    <Section id="experience" index="05" title="Experience">
      <div className="timeline">
        {profile.experience.map((job, i) => (
          <Reveal key={i} className="tl-item" delay={i * 80}>
            <div className="tl-marker" />
            <div className="tl-body">
              <div className="tl-head">
                <h3 className="tl-role">{job.role}</h3>
                <span className="tl-period">{job.period}</span>
              </div>
              <p className="tl-company">{job.company}</p>
              <p className="tl-blurb">{job.blurb}</p>

              {job.engagements.length > 0 && (
                <div className="tl-engagements">
                  {job.engagements.map((e) => (
                    <div key={e.client} className="engagement">
                      <div className="engagement-head">
                        <span className="engagement-client">{e.client}</span>
                        <span className="engagement-period">{e.period}</span>
                      </div>
                      <p className="engagement-note">{e.note}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
