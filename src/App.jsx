import React from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import PersonalProjects from "./components/PersonalProjects.jsx";
import EducationCerts from "./components/EducationCerts.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main className="shell">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <PersonalProjects />
        <Experience />
        <EducationCerts />
        <Contact />
      </main>
    </>
  );
}
