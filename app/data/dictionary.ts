import { site, type TrophyId } from "./site";

export type Lang = "tr" | "en";

export type Dictionary = {
  nav: {
    logo: string;
    profile: string;
    skills: string;
    github: string;
    about: string;
    contact: string;
    skip: string;
    homeLabel: string;
    menuOpen: string;
    menuClose: string;
    themeToLight: string;
    themeToDark: string;
    langLabel: string;
  };
  hero: {
    whoami: string;
    name: string;
    nameAccent: string;
    role: string;
    ctaPrimary: string;
    ctaSecondary: string;
    sideTitle: string;
    sideOne: string;
    sideTwo: string;
    sideThree: string;
  };
  profile: {
    eyebrow: string;
    title: string;
    subtitle: string;
    explorerTitle: string;
    files: {
      profile: string;
      stack: string;
      contact: string;
    };
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  github: {
    eyebrow: string;
    title: string;
    subtitle: string;
    loading: string;
    errorTitle: string;
    errorText: string;
    openProfile: string;
    publicRepos: string;
    followers: string;
    following: string;
    topLanguage: string;
    lastUpdate: string;
    languageUse: string;
    noLanguage: string;
    source: string;
  };
  about: {
    eyebrow: string;
    title: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    github: string;
    linkedin: string;
    footer: string;
  };
  shell: {
    explorer: string;
    summary: string;
    portraitAlt: string;
    links: string;
    sendEmail: string;
    lineLabel: string;
    trophies: string;
    trophiesOpen: string;
    trophiesClose: string;
    unlocked: string;
    trophyNames: Record<TrophyId, string>;
  };
  palette: {
    open: string;
    close: string;
    title: string;
    tone: string;
    toneWarm: string;
    toneCool: string;
    accent: string;
    accents: Record<"terracotta" | "amber" | "rose" | "sky" | "mint", string>;
  };
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type ProfileJson = {
  name: string;
  title: string;
  location: string;
  focus: string[];
  backend: string[];
  frontend: string[];
  data: string[];
  devops: string[];
  tools: string[];
  language: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
};

export type ActivityItem = {
  label: string;
  value: string;
};

export const dictionary: Record<Lang, Dictionary> = {
  tr: {
    nav: {
      logo: "bayramgol.dev",
      profile: "profil",
      skills: "yetenekler",
      github: "github",
      about: "hakkımda",
      contact: "iletişim",
      skip: "İçeriğe geç",
      homeLabel: "Bayram Göl, ana sayfa",
      menuOpen: "Menüyü aç",
      menuClose: "Menüyü kapat",
      themeToLight: "Açık temaya geç",
      themeToDark: "Koyu temaya geç",
      langLabel: "Switch to English",
    },
    hero: {
      whoami: "whoami",
      name: site.firstName,
      nameAccent: site.lastName,
      role: site.title,
      ctaPrimary: "./open-profile.sh",
      ctaSecondary: "iletişime geç →",
      sideTitle: "active_stack",
      sideOne: site.highlights[0],
      sideTwo: site.highlights[1],
      sideThree: site.highlights[2],
    },
    profile: {
      eyebrow: "profile --json",
      title: "Profil Özeti",
      subtitle: "Kısa profil özeti, teknoloji yığını ve iletişim bilgileri; JSON olarak.",
      explorerTitle: "file explorer",
      files: {
        profile: "profile.json",
        stack: "stack.json",
        contact: "contact.json",
      },
    },
    skills: {
      eyebrow: "stack --compact",
      title: "Yetenekler",
      subtitle: "Günlük işimde kullandığım teknolojiler.",
    },
    github: {
      eyebrow: "github --activity",
      title: "GitHub Aktivitesi",
      subtitle: "GitHub profilimden genel aktivite ve dil dağılımı.",
      loading: "GitHub verisi yükleniyor…",
      errorTitle: "GitHub verisi şu an çekilemedi",
      errorText: "Profil bağlantısı çalışmaya devam ediyor; sayfayı yenileyerek tekrar deneyebilirsin.",
      openProfile: "GitHub profilini aç",
      publicRepos: "Public Repo",
      followers: "Followers",
      following: "Following",
      topLanguage: "Öne çıkan dil",
      lastUpdate: "Son güncelleme",
      languageUse: "Dil dağılımı",
      noLanguage: "Dil verisi yok",
      source: "source: api.github.com",
    },
    about: {
      eyebrow: "whoami --verbose",
      title: "Hakkımda",
    },
    contact: {
      title: "Bir şey geliştirelim mi?",
      subtitle: "Mail, GitHub veya LinkedIn üzerinden ulaşabilirsin.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      footer: `© 2026 ${site.name} · built with Next.js`,
    },
    shell: {
      explorer: "gezgin",
      summary: "kısa özet",
      portraitAlt: "Bayram Göl portresi",
      links: "bağlantılar",
      sendEmail: "E-posta gönder",
      lineLabel: "satır",
      trophies: "Başarımlar",
      trophiesOpen: "Başarımları aç",
      trophiesClose: "Başarımları kapat",
      unlocked: "açıldı",
      trophyNames: {
        profil: "profile.json okundu",
        yetenekler: "skills.json okundu",
        github: "activity.json okundu",
        hakkimda: "about.md okundu",
        iletisim: "contact.sh bulundu",
        theme: "Tema değiştirildi",
        lang: "Dil değiştirildi",
      },
    },
    palette: {
      open: "Renk denemesini aç",
      close: "Renk denemesini kapat",
      title: "renk denemesi",
      tone: "Genel hava",
      toneWarm: "Sıcak",
      toneCool: "Serin",
      accent: "Sadece vurgu",
      accents: { terracotta: "Kiremit", amber: "Kehribar", rose: "Gül", sky: "Gök", mint: "Nane" },
    },
  },
  en: {
    nav: {
      logo: "bayramgol.dev",
      profile: "profile",
      skills: "skills",
      github: "github",
      about: "about",
      contact: "contact",
      skip: "Skip to content",
      homeLabel: "Bayram Göl, home",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
      langLabel: "Türkçe'ye geç",
    },
    hero: {
      whoami: "whoami",
      name: site.firstName,
      nameAccent: site.lastName,
      role: site.title,
      ctaPrimary: "./open-profile.sh",
      ctaSecondary: "get in touch →",
      sideTitle: "active_stack",
      sideOne: site.highlights[0],
      sideTwo: site.highlights[1],
      sideThree: site.highlights[2],
    },
    profile: {
      eyebrow: "profile --json",
      title: "Profile Summary",
      subtitle: "A short profile summary, tech stack, and contact details, shown as JSON.",
      explorerTitle: "file explorer",
      files: {
        profile: "profile.json",
        stack: "stack.json",
        contact: "contact.json",
      },
    },
    skills: {
      eyebrow: "stack --compact",
      title: "Skills",
      subtitle: "Technologies I use day to day.",
    },
    github: {
      eyebrow: "github --activity",
      title: "GitHub Activity",
      subtitle: "Overall activity and language breakdown from my GitHub profile.",
      loading: "Loading GitHub data…",
      errorTitle: "GitHub data could not be loaded",
      errorText: "The profile link still works; reload the page to try again.",
      openProfile: "Open GitHub profile",
      publicRepos: "Public Repos",
      followers: "Followers",
      following: "Following",
      topLanguage: "Top language",
      lastUpdate: "Last update",
      languageUse: "Language usage",
      noLanguage: "No language data",
      source: "source: api.github.com",
    },
    about: {
      eyebrow: "whoami --verbose",
      title: "About Me",
    },
    contact: {
      title: "Shall we build something?",
      subtitle: "Reach out via email, GitHub, or LinkedIn.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      footer: `© 2026 ${site.name} · built with Next.js`,
    },
    shell: {
      explorer: "explorer",
      summary: "quick summary",
      portraitAlt: "Portrait of Bayram Göl",
      links: "links",
      sendEmail: "Send an email",
      lineLabel: "ln",
      trophies: "Trophies",
      trophiesOpen: "Open trophies",
      trophiesClose: "Close trophies",
      unlocked: "unlocked",
      trophyNames: {
        profil: "Read profile.json",
        yetenekler: "Read skills.json",
        github: "Read activity.json",
        hakkimda: "Read about.md",
        iletisim: "Found contact.sh",
        theme: "Changed the theme",
        lang: "Changed the language",
      },
    },
    palette: {
      open: "Open color test",
      close: "Close color test",
      title: "color test",
      tone: "Overall tone",
      toneWarm: "Warm",
      toneCool: "Cool",
      accent: "Accent only",
      accents: { terracotta: "Terracotta", amber: "Amber", rose: "Rose", sky: "Sky", mint: "Mint" },
    },
  },
};

// Aşağıdaki veriler dilden bağımsız; `site.ts`'ten türetilir ve iki dile aynen verilir.
const profile: ProfileJson = {
  name: site.name,
  title: site.title,
  location: site.location,
  focus: [...site.focus],
  backend: [...site.stack.backend],
  frontend: [...site.stack.frontend],
  data: [...site.stack.data],
  devops: [...site.stack.devops],
  tools: [...site.stack.tools],
  language: site.englishLevel,
  contact: {
    email: site.contact.email,
    github: site.contact.githubDisplay,
    linkedin: site.contact.linkedinDisplay,
  },
};

const groups: SkillGroup[] = [
  { group: "Backend", items: [...site.stack.backend] },
  { group: "Frontend", items: [...site.stack.frontend] },
  { group: "Data", items: [...site.stack.data] },
  { group: "DevOps", items: [...site.stack.devops] },
  { group: "Tools", items: [...site.stack.tools] },
];

const activity: ActivityItem[] = site.activity.map((item) => ({ ...item }));

export const profileJson: Record<Lang, ProfileJson> = { tr: profile, en: profile };
export const skillGroups: Record<Lang, SkillGroup[]> = { tr: groups, en: groups };
export const activityItems: Record<Lang, ActivityItem[]> = { tr: activity, en: activity };
