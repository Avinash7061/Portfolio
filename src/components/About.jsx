import React from 'react';

export default function About() {
  return (
    <section className="section reveal" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">01. Introduction</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-lead">
              I'm a <strong>Freelance AI/ML Developer & Full Stack Engineer</strong> building custom automation pipelines, 
              deep learning models, and client platforms that solve complex real-world challenges.
            </p>
            <p>
              Specializing in the intersection of <strong>Deep Learning, Natural Language Processing (NLP), and Full Stack Architectures</strong>, 
              I construct robust systems from the ground up—like <strong>MediFlow AI</strong> (urgency triage) and <strong>Fluxaa</strong> (on-chain wealth intelligence).
            </p>
            <p>
              Whether designing intelligent agents, fine-tuning large language models, or orchestrating custom full-stack web platforms 
              like <strong>Mediva Designs</strong>, my focus is on delivering secure, clean, and highly performant code for clients.
            </p>
            <div className="about-details">
              <div className="about-detail">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div>
                  <span className="detail-label">Freelance Status</span>
                  <span className="detail-value">Available for Client Projects</span>
                </div>
              </div>
              <div className="about-detail">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div>
                  <span className="detail-label">Experience</span>
                  <span className="detail-value">Custom AI/ML & Web Integrations</span>
                </div>
              </div>
              <div className="about-detail">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <span className="detail-label">Focus Areas</span>
                  <span className="detail-value">AI/ML, NLP, Automation, Full Stack Web</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="code-window">
              <div className="code-window-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="code-filename">avinash.py</span>
              </div>
              <pre className="code-content"><code><span className="code-keyword">class</span> <span className="code-class">Developer</span>:{"\n"}
{"    "}<span className="code-keyword">def</span> <span className="code-func">__init__</span>(self):{"\n"}
{"        "}self.name = <span className="code-string">"Avinash Kumar Jha"</span>{"\n"}
{"        "}self.role = <span className="code-string">"AI/ML Developer"</span>{"\n"}
{"        "}self.university = <span className="code-string">"VGU, Jaipur"</span>{"\n"}
{"        "}self.languages = [{"\n"}
{"            "}<span className="code-string">"Python"</span>, <span className="code-string">"JavaScript"</span>,{"\n"}
{"            "}<span className="code-string">"Java"</span>, <span className="code-string">"C"</span>{"\n"}
{"        "}]{"\n"}
{"\n"}
{"    "}<span className="code-keyword">def</span> <span className="code-func">current_focus</span>(self):{"\n"}
{"        "}<span className="code-keyword">return</span> {"{"}{"\n"}
{"            "}<span className="code-string">"ai"</span>: [<span className="code-string">"BERT"</span>, <span className="code-string">"Transformers"</span>],{"\n"}
{"            "}<span className="code-string">"web"</span>: [<span className="code-string">"React"</span>, <span className="code-string">"FastAPI"</span>],{"\n"}
{"            "}<span className="code-string">"passion"</span>: <span className="code-string">"Healthcare AI"</span>{"\n"}
{"        "}{"}"}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
