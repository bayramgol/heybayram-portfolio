"use client";

import { useState } from "react";
import { useLang } from "../context/LangContext";

type FileKey = "profile" | "stack" | "contact";

function JsonArray({ items }: { items: string[] }) {
  return (
    <>
      [
      {items.map((item, index) => (
        <span key={item}>
          <span className="c-str">&quot;{item}&quot;</span>
          {index < items.length - 1 ? <span className="c-punc">, </span> : null}
        </span>
      ))}
      ]
    </>
  );
}

export default function ProfileJson() {
  const { t, profile } = useLang();
  const [activeFile, setActiveFile] = useState<FileKey>("profile");

  const files: { key: FileKey; label: string }[] = [
    { key: "profile", label: t.profile.files.profile },
    { key: "stack", label: t.profile.files.stack },
    { key: "contact", label: t.profile.files.contact },
  ];

  const renderJson = () => {
    if (activeFile === "stack") {
      return (
        <code>
          <span className="c-punc">{'{'}</span>{"\n"}
          &nbsp;&nbsp;<span className="c-key">&quot;backend&quot;</span>: <JsonArray items={profile.backend} />,{"\n"}
          &nbsp;&nbsp;<span className="c-key">&quot;frontend&quot;</span>: <JsonArray items={profile.frontend} />,{"\n"}
          &nbsp;&nbsp;<span className="c-key">&quot;data&quot;</span>: <JsonArray items={profile.data} />,{"\n"}
          &nbsp;&nbsp;<span className="c-key">&quot;devops&quot;</span>: <JsonArray items={profile.devops} />,{"\n"}
          &nbsp;&nbsp;<span className="c-key">&quot;tools&quot;</span>: <JsonArray items={profile.tools} />{"\n"}
          <span className="c-punc">{'}'}</span>
        </code>
      );
    }

    if (activeFile === "contact") {
      return (
        <code>
          <span className="c-punc">{'{'}</span>{"\n"}
          &nbsp;&nbsp;<span className="c-key">&quot;email&quot;</span>: <span className="c-str">&quot;{profile.contact.email}&quot;</span>,{"\n"}
          &nbsp;&nbsp;<span className="c-key">&quot;github&quot;</span>: <span className="c-str">&quot;{profile.contact.github}&quot;</span>,{"\n"}
          &nbsp;&nbsp;<span className="c-key">&quot;linkedin&quot;</span>: <span className="c-str">&quot;{profile.contact.linkedin}&quot;</span>{"\n"}
          <span className="c-punc">{'}'}</span>
        </code>
      );
    }

    return (
      <code>
        <span className="c-punc">{'{'}</span>{"\n"}
        &nbsp;&nbsp;<span className="c-key">&quot;name&quot;</span>: <span className="c-str">&quot;{profile.name}&quot;</span>,{"\n"}
        &nbsp;&nbsp;<span className="c-key">&quot;title&quot;</span>: <span className="c-str">&quot;{profile.title}&quot;</span>,{"\n"}
        &nbsp;&nbsp;<span className="c-key">&quot;location&quot;</span>: <span className="c-str">&quot;{profile.location}&quot;</span>,{"\n"}
        &nbsp;&nbsp;<span className="c-key">&quot;focus&quot;</span>: <JsonArray items={profile.focus} />,{"\n"}
        &nbsp;&nbsp;<span className="c-key">&quot;language&quot;</span>: <span className="c-str">&quot;{profile.language}&quot;</span>{"\n"}
        <span className="c-punc">{'}'}</span>
      </code>
    );
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
          <aside className="file-tree" aria-label={t.profile.explorerTitle}>
            <div className="file-tree-title">{t.profile.explorerTitle}</div>
            {files.map((file) => (
              <button
                className={`file-node ${activeFile === file.key ? "active" : ""}`}
                key={file.key}
                onClick={() => setActiveFile(file.key)}
                type="button"
              >
                <span>{activeFile === file.key ? "▾" : "▸"}</span> {file.label}
              </button>
            ))}
          </aside>

          <article className="json-window">
            <div className="json-tab-row">
              <span className="json-tab active">{t.profile.files[activeFile]}</span>
              <span className="json-dot" />
            </div>
            <pre aria-label={`${t.profile.files[activeFile]} JSON`}>{renderJson()}</pre>
          </article>
        </div>
      </div>
    </section>
  );
}
