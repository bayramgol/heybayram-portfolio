"use client";

import { useLang } from "../context/LangContext";

export default function Skills() {
  const { t, skills } = useLang();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <section className="section" id="yetenekler">
      <div className="container">
        <div className="eyebrow">{t.skills.eyebrow}</div>
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              className="skill-pill"
              key={skill}
              onMouseMove={handleMouseMove}
            >
              <span className="skill-name">{skill}</span>
              <span className="skill-idx">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
