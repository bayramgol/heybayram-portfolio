import { skills } from "../data/projects";

export default function Skills() {
  return (
    <section className="section" id="yetenekler">
      <div className="container">
        <div className="eyebrow">stack --list</div>
        <h2 className="section-title">Yetenekler</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-pill" key={skill}>
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
