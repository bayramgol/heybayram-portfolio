"use client";

import { useLang } from "../context/LangContext";

export default function Dashboard() {
  const { t, metrics } = useLang();

  return (
    <section className="section dashboard-section" id="dashboard">
      <div className="container">
        <div className="eyebrow">{t.dashboard.eyebrow}</div>
        <div className="section-head-row">
          <h2 className="section-title">{t.dashboard.title}</h2>
          <p className="section-subtitle">{t.dashboard.subtitle}</p>
        </div>

        <div className="dashboard-grid">
          <div className="metric-grid">
            {metrics.map((metric) => (
              <article className="metric-card" key={`${metric.value}-${metric.label}`}>
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>

          <article className="terminal-mini">
            <div className="terminal-mini-title">
              <span className="dot dot-g" /> {t.dashboard.terminalTitle}
            </div>
            <code>
              <span className="c-com"># professional focus</span>
              <br />
              <span className="c-key">focus</span>[0] = <span className="c-str">&quot;{t.dashboard.terminalLineOne}&quot;</span>
              <br />
              <span className="c-key">focus</span>[1] = <span className="c-str">&quot;{t.dashboard.terminalLineTwo}&quot;</span>
              <br />
              <span className="c-key">focus</span>[2] = <span className="c-str">&quot;{t.dashboard.terminalLineThree}&quot;</span>
            </code>
          </article>

          <article className="now-card">
            <span className="card-kicker">{t.dashboard.nowCardTitle}</span>
            <p>{t.dashboard.nowCardBody}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
