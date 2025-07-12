// src/components/Projects.js
import React from "react";
import useReveal from "../utils/useReveal";
import "./Projects.css";
import p1 from "../assets/projects/image.jpg";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform with Python backend",
    image: p1,
    tags: ["HTML/CSS", "Javascript", "Python", "Django"]
  },
  {
    id: 2,
    title: "Portfolio Template",
    description: "A modern portfolio template for creative professionals",
    image: p1,
    tags: ["HTML/CSS", "JavaScript", "React",]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for managing daily tasks and projects",
    image: p1,
    tags: ["React", "Firebase"]
  }
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" ref={ref} className="projects-section">
      <div className="container">
        <h2 className="section-title">My&nbsp;Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="project-card"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <figure className="project-image">
                <img src={p.image} alt={p.title} loading="lazy" />
              </figure>

              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <ul className="project-tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <a className="btn-outline" href="/" aria-label={`View ${p.title}`}>
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
