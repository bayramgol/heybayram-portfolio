"use client";

import { useLang } from "../context/LangContext";

export default function About() {
  const { t } = useLang();

  return (
    <section className="section" id="hakkimda">
      <div className="container">
        <div className="eyebrow">{t.about.eyebrow}</div>
        <h2 className="section-title">{t.about.title}</h2>
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
            <span className="c-key">const</span> developer = {"{"}
            <br />
            &nbsp;&nbsp;name: <span className="c-str">
              &quot;Bayram Göl&quot;
            </span>,
            <br />
            &nbsp;&nbsp;role:{" "}
            <span className="c-str">&quot;{t.about.codeRole}&quot;</span>,
            <br />
            &nbsp;&nbsp;focus: [<span className="c-str">&quot;fullstack&quot;</span>
            , <span className="c-str">&quot;microservis&quot;</span>,{" "}
            <span className="c-str">&quot;api&quot;</span>],
            <br />
            &nbsp;&nbsp;available: <span className="c-key">true</span>,{" "}
            <span className="c-com">// müsait</span>
            <br />
            &nbsp;&nbsp;location: <span className="c-str">
              &quot;{t.about.codeLocation}&quot;
            </span>
            <br />
            {"}"};
          </div>
        </div>
      </div>
    </section>
  );
}
