import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      icon: '🧠',
      title: 'AI / Machine Learning',
      tags: [
        'PyTorch',
        'HuggingFace Transformers',
        'BERT / NLP',
        'scikit-learn',
        'Pandas',
        'NumPy',
        'Jupyter',
        'Deep Learning'
      ]
    },
    {
      icon: '💻',
      title: 'Programming Languages',
      tags: ['Python', 'JavaScript', 'Java', 'C', 'SQL']
    },
    {
      icon: '⚛️',
      title: 'Frontend Development',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Responsive Design']
    },
    {
      icon: '🔧',
      title: 'Backend & Tools',
      tags: [
        'FastAPI',
        'Flask',
        'Node.js',
        'MongoDB',
        'MySQL',
        'Git / GitHub',
        'Docker',
        'VS Code'
      ]
    }
  ];

  return (
    <section className="section section-dark reveal" id="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">02. Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
