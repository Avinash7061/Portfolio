import React from 'react';

export default function Certifications() {
  const certifications = [
    { icon: '🏆', title: 'CodeXccelerate Hackathon', issuer: 'Gateway Education' },
    { icon: '🎮', title: 'Rajasthan IT Day Game Jam', issuer: 'Government of Rajasthan' },
    { icon: '🔥', title: 'Code Red 4.0 Hackathon', issuer: 'ACIC-VGU Foundation' },
    { icon: '🤖', title: 'Getting Started with AI', issuer: 'IBM SkillsBuild' },
    { icon: '🌐', title: 'Rise of Multi-Agent Systems', issuer: 'IBM SkillsBuild' },
    { icon: '💻', title: 'Frontend Development', issuer: 'Gyaanpeeth' },
    { icon: '📈', title: 'Freelance Growth & Success', issuer: '100% Client Satisfaction & Delivery' }
  ];

  return (
    <section className="section reveal" id="certifications">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">05. Achievements</span>
          <h2 className="section-title">Certifications & Awards</h2>
        </div>
        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
