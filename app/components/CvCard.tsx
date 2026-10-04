"use client";

import { useLang } from "../context/LangContext";
import { site } from "../data/site";
import Portrait from "./Portrait";

/** Sağ taraftaki küçük CV kartı. Portre, kaydırdıkça hero'dan buraya uçar (FloatingPortrait). */
export default function CvCard() {
  const { t } = useLang();

  return (
    <aside className="cv-card" aria-label={t.shell.summary}>
      <div className="cv-name">
        {site.firstName} <span>{site.lastName}</span>
      </div>
      <div className="cv-role">{site.headlineStack.join(" / ")}</div>
      <div className="cv-meta">
        <span>{site.location}</span>
        <span>{site.englishLevel}</span>
      </div>

      <div className="portrait-slot card" id="portrait-card-slot">
        <div className="portrait-static">
          <Portrait alt={t.shell.portraitAlt} />
        </div>
        <span className="portrait-caption" aria-hidden="true">PORTRAIT / 01</span>
      </div>

      <ul className="cv-tags">
        {site.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <a className="cv-mail" href={`mailto:${site.contact.email}`} aria-label={t.shell.sendEmail}>
        <span>{site.contact.email}</span>
        <span aria-hidden="true">→</span>
      </a>
    </aside>
  );
}
