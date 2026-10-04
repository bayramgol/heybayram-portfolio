"use client";

import { useSyncExternalStore } from "react";
import { useLang } from "../context/LangContext";

/**
 * Renk denemesi paneli. Yalnızca <html data-tone / data-accent> özniteliklerini
 * değiştirir; renkler globals.css'te tanımlıdır. Varsayılan: sıcak hava + gök mavisi
 * vurgu (öznitelik yok). Kaldırmak için bu dosyayı, page.tsx'teki kullanımı ve
 * globals.css'teki "PALETTE TEST" bölümünü silmek yeter.
 */

type Accent = "sky" | "terracotta" | "amber" | "rose" | "mint";
type Tone = "warm" | "cool";

const accents: { key: Accent; swatch: string }[] = [
  { key: "sky", swatch: "#7cc4f5" },
  { key: "terracotta", swatch: "#e07a5f" },
  { key: "amber", swatch: "#e0a458" },
  { key: "rose", swatch: "#f08fb0" },
  { key: "mint", swatch: "#6fd3b0" },
];

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const getTone = (): Tone => (document.documentElement.dataset.tone === "cool" ? "cool" : "warm");
const getAccent = (): Accent => (document.documentElement.dataset.accent as Accent | undefined) ?? "sky";
const serverTone = (): Tone => "warm";
const serverAccent = (): Accent => "sky";

function persist(key: string, value: string | null) {
  try {
    if (value) localStorage.setItem(key, value);
    else localStorage.removeItem(key);
  } catch {
    // yok sayılır
  }
}

function applyTone(next: Tone) {
  const root = document.documentElement;
  if (next === "cool") root.dataset.tone = "cool";
  else delete root.dataset.tone;
  persist("tone", next === "cool" ? "cool" : null);
  listeners.forEach((listener) => listener());
}

function applyAccent(next: Accent) {
  const root = document.documentElement;
  if (next === "sky") delete root.dataset.accent;
  else root.dataset.accent = next;
  persist("accent", next === "sky" ? null : next);
  listeners.forEach((listener) => listener());
}

export default function PaletteTest({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const { t } = useLang();
  const tone = useSyncExternalStore(subscribe, getTone, serverTone);
  const accent = useSyncExternalStore(subscribe, getAccent, serverAccent);

  return (
    <div className="sb-pop">
      {open ? (
        <div className="palette-panel" id="palette-panel" role="group" aria-label={t.palette.title}>
          <div className="palette-title">{t.palette.title}</div>

          <div className="palette-label" id="palette-tone-label">{t.palette.tone}</div>
          <div className="palette-seg" role="group" aria-labelledby="palette-tone-label">
            <button type="button" aria-pressed={tone === "warm"} onClick={() => applyTone("warm")}>
              {t.palette.toneWarm}
            </button>
            <button type="button" aria-pressed={tone === "cool"} onClick={() => applyTone("cool")}>
              {t.palette.toneCool}
            </button>
          </div>

          <div className="palette-label" id="palette-accent-label">{t.palette.accent}</div>
          <div className="palette-swatches" role="group" aria-labelledby="palette-accent-label">
            {accents.map(({ key, swatch }) => (
              <button
                key={key}
                type="button"
                className="palette-swatch"
                style={{ background: swatch }}
                aria-pressed={accent === key}
                aria-label={t.palette.accents[key]}
                title={t.palette.accents[key]}
                onClick={() => applyAccent(key)}
              />
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className="sb-btn"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls="palette-panel"
        aria-label={open ? t.palette.close : t.palette.open}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z" />
          <circle cx="7.5" cy="11" r="1" />
          <circle cx="10" cy="7" r="1" />
          <circle cx="14.5" cy="7" r="1" />
        </svg>
      </button>
    </div>
  );
}
