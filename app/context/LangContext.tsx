"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { dictionary, skillsList, Lang, Dictionary } from "../data/dictionary";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
  skills: string[];
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const value: LangContextType = {
    lang,
    setLang,
    t: dictionary[lang],
    skills: skillsList[lang],
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
