"use client";

import { useLang } from "../context/LangContext";

export default function Hero() {
  const { t } = useLang();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <header className="hero">
      <div className="container">
        <div className="terminal-window" onMouseMove={handleMouseMove}>
          <div className="terminal-titlebar">
            <div className="dot dot-r"></div>
            <div className="dot dot-y"></div>
            <div className="dot dot-g"></div>
            <span>zsh — 80×24</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line" style={{ animationDelay: "0.1s" }}>
              <span className="prompt">visitor@site</span>
              <span className="cmd">:~$ {t.hero.whoami}</span>
            </div>
            <p
              className="terminal-out"
              style={{
                animation: "fadeIn 0.4s forwards",
                animationDelay: "0.5s",
                opacity: 0,
              }}
            >
              <span className="hero-name">
                {t.hero.name}{" "}
                <span className="accent-text">{t.hero.nameAccent}</span>
                <span className="cursor"></span>
              </span>
              <br />
              <span className="hero-role">{t.hero.role}</span>
            </p>
            <div className="terminal-line" style={{ animationDelay: "0.9s" }}>
              <span className="prompt">visitor@site</span>
              <span className="cmd">:~$ {t.hero.catStatus}</span>
            </div>
            <p
              className="terminal-out"
              style={{
                animation: "fadeIn 0.4s forwards",
                animationDelay: "1.2s",
                opacity: 0,
              }}
            >
              {t.hero.quote}
            </p>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#hakkimda" className="btn btn-primary">
            {t.hero.ctaPrimary}
          </a>
          <a href="#iletisim" className="btn btn-ghost">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </header>
  );
}
