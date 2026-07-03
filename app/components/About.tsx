"use client";

import { useLang } from "../context/LangContext";

export default function About() {
  const { t } = useLang();

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

          <div className="code-block">
            <span className="c-key">const</span> developer = <span className="c-punc">{'{'}</span>
            <br />
            &nbsp;&nbsp;name: <span className="c-str">&quot;Bayram Göl&quot;</span>,
            <br />
            &nbsp;&nbsp;role: <span className="c-str">&quot;Software Development Specialist&quot;</span>,
            <br />
            &nbsp;&nbsp;stack: [<span className="c-str">&quot;Java&quot;</span>, <span className="c-str">&quot;Spring Boot&quot;</span>, <span className="c-str">&quot;Angular&quot;</span>],
            <br />
            &nbsp;&nbsp;mindset: <span className="c-str">&quot;clean-code-first&quot;</span>,
            <br />
            &nbsp;&nbsp;location: <span className="c-str">&quot;Istanbul, TR&quot;</span>
            <br />
            <span className="c-punc">{'}'}</span>;
          </div>
        </div>
      </div>
    </section>
  );
}
