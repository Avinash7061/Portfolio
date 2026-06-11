import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const count = 30;
    const items = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 3 + 1;
      items.push({
        id: i,
        left: Math.random() * 100 + '%',
        width: size + 'px',
        height: size + 'px',
        animationDuration: (Math.random() * 15 + 10) + 's',
        animationDelay: (Math.random() * 10) + 's',
      });
    }
    setParticles(items);
  }, []);

  return (
    <div className="bg-particles" id="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.width,
            height: p.height,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    // Setup scroll reveal animation trigger classes
    const revealElements = document.querySelectorAll(
      '.skill-category, .project-card, .timeline-item, .cert-card, .about-grid, .contact-content'
    );

    revealElements.forEach((el) => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Particles />

      {/* Ambient Background Blobs */}
      <div className="blob-bg blob-1"></div>
      <div className="blob-bg blob-2"></div>

      <div className="main-content-wrapper">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </div>

      <Footer />
    </>
  );
}
