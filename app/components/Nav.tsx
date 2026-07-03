"use client";

import { useLang } from "../context/LangContext";

export default function Nav() {
  const { lang, setLang, t } = useLang();

  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">{t.nav.logo}</div>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#yetenekler">{t.nav.skills}</a>
            <a href="#hakkimda">{t.nav.about}</a>
            <a href="#iletisim">{t.nav.contact}</a>
          </div>
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "tr" : "en")}
            aria-label="Toggle language"
          >
            {lang === "en" ? "TR" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
