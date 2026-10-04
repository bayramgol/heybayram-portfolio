"use client";

import { useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";
import Portrait from "./Portrait";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount;
const ease = (x: number) => 1 - Math.pow(1 - x, 3);

/**
 * Hero'daki portre, kaydırdıkça sağdaki CV kartındaki yerine kayar.
 * Yalnızca geniş ekranda ve hareket azaltma kapalıysa çalışır; aksi hâlde
 * hero ve kart kendi (statik) portrelerini gösterir.
 */
export default function FloatingPortrait() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const query = window.matchMedia("(min-width: 1280px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = ref.current;
      const hero = document.getElementById("portrait-hero-slot");
      const card = document.getElementById("portrait-card-slot");
      if (!el || !hero || !card) return;

      const from = hero.getBoundingClientRect();
      const to = card.getBoundingClientRect();
      if (to.width === 0) return;

      const progress = ease(clamp(window.scrollY / (window.innerHeight * 0.55), 0, 1));
      const scale = lerp(from.width / to.width, 1, progress);
      const x = lerp(from.left, to.left, progress);
      const y = lerp(from.top, to.top, progress);
      el.style.width = `${to.width}px`;
      el.style.height = `${to.height}px`;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const sync = () => {
      root.classList.toggle("float-portrait", query.matches);
      if (query.matches) schedule();
    };

    sync();
    query.addEventListener("change", sync);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);

    // Yazı tipleri yüklenince ve hero boyutu değişince hero'daki konum kayar; yeniden hesapla.
    void document.fonts?.ready.then(schedule);
    const observer = new ResizeObserver(schedule);
    const hero = document.getElementById("top");
    if (hero) observer.observe(hero);

    return () => {
      query.removeEventListener("change", sync);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      root.classList.remove("float-portrait");
    };
  }, []);

  return (
    <div className="portrait-float" ref={ref} aria-hidden="true">
      <Portrait alt={t.shell.portraitAlt} />
    </div>
  );
}
