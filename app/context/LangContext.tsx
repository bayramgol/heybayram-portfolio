"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
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

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");

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
