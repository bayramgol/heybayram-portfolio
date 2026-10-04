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
        <div className="code-block about-code">
          <pre className="code-view" tabIndex={0}>
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
    </section>
  );
}
