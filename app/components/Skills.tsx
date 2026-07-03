"use client";

import type { MouseEvent } from "react";
import { useLang } from "../context/LangContext";

export default function Skills() {
  const { t, skills } = useLang();

  const handleMouseMove = (event: MouseEvent<HTMLSpanElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <section className="section" id="yetenekler">
      <div className="container">
        <div className="eyebrow">{t.skills.eyebrow}</div>
        <div className="section-head-row">
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </div>

        <div className="skill-groups">
          {skills.map((group) => (
            <article className="skill-group" key={group.group}>
              <h3>{group.group}</h3>
              <div className="skills-grid compact">
                {group.items.map((skill) => (
                  <span className="skill-pill" key={skill} onMouseMove={handleMouseMove}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
