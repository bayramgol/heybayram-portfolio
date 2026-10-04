"use client";

import { useLang } from "../context/LangContext";

export default function Skills() {
  const { t, skills } = useLang();

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
              <ul className="skills-grid">
                {group.items.map((skill) => (
                  <li className="skill-pill" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
