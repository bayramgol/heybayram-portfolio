"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { sectionFiles, trophyIds, type TrophyId } from "../data/site";

/**
 * Editör düzeninin ortak durumu:
 * - activeId: görünümün ortasındaki bölüm (dosya ağacı ve durum çubuğu kullanır)
 * - başarımlar: bölümleri gezdikçe / tema ve dil değiştikçe açılır, tarayıcıda saklanır
 */

const STORAGE_KEY = "trophies";
const listeners = new Set<() => void>();
let cache: string | null = null;

function readStored(): string {
  if (cache !== null) return cache;
  try {
    cache = localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    cache = "";
  }
  return cache;
}

function writeStored(ids: string[]) {
  cache = ids.join(",");
  try {
    localStorage.setItem(STORAGE_KEY, cache);
  } catch {
    // yok sayılır
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const getServerStored = () => "";

type ShellContextType = {
  activeId: string;
  unlocked: ReadonlySet<TrophyId>;
  lastUnlocked: TrophyId | null;
  unlock: (id: TrophyId) => void;
  total: number;
};

const ShellContext = createContext<ShellContextType | undefined>(undefined);

const trophySections = new Set<string>(trophyIds);

export function ShellProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, readStored, getServerStored);
  const unlocked = useMemo(
    () => new Set(raw.split(",").filter((id): id is TrophyId => (trophyIds as readonly string[]).includes(id))),
    [raw]
  );
  const [activeId, setActiveId] = useState<string>("top");
  const [lastUnlocked, setLastUnlocked] = useState<TrophyId | null>(null);

  const unlock = useCallback((id: TrophyId) => {
    const current = readStored().split(",").filter(Boolean);
    if (current.includes(id)) return;
    writeStored([...current, id]);
    setLastUnlocked(id);
  }, []);

  // Görünümün ortasındaki ince banda giren bölüm aktif sayılır.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setActiveId(entry.target.id);
          if (trophySections.has(entry.target.id)) unlock(entry.target.id as TrophyId);
        }
      },
      { rootMargin: "-45% 0px -54% 0px" }
    );
    sectionFiles.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [unlock]);

  // Açılan başarım bildirimi birkaç saniye sonra kendiliğinden kapanır.
  useEffect(() => {
    if (!lastUnlocked) return;
    const timer = window.setTimeout(() => setLastUnlocked(null), 4000);
    return () => window.clearTimeout(timer);
  }, [lastUnlocked]);

  const value = useMemo<ShellContextType>(
    () => ({ activeId, unlocked, lastUnlocked, unlock, total: trophyIds.length }),
    [activeId, unlocked, lastUnlocked, unlock]
  );

  return <ShellContext.Provider value={value}>{children}</ShellContext.Provider>;
}

export function useShell() {
  const ctx = useContext(ShellContext);

  if (!ctx) {
    throw new Error("useShell must be used within ShellProvider");
  }

  return ctx;
}
