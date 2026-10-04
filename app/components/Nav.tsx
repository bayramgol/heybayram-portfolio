"use client";

import { useEffect, useState } from "react";
import { useLang } from "../context/LangContext";

/** Dar ekranlarda (dosya ağacının gizlendiği yerde) üst çubuk ve açılır menü. */
export default function Nav() {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <nav className="mobile-nav">
        <div className="nav-inner">
          <a className="logo" href="#top" aria-label={t.nav.homeLabel}>
            {t.nav.logo}
          </a>
          <div className="nav-right">
            <div className="nav-links" id="nav-links" data-open={menuOpen}>
              <a href="#profil" onClick={closeMenu}>{t.nav.profile}</a>
              <a href="#yetenekler" onClick={closeMenu}>{t.nav.skills}</a>
              <a href="#github" onClick={closeMenu}>{t.nav.github}</a>
              <a href="#hakkimda" onClick={closeMenu}>{t.nav.about}</a>
              <a href="#iletisim" onClick={closeMenu}>{t.nav.contact}</a>
            </div>
            <button
              type="button"
              className="icon-btn menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="nav-links"
              aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
