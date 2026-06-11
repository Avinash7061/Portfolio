import React, { useState, useEffect, useRef } from 'react';

function Counter({ targetCount }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const steps = 40;
          const increment = targetCount / steps;
          const timer = setInterval(() => {
            start += increment;
            if (start >= targetCount) {
              setCount(targetCount);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 40);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [targetCount]);

  return <span ref={elementRef} className="stat-number">{count}</span>;
}

export default function Hero() {
  const typedTexts = [
    'AI-Powered Healthcare Apps',
    'Deep Learning Models',
    'Full Stack Applications',
    'BERT NLP Systems',
    'Intelligent Agents',
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % typedTexts.length;
      const fullText = typedTexts[i];

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(80);

        if (text === fullText) {
          setIsDeleting(true);
          setTypingSpeed(2000); // pause at end
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(40);

        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(400); // pause before next
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <p className={`hero-greeting ${isVisible ? 'visible' : ''} animate-in`}>Hello, I'm</p>
          <h1 className={`hero-name ${isVisible ? 'visible' : ''} animate-in delay-1`}>
            Avinash<br />Kumar Jha
          </h1>
          <div className={`hero-title-wrapper ${isVisible ? 'visible' : ''} animate-in delay-2`}>
            <span className="hero-title-label">I build</span>
            <span className="hero-title-typed" id="typedText">{text}</span>
            <span className="typed-cursor">|</span>
          </div>
          <p className={`hero-description ${isVisible ? 'visible' : ''} animate-in delay-3`}>
            Freelance AI/ML Developer & Full Stack Engineer delivering custom intelligent platforms, 
            automated workflow systems, and production-ready architectures for clients.
          </p>
          <div className={`hero-actions ${isVisible ? 'visible' : ''} animate-in delay-4`}>
            <a href="#projects" className="btn btn-primary" onClick={handleScrollToProjects}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              View Projects
            </a>
            <a href="https://github.com/Avinash7061" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
          <div className={`hero-stats ${isVisible ? 'visible' : ''} animate-in delay-5`}>
            <div className="stat">
              <Counter targetCount={5} /><span className="stat-plus">+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <Counter targetCount={6} /><span className="stat-plus">+</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <Counter targetCount={4} /><span className="stat-plus">+</span>
              <span className="stat-label">Hackathons</span>
            </div>
          </div>
        </div>
        <div className={`hero-image ${isVisible ? 'visible' : ''} animate-in delay-2`}>
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img src="./profile.jpg" alt="Avinash Kumar Jha" className="hero-photo" />
            <div className="hero-image-ring"></div>
          </div>
          <div className="floating-badge badge-1">
            <span>🧠</span> AI/ML
          </div>
          <div className="floating-badge badge-2">
            <span>⚛️</span> React
          </div>
          <div className="floating-badge badge-3">
            <span>🐍</span> Python
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
