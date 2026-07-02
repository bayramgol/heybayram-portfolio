"use client";

import { useState } from "react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [frameLoaded, setFrameLoaded] = useState(false);

  return (
    <article className="project-card">
      <div className="project-head">
        <div className="project-cmd">./run {project.command}</div>
        <div className="project-status">
          <span className="pulse"></span> canlı
        </div>
      </div>

      <div className="project-frame-wrap">
        {frameLoaded ? (
          <iframe
            src={project.liveUrl}
            loading="lazy"
            title={`${project.title} canlı önizleme`}
          />
        ) : (
          <div className="frame-overlay">
            <span>
              Canlı önizleme yüklenmedi — performans için manuel tetiklenir
            </span>
            <button
              className="load-btn"
              onClick={() => setFrameLoaded(true)}
            >
              ▶ önizlemeyi başlat
            </button>
          </div>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noopener">
            ↗ canlı site
          </a>
          <a href={project.sourceUrl} target="_blank" rel="noopener">
            ↗ kaynak kod
          </a>
        </div>
      </div>
    </article>
  );
}
