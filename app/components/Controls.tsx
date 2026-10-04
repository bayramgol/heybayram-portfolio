"use client";

import { useSyncExternalStore } from "react";
import { useLang } from "../context/LangContext";
import { useShell } from "../context/ShellContext";

type Theme = "dark" | "light";

// Tema, sayfa boyanmadan önce layout'taki betikle <html data-theme> olarak atanır.
const themeListeners = new Set<() => void>();

function subscribeTheme(listener: () => void) {
  themeListeners.add(listener);
  return () => {
    themeListeners.delete(listener);
  };
}

const getTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");
const getServerTheme = (): Theme => "dark";

export function ThemeToggle() {
  const { t } = useLang();
  const { unlock } = useShell();
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    themeListeners.forEach((listener) => listener());
    try {
      localStorage.setItem("theme", next);
    } catch {
      // yok sayılır
    }
    unlock("theme");
  };

  return (
    <button
      type="button"
      className="sb-btn"
      onClick={toggle}
      aria-label={theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}

export function LangToggle() {
  const { lang, setLang, t } = useLang();
  const { unlock } = useShell();

  return (
    <button
      type="button"
      className="sb-btn sb-text"
      onClick={() => {
        setLang(lang === "en" ? "tr" : "en");
        unlock("lang");
      }}
      aria-label={t.nav.langLabel}
      lang={lang === "en" ? "tr" : "en"}
    >
      {lang === "en" ? "TR" : "EN"}
    </button>
  );
}
