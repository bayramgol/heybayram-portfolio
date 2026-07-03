"use client";

import { useLang } from "../context/LangContext";

export default function Experience() {
  const { t, experience } = useLang();

  return (
    <section className="section" id="deneyim">
      <div className="container">
        <div className="eyebrow">{t.experience.eyebrow}</div>
        <div className="section-head-row">
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.role}`}>
              <div className="timeline-dot" />
              <div className="timeline-meta">{item.period}</div>
              <div className="timeline-card">
                <span className="timeline-company">{item.company}</span>
                <h3>{item.role}</h3>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
