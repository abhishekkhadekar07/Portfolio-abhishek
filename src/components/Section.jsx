import React from "react";
import Reveal from "./Reveal.jsx";

// A page section with a numbered mono eyebrow (e.g. "01 — ABOUT").
export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <Reveal className="section-head">
        <span className="section-index">{index}</span>
        <span className="section-line" />
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
