"use client";

import { useLang } from "../context/LangContext";

const githubUser = "bayramgol";

export default function GithubActivity() {
  const { t } = useLang();

  return (
    <section className="section github-section" id="github">
      <div className="container">
        <div className="eyebrow">{t.github.eyebrow}</div>
        <div className="section-head-row">
          <h2 className="section-title">{t.github.title}</h2>
          <p className="section-subtitle">{t.github.subtitle}</p>
        </div>

        <div className="github-grid">
          <a
            className="github-card wide"
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=transparent&hide_border=true&title_color=00ff9d&text_color=e8e8f0&icon_color=7c3aed`}
              alt={t.github.statsAlt}
              loading="lazy"
            />
          </a>

          <a
            className="github-card"
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile languages"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=transparent&hide_border=true&title_color=00ff9d&text_color=e8e8f0`}
              alt={t.github.langsAlt}
              loading="lazy"
            />
          </a>

          <a
            className="github-card wide"
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile streak"
          >
            <img
              src={`https://streak-stats.demolab.com?user=${githubUser}&theme=transparent&hide_border=true&ring=00ff9d&fire=7c3aed&currStreakLabel=00ff9d&sideLabels=e8e8f0&dates=8a8a9a`}
              alt={t.github.streakAlt}
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
