"use client";

import { useEffect, useState } from "react";
import { useLang } from "../context/LangContext";
import { useShell } from "../context/ShellContext";
import { sectionFiles, trophyIds } from "../data/site";
import { LangToggle, ThemeToggle } from "./Controls";
import PaletteTest from "./PaletteTest";

type Panel = "trophies" | "palette" | null;

const LINE_HEIGHT = 24;

/** Alt durum çubuğu: aktif dosya, satır, başarımlar ve tema/dil/palet düğmeleri. */
export default function StatusBar() {
  const { t } = useLang();
  const { activeId, unlocked, lastUnlocked, total } = useShell();
  const [panel, setPanel] = useState<Panel>(null);
  const [line, setLine] = useState(1);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setLine(Math.max(1, Math.round((window.scrollY + window.innerHeight / 2) / LINE_HEIGHT)));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!panel) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPanel(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [panel]);

  const file = sectionFiles.find((section) => section.id === activeId)?.file ?? "README.md";
  const toggle = (next: Exclude<Panel, null>) => setPanel((current) => (current === next ? null : next));

  return (
    <div className="statusbar">
      <div className="sb-left">
        <span className="sb-mode">NORMAL</span>
        <span className="sb-branch">⎇ main</span>
        <span className="sb-file">{file}</span>
        <span className="sb-toast" aria-live="polite">
          {lastUnlocked ? `★ ${t.shell.trophyNames[lastUnlocked]} · ${t.shell.unlocked}` : ""}
        </span>
      </div>

      <div className="sb-right">
        <span className="sb-line">{t.shell.lineLabel} {line}</span>

        <div className="sb-pop">
          {panel === "trophies" ? (
            <div className="sb-panel" id="trophy-panel" role="group" aria-label={t.shell.trophies}>
              <div className="palette-title">{t.shell.trophies} · {unlocked.size}/{total}</div>
              <ul className="trophy-list">
                {trophyIds.map((id) => (
                  <li key={id} data-done={unlocked.has(id)}>
                    <span aria-hidden="true">{unlocked.has(id) ? "★" : "☆"}</span>
                    {t.shell.trophyNames[id]}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <button
            type="button"
            className="sb-btn sb-text"
            onClick={() => toggle("trophies")}
            aria-expanded={panel === "trophies"}
            aria-controls="trophy-panel"
            aria-label={panel === "trophies" ? t.shell.trophiesClose : t.shell.trophiesOpen}
          >
            ★ {unlocked.size}/{total}
          </button>
        </div>

        <PaletteTest open={panel === "palette"} onToggle={() => toggle("palette")} />
        <ThemeToggle />
        <LangToggle />
      </div>
    </div>
  );
}
