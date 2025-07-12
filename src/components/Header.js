// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">PORTFOLIO</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero">
        <h1>Hi, I'm <span>Fraol Lemma</span></h1>
        <p>Frontend Developer | UI/UX Enthusiast</p>
        <p>Backend Developer | Python Enthusiast</p>
        <div className="hero-buttons">
          <button className="btn-primary">View My Work</button>
          <button className="btn-outline">Contact Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;