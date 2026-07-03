"use client";

import { useLang } from "../context/LangContext";

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

  return (
    <section className="section profile-section" id="profil">
      <div className="container">
        <div className="eyebrow">{t.profile.eyebrow}</div>
        <div className="section-head-row">
          <h2 className="section-title">{t.profile.title}</h2>
          <p className="section-subtitle">{t.profile.subtitle}</p>
        </div>

        <div className="profile-json-layout">
          <aside className="file-tree">
            <div className="file-tree-title">{t.profile.explorerTitle}</div>
            <span className="file-node active">▸ {t.profile.fileName}</span>
            <span className="file-node">▸ stack.json</span>
            <span className="file-node">▸ contact.json</span>
          </aside>

          <article className="json-window">
            <div className="json-tab-row">
              <span className="json-tab active">{t.profile.fileName}</span>
              <span className="json-dot" />
            </div>
            <pre aria-label="Profile JSON">
              <code>
                <span className="c-punc">{'{'}</span>{"\n"}
                &nbsp;&nbsp;<span className="c-key">&quot;name&quot;</span>: <span className="c-str">&quot;{profile.name}&quot;</span>,{"\n"}
                &nbsp;&nbsp;<span className="c-key">&quot;title&quot;</span>: <span className="c-str">&quot;{profile.title}&quot;</span>,{"\n"}
                &nbsp;&nbsp;<span className="c-key">&quot;location&quot;</span>: <span className="c-str">&quot;{profile.location}&quot;</span>,{"\n"}
                &nbsp;&nbsp;<span className="c-key">&quot;focus&quot;</span>: <JsonArray items={profile.focus} />,{"\n"}
                &nbsp;&nbsp;<span className="c-key">&quot;backend&quot;</span>: <JsonArray items={profile.backend} />,{"\n"}
                &nbsp;&nbsp;<span className="c-key">&quot;frontend&quot;</span>: <JsonArray items={profile.frontend} />,{"\n"}
                &nbsp;&nbsp;<span className="c-key">&quot;devops&quot;</span>: <JsonArray items={profile.devops} />,{"\n"}
                &nbsp;&nbsp;<span className="c-key">&quot;monitoring&quot;</span>: <JsonArray items={profile.monitoring} />,{"\n"}
                &nbsp;&nbsp;<span className="c-key">&quot;language&quot;</span>: <span className="c-str">&quot;{profile.language}&quot;</span>{"\n"}
                <span className="c-punc">{'}'}</span>
              </code>
            </pre>
          </article>
        </div>
      </div>
    </section>
  );
}
