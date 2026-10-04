"use client";

import type { CSSProperties } from "react";
import { useLang } from "../context/LangContext";
import McImage from "./McImage";
import Portrait from "./Portrait";

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export default function Hero() {
  const { t } = useLang();

  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-pixels left" aria-hidden="true">
          <McImage name="creeper" size={190} className="px mc-render" priority />
          <McImage name="pickaxe" size={96} className="px mc-item" priority />
        </div>
        <div className="hero-pixels right" aria-hidden="true">
          <McImage name="enderman" size={190} className="px mc-render" priority />
          <McImage name="sword" size={96} className="px mc-item" priority />
        </div>

        <div className="hero-text">
          <p className="hero-prompt reveal" style={delay(0.05)}>
            <span className="prompt">visitor@site</span>
            <span className="cmd">:~$ {t.hero.whoami}</span>
          </p>

          <h1 className="hero-name reveal" style={delay(0.2)}>
            <span className="outline">{t.hero.name}</span>
            <span className="accent-text">{t.hero.nameAccent}<span className="cursor" aria-hidden="true" /></span>
          </h1>

          <p className="hero-role reveal" style={delay(0.35)}>{t.hero.role}</p>

          <ul className="hero-chips reveal" style={delay(0.5)}>
            <li>{t.hero.sideOne}</li>
            <li>{t.hero.sideTwo}</li>
            <li>{t.hero.sideThree}</li>
          </ul>

          <div className="hero-pixels-row" aria-hidden="true">
            <McImage name="creeper" size={88} className="mc-render" />
            <McImage name="steve" size={88} className="mc-render" />
            <McImage name="enderman" size={88} className="mc-render" />
          </div>

          <div className="hero-cta reveal" style={delay(0.6)}>
            <a href="#profil" className="btn btn-primary">
              {t.hero.ctaPrimary}
            </a>
            <a href="#iletisim" className="btn btn-ghost">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="portrait-slot in-hero" id="portrait-hero-slot">
          <div className="portrait-static">
            <Portrait alt={t.shell.portraitAlt} />
          </div>
        </div>
      </div>
    </header>
  );
}
