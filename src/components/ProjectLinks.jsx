import React from "react";
import { GitHub, Docker, ArrowUpRight } from "./Icons.jsx";

const ICONS = { github: GitHub, docker: Docker, demo: ArrowUpRight, link: ArrowUpRight };

// Renders a project's links. Supports the multi-link shape:
//   "links": [
//     { "type": "github", "url": "...", "label": "Source" },
//     { "type": "docker", "url": "...", "label": "Docker Hub" },
//     { "type": "demo",   "url": "...", "label": "Live demo" }
//   ]
// and stays backward-compatible with the older single-link shape:
//   "link": "...", "linkLabel": "Live demo"
export default function ProjectLinks({ project }) {
  const links = project.links && project.links.length
    ? project.links
    : project.link
    ? [{ type: "demo", url: project.link, label: project.linkLabel || "Visit" }]
    : [];

  if (!links.length) return null;

  return (
    <div className="project-links">
      {links.map((l) => {
        const Icon = ICONS[l.type] || ArrowUpRight;
        return (
          <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="project-link">
            <Icon width="14" height="14" /> {l.label}
          </a>
        );
      })}
    </div>
  );
}
