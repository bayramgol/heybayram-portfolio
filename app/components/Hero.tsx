"use client";

import { useLang } from "../context/LangContext";

export default function Hero() {
  const { t } = useLang();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <header className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="terminal-window" onMouseMove={handleMouseMove}>
            <div className="terminal-titlebar">
              <div className="dot dot-r" />
              <div className="dot dot-y" />
              <div className="dot dot-g" />
              <span>zsh — 80×24</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line" style={{ animationDelay: "0.1s" }}>
                <span className="prompt">visitor@site</span>
                <span className="cmd">:~$ {t.hero.whoami}</span>
              </div>
              <p
                className="terminal-out"
                style={{ animation: "fadeIn 0.4s forwards", animationDelay: "0.5s", opacity: 0 }}
              >
                <span className="hero-name">
                  {t.hero.name} <span className="accent-text">{t.hero.nameAccent}</span>
                  <span className="cursor" />
                </span>
                <br />
                <span className="hero-role">{t.hero.role}</span>
              </p>
              <div className="terminal-line" style={{ animationDelay: "0.9s" }}>
                <span className="prompt">visitor@site</span>
                <span className="cmd">:~$ {t.hero.catStatus}</span>
              </div>
              <p
                className="terminal-out hero-quote"
                style={{ animation: "fadeIn 0.4s forwards", animationDelay: "1.2s", opacity: 0 }}
              >
                {t.hero.quote}
              </p>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#dashboard" className="btn btn-primary">
              {t.hero.ctaPrimary}
            </a>
            <a href="#iletisim" className="btn btn-ghost">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <aside className="hero-side-card" aria-label="Core stack">
          <div className="side-card-top">
            <span className="pulse" />
            online_profile
          </div>
          <div className="stack-orbit">
            <span>{t.hero.badgeOne}</span>
            <span>{t.hero.badgeTwo}</span>
            <span>{t.hero.badgeThree}</span>
          </div>
          <div className="mini-bars" aria-hidden="true">
            <i style={{ width: "86%" }} />
            <i style={{ width: "74%" }} />
            <i style={{ width: "92%" }} />
            <i style={{ width: "66%" }} />
          </div>
        </aside>
      </div>
    </header>
  );
}
