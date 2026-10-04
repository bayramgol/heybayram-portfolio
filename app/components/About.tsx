"use client";

import { useLang } from "../context/LangContext";
import { site } from "../data/site";
import JsonCode from "./JsonCode";

export default function About() {
  const { t, profile } = useLang();

  return (
    <section className="section" id="hakkimda">
      <div className="container">
        <div className="eyebrow">{t.about.eyebrow}</div>
        <h2 className="section-title about-title-gap">{t.about.title}</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              {t.about.p1a}
              <strong>{t.about.p1b}</strong>
              {t.about.p1c}
            </p>
            <p>
              {t.about.p2a}
              <strong>{t.about.p2b}</strong>
              {t.about.p2c}
            </p>
            <p>{t.about.p3}</p>
          </div>

          <div className="code-block" aria-hidden="true">
            <pre className="code-view">
              <JsonCode
                prefix="const developer = "
                suffix=";"
                entries={[
                  ["name", profile.name],
                  ["role", profile.title],
                  ["stack", [...site.headlineStack]],
                  ["mindset", "clean-code-first"],
                  ["location", profile.location],
                ]}
              />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
