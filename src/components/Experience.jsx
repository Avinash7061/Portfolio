import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Gyaanpeeth',
      date: 'June 2025 — July 2025',
      description: 'Completed a one-month internship focused on building responsive and interactive web interfaces. Gained hands-on experience with modern frontend technologies and best practices in UI/UX development.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    },
    {
      title: 'B.Tech CSE (AI/ML)',
      company: 'Vivekananda Global University, Jaipur',
      date: '2024 — Present',
      description: 'Pursuing B.Tech in Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning. Actively building AI projects, participating in hackathons, and expanding expertise in deep learning and NLP.',
      tags: ['AI/ML', 'Deep Learning', 'NLP', 'Data Science']
    }
  ];

  return (
    <section className="section section-dark reveal" id="experience">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">04. Journey</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <span className="timeline-company">{exp.company}</span>
                  </div>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tags">
                  {exp.tags.map((tag, tagIdx) => (
                    <span key={tagIdx}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
