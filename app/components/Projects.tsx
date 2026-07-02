import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="section" id="projeler">
      <div className="container">
        <div className="eyebrow">projects --live</div>
        <h2 className="section-title">Canlı Projeler</h2>

        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
