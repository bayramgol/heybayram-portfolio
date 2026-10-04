"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { useLang } from "../context/LangContext";
import JsonCode, { type JsonEntry } from "./JsonCode";

type FileKey = "profile" | "stack" | "contact";

const fileKeys: FileKey[] = ["profile", "stack", "contact"];

export default function ProfileJson() {
  const { t, profile } = useLang();
  const [activeFile, setActiveFile] = useState<FileKey>("profile");
  const tabRefs = useRef<Record<FileKey, HTMLButtonElement | null>>({
    profile: null,
    stack: null,
    contact: null,
  });

  const entries: Record<FileKey, JsonEntry[]> = {
    profile: [
      ["name", profile.name],
      ["title", profile.title],
      ["location", profile.location],
      ["focus", profile.focus],
      ["language", profile.language],
    ],
    stack: [
      ["backend", profile.backend],
      ["frontend", profile.frontend],
      ["data", profile.data],
      ["devops", profile.devops],
      ["tools", profile.tools],
    ],
    contact: [
      ["email", profile.contact.email],
      ["github", profile.contact.github],
      ["linkedin", profile.contact.linkedin],
    ],
  };

  // Ok tuşları sekmeler arasında gezinir (roving tabindex).
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const step = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = fileKeys[(index + step + fileKeys.length) % fileKeys.length];
    setActiveFile(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="section profile-section" id="profil">
      <div className="container">
        <div className="eyebrow">{t.profile.eyebrow}</div>
        <div className="section-head-row">
          <h2 className="section-title">{t.profile.title}</h2>
          <p className="section-subtitle">{t.profile.subtitle}</p>
        </div>

        <div className="profile-json-layout">
          <div className="file-tree">
            <div className="file-tree-title" aria-hidden="true">{t.profile.explorerTitle}</div>
            <div role="tablist" aria-orientation="vertical" aria-label={t.profile.explorerTitle}>
              {fileKeys.map((key, index) => (
                <button
                  className="file-node"
                  key={key}
                  ref={(node) => {
                    tabRefs.current[key] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${key}`}
                  aria-selected={activeFile === key}
                  aria-controls="profile-panel"
                  tabIndex={activeFile === key ? 0 : -1}
                  onClick={() => setActiveFile(key)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <span aria-hidden="true">{activeFile === key ? "▾" : "▸"}</span>
                  {t.profile.files[key]}
                </button>
              ))}
            </div>
          </div>

          <div className="json-window">
            <div className="json-tab-row" aria-hidden="true">
              <span className="json-tab">{t.profile.files[activeFile]}</span>
            </div>
            <pre
              className="code-view"
              id="profile-panel"
              role="tabpanel"
              aria-labelledby={`tab-${activeFile}`}
              tabIndex={0}
            >
              <JsonCode entries={entries[activeFile]} />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
