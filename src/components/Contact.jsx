import React from "react";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/profile.json";
import { Mail, LinkedIn, GitHub, Docker, Phone, MapPin } from "./Icons.jsx";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal className="contact-inner">
        <p className="section-index contact-index">07 — Contact</p>
        <h2 className="contact-title">Let's build something solid.</h2>
        <p className="contact-sub">
          I'm always open to interesting front-end work and good conversations.
          The fastest way to reach me is email.
        </p>

        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg">
            <Mail width="18" height="18" /> {profile.email}
          </a>
        </div>

        <ul className="contact-links">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedIn width="16" height="16" /> LinkedIn
            </a>
          </li>
          {profile.github && (
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GitHub width="16" height="16" /> GitHub
              </a>
            </li>
          )}
          {profile.dockerhub && (
            <li>
              <a href={profile.dockerhub} target="_blank" rel="noreferrer">
                <Docker width="16" height="16" /> Docker Hub
              </a>
            </li>
          )}
          <li>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
              <Phone width="16" height="16" /> {profile.phone}
            </a>
          </li>
          <li>
            <span><MapPin width="16" height="16" /> {profile.location}</span>
          </li>
        </ul>
      </Reveal>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer-built">Built with React + Vite</span>
      </footer>
    </section>
  );
}
