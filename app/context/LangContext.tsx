"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, ReactNode } from "react";
import {
  dictionary,
  skillGroups,
  profileJson,
  activityItems,
  Lang,
  Dictionary,
  SkillGroup,
  ProfileJson,
  ActivityItem,
} from "../data/dictionary";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
  skills: SkillGroup[];
  profile: ProfileJson;
  activity: ActivityItem[];
};

const LangContext = createContext<LangContextType | undefined>(undefined);

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "tr" || saved === "en") return saved;
  } catch {
    // localStorage kullanılamıyorsa tarayıcı diline düşülür
  }
  const preferred = navigator.languages?.[0] ?? navigator.language ?? "tr";
  return preferred.toLowerCase().startsWith("tr") ? "tr" : "en";
}

// Dil tercihi tarayıcıda tutulur; sunucu çıktısı Türkçe başlar,
// istemci ilk boyamadan sonra kayıtlı/tarayıcı diline geçer.
const listeners = new Set<() => void>();
let chosen: Lang | null = null;

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const getSnapshot = (): Lang => chosen ?? detectLang();
const getServerSnapshot = (): Lang => "tr";

function setLang(next: Lang) {
  chosen = next;
  try {
    localStorage.setItem("lang", next);
  } catch {
    // yok sayılır
  }
  listeners.forEach((listener) => listener());
}

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangContextType>(
    () => ({
      lang,
      setLang,
      t: dictionary[lang],
      skills: skillGroups[lang],
      profile: profileJson[lang],
      activity: activityItems[lang],
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);

  if (!ctx) {
    throw new Error("useLang must be used within LangProvider");
  }

  return ctx;
}
