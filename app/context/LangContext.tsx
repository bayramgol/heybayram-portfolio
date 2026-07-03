"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import {
  dictionary,
  skillGroups,
  experienceItems,
  dashboardMetrics,
  type Dictionary,
  type Lang,
} from "../data/dictionary";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
  skills: (typeof skillGroups)[Lang];
  experience: (typeof experienceItems)[Lang];
  metrics: (typeof dashboardMetrics)[Lang];
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");

  const value: LangContextType = {
    lang,
    setLang,
    t: dictionary[lang],
    skills: skillGroups[lang],
    experience: experienceItems[lang],
    metrics: dashboardMetrics[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within LangProvider");
  }
  return ctx;
}
