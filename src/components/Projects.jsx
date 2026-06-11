import React from 'react';

export default function Projects() {
  const projects = [
    {
      isFeatured: true,
      label: '🏆 Featured Project',
      name: 'MediFlow AI — Healthcare Triage System',
      description: (
        <p>
          An AI-powered healthcare triage application that uses a <strong>fine-tuned BERT model</strong> 
          {" "}to classify patient symptoms into 4 urgency levels (Red/Orange/Yellow/White). Features 
          {" "}<strong>JWT authentication</strong>, multi-role access (Patient, Doctor, Hospital Admin), 
          real-time inference with confidence scores, and a modern React UI.
        </p>
      ),
      tech: ['BERT', 'PyTorch', 'FastAPI', 'React', 'JWT'],
      liveLink: 'https://lifecure.org.in',
      codeLink: 'https://github.com/Avinash7061/AI_triage_App',
      mockupUrl: 'lifecure.org.in',
      visualType: 'triage'
    },
    {
      isFeatured: false,
      label: '🛡️ DeFi Wealth Co-Pilot',
      name: 'Fluxaa — DeFi Intelligence Engine',
      description: (
        <p>
          An automated Web3 co-pilot that scans global DeFi yields, assesses real-time smart contract risks, 
          and helps users optimize passive crypto returns safely. Bridges Web2 convenience and Web3 DeFi yields.
        </p>
      ),
      tech: ['Python', 'AI Agents', 'Web3', 'DeFi'],
      liveLink: 'https://fluxaa.versal.app',
      codeLink: 'https://github.com/Avinash7061/Fluxa',
      mockupUrl: 'fluxaa.versal.app',
      visualType: 'agent'
    },
    {
      isFeatured: false,
      label: '🎨 E-Commerce Platform',
      name: 'Mediva Designs — Handcrafted Mandala Art',
      description: (
        <p>
          An e-commerce platform for selling handcrafted mandala paintings. Features secure credentials 
          and Google OAuth, PostgreSQL database, Stripe checkout integration, and custom CSS modules.
        </p>
      ),
      tech: ['Next.js 16', 'Prisma', 'PostgreSQL', 'Stripe', 'NextAuth'],
      liveLink: 'https://medivadesigns.shop',
      codeLink: 'https://github.com/Avinash7061/medivadesigns',
      mockupUrl: 'medivadesigns.shop',
      visualType: 'list-mediva'
    },
    {
      isFeatured: false,
      label: '💼 Client Corporate Site',
      name: 'J. Suthar & Associates — Company Secretaries',
      description: (
        <p>
          Designed and developed a professional corporate website for a leading Company Secretary firm in Vapi, Gujarat. 
          Features an interactive service showcase, client query forms, and mobile responsive corporate layout.
        </p>
      ),
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveLink: 'https://jsa-india.com',
      codeLink: null,
      mockupUrl: 'jsa-india.com',
      visualType: 'list-jsa'
    },
    {
      isFeatured: false,
      label: '🎓 Full Stack Project',
      name: 'EduBridge — Educational Platform',
      description: (
        <p>
          An educational platform designed to bridge learning gaps and connect students 
          with quality resources. Built with a focus on accessibility and user experience.
        </p>
      ),
      tech: ['Python', 'Web Development', 'Education'],
      liveLink: null,
      codeLink: 'https://github.com/Avinash7061/Edubridge',
      mockupUrl: 'github.com/Avinash7061/Edubridge',
      visualType: 'edu'
    }
  ];

  const renderVisual = (type) => {
    switch (type) {
      case 'triage':
        return (
          <div className="mockup-triage">
            <div className="triage-display">
              <div className="triage-level red">🔴 Emergency</div>
              <div className="triage-level orange">🟠 Urgent</div>
              <div className="triage-level yellow">🟡 Semi-urgent</div>
              <div className="triage-level white">⚪ Home Care</div>
            </div>
            <div className="mockup-label">BERT Model Triage</div>
          </div>
        );
      case 'agent':
        return (
          <div className="agent-flow" style={{ flexWrap: 'wrap' }}>
            <div className="agent-node">💰 DeFi Yields</div>
            <div className="agent-arrow">→</div>
            <div className="agent-node highlight">🛡️ Fluxaa</div>
            <div className="agent-arrow">→</div>
            <div className="agent-node">🟢 Low Risk</div>
          </div>
        );
      case 'list-mediva':
        return (
          <div className="mockup-list-visual">
            <div className="mockup-list-icon">🎨</div>
            <div className="mockup-list-items">
              <div className="mockup-list-item" style={{ width: '95%', whiteSpace: 'normal', wordBreak: 'break-word' }}>Mandala Art Shop</div>
              <div className="mockup-list-item" style={{ width: '75%', whiteSpace: 'normal', wordBreak: 'break-word' }}>PostgreSQL + Prisma</div>
              <div className="mockup-list-item highlight" style={{ width: '60%', whiteSpace: 'normal', wordBreak: 'break-word' }}>Stripe Payments</div>
            </div>
          </div>
        );
      case 'list-jsa':
        return (
          <div className="mockup-list-visual">
            <div className="mockup-list-icon">🏢</div>
            <div className="mockup-list-items">
              <div className="mockup-list-item" style={{ width: '90%', whiteSpace: 'normal', wordBreak: 'break-word' }}>Corporate Law</div>
              <div className="mockup-list-item" style={{ width: '75%', whiteSpace: 'normal', wordBreak: 'break-word' }}>Compliance Services</div>
              <div className="mockup-list-item" style={{ width: '80%', whiteSpace: 'normal', wordBreak: 'break-word' }}>IPO & M&A Support</div>
            </div>
          </div>
        );
      case 'edu':
        return (
          <div className="edu-visual">
            <div className="edu-icon">🎓</div>
            <div className="edu-bars">
              <div className="edu-bar" style={{ width: '90%' }}></div>
              <div className="edu-bar" style={{ width: '70%' }}></div>
              <div className="edu-bar" style={{ width: '85%' }}></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section reveal" id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">03. Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${project.isFeatured ? 'featured' : ''}`}
            >
              <div className="project-content">
                <span className="project-label">{project.label}</span>
                <h3 className="project-name">{project.name}</h3>
                <div className="project-description">{project.description}</div>
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{ marginRight: '20px' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>
              <div className="project-visual">
                <div className={`project-mockup ${!project.isFeatured ? 'small' : ''}`}>
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="mockup-url">{project.mockupUrl}</span>
                  </div>
                  <div className="mockup-body">
                    {renderVisual(project.visualType)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
