"use client";

import { useLang } from "../context/LangContext";
import { useShell } from "../context/ShellContext";
import { sectionFiles, site } from "../data/site";

/** Sol dosya ağacı: bölümler "dosya" olarak listelenir, aktif bölüm vurgulanır. */
export default function Explorer() {
  const { t } = useLang();
  const { activeId } = useShell();

  return (
    <aside className="explorer" aria-label={t.shell.explorer}>
      <div className="explorer-root">
        <span aria-hidden="true">▾</span> {site.contact.githubUser}
      </div>
      <ul className="explorer-list">
        {sectionFiles.map(({ id, file, nav }) => {
          const active = activeId === id;
          const label = nav ? t.nav[nav] : file;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="explorer-file"
                aria-current={active ? "location" : undefined}
                aria-label={nav ? `${label} (${file})` : file}
              >
                <span className="explorer-icon" aria-hidden="true">{file.endsWith(".json") ? "{}" : file.endsWith(".sh") ? "$" : "≡"}</span>
                {file}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="explorer-foot">
        <div className="explorer-foot-title">{t.shell.links}</div>
        <a href={`mailto:${site.contact.email}`}>email</a>
        <a href={site.contact.githubUrl} target="_blank" rel="noopener noreferrer">github ↗</a>
        <a href={site.contact.linkedinUrl} target="_blank" rel="noopener noreferrer">linkedin ↗</a>
      </div>
    </aside>
  );
}
