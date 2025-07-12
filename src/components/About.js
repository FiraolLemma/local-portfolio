// src/components/About.js
import React from "react";
import useReveal from "../utils/useReveal";
import "./About.css";

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" className="about-section" ref={revealRef}>
      <span className="angled-bg" aria-hidden />
      <div className="container">
        <h2 className="section-title">About&nbsp;Me</h2>

        <div className="about-content">
          {/* text */}
          <div className="about-text">
            <p>
              I’m a passionate developer who blends clean code with bold design.
              My toolkit includes React, modern JavaScript, and a keen eye for user‑centric detail.
            </p>
            <p>
              With roots in both design and engineering, I <em>bridge aesthetics
              and functionality</em> so every pixel feels intentional.
            </p>

            <h3 className="skills-heading">Skills</h3>
            <div className="skill-tags">
              {["HTML/CSS", "JavaScript", "React", "Python", "Git"].map(
                (skill, i) => (
                  <span key={skill} style={{ animationDelay: `${i * 0.15}s` }}>
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* image grid */}
          <div className="about-image-grid">
            {[1, 2, 3, 4].map((n) => (
              // inside About.js image map
<figure
  key={n}
  style={{ animationDelay: `${n * 0.1}s` }}
  onMouseMove={(e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - left) / width - 0.5;       // -0.5 → 0.5
    e.currentTarget.style.setProperty("--tilt", `${percent * 10}deg`);
  }}
  onMouseLeave={(e) => e.currentTarget.style.setProperty("--tilt", "0deg")}
>
  <img src={`/images/image.jpg`} alt={`Sample work ${n}`} />
</figure>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// <img src={`/images/image.jpg`} alt={`Sample work ${n}`} />