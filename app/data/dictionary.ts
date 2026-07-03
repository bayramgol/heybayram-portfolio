export type Lang = "tr" | "en";

export type Dictionary = {
  nav: {
    logo: string;
    profile: string;
    skills: string;
    github: string;
    about: string;
    contact: string;
  };
  hero: {
    whoami: string;
    name: string;
    nameAccent: string;
    role: string;
    catStatus: string;
    quote: string;
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
    p1a: string;
    p1b: string;
    p1c: string;
    p2a: string;
    p2b: string;
    p2c: string;
    p3: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    github: string;
    linkedin: string;
    footer: string;
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
    },
    hero: {
      whoami: "whoami",
      name: "Bayram",
      nameAccent: "Göl",
      role: "Software Development Specialist · Java / Spring Boot / Angular",
      catStatus: "cat focus.txt",
      quote:
        "Java Spring Boot ve Angular odağında; API, mikroservis ve kurumsal uygulama geliştirme tarafında çalışan software developer.",
      ctaPrimary: "./open-profile.sh",
      ctaSecondary: "iletişime geç →",
      sideTitle: "active_stack",
      sideOne: "Java / Spring Boot",
      sideTwo: "Angular / TypeScript",
      sideThree: "Docker / Jenkins",
    },
    profile: {
      eyebrow: "profile --json",
      title: "Profil Özeti",
      subtitle: "Dosya gezgini gibi açılan sade JSON panelleri. Proje listesi ve metrik kartı yok.",
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
      subtitle: "Temel ve güçlü teknolojiler; abartısız, kompakt ve okunabilir.",
    },
    github: {
      eyebrow: "github --activity",
      title: "GitHub Aktivitesi",
      subtitle: "Proje adı listelemeden GitHub profilinden genel aktivite ve dil dağılımı.",
      loading: "GitHub verisi çekiliyor...",
      errorTitle: "GitHub verisi şu an çekilemedi",
      errorText: "Kart yine de profil linkine yönlenir. Daha sonra otomatik tekrar denenir.",
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
      p1a: "Backend ağırlıklı çalışan, gerektiğinde frontend tarafını da sahiplenen ",
      p1b: "full-stack developer",
      p1c:
        " yaklaşımına sahibim. İş ihtiyacını anlayıp bunu okunabilir ve sürdürülebilir çözüme çevirmeye odaklanıyorum.",
      p2a: "Günlük çalışma alanımda Java Spring Boot, Angular, mikroservis mimarisi, CI/CD ve ",
      p2b: "entegrasyon süreçleri",
      p2c: " öne çıkıyor. Temiz kod, performans ve izlenebilirlik tarafını özellikle önemsiyorum.",
      p3: "Bu sayfa kişisel proje kataloğu gibi değil; daha çok profesyonel profil, stack ve GitHub aktivitesi vitrini gibi kurgulandı.",
    },
    contact: {
      title: "Bir şey geliştirelim mi?",
      subtitle: "Mail, GitHub veya LinkedIn üzerinden ulaşabilirsin.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      footer: "© 2026 Bayram Göl · built with Next.js",
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
    },
    hero: {
      whoami: "whoami",
      name: "Bayram",
      nameAccent: "Göl",
      role: "Software Development Specialist · Java / Spring Boot / Angular",
      catStatus: "cat focus.txt",
      quote:
        "Software developer focused on Java Spring Boot and Angular; building APIs, microservices, and enterprise applications.",
      ctaPrimary: "./open-profile.sh",
      ctaSecondary: "get in touch →",
      sideTitle: "active_stack",
      sideOne: "Java / Spring Boot",
      sideTwo: "Angular / TypeScript",
      sideThree: "Docker / Jenkins",
    },
    profile: {
      eyebrow: "profile --json",
      title: "Profile Summary",
      subtitle: "Clean JSON panels with a file-explorer feel. No project list or metric cards.",
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
      subtitle: "Core technologies, kept simple, compact, and readable.",
    },
    github: {
      eyebrow: "github --activity",
      title: "GitHub Activity",
      subtitle: "General GitHub activity and language overview without listing project names.",
      loading: "Fetching GitHub data...",
      errorTitle: "GitHub data could not be loaded",
      errorText: "The card still links to the profile. It will retry automatically later.",
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
      p1a: "I work mainly on backend development while comfortably owning frontend tasks when needed, with a ",
      p1b: "full-stack developer",
      p1c:
        " mindset. I focus on understanding business needs and turning them into readable and maintainable software.",
      p2a: "My daily work includes Java Spring Boot, Angular, microservice architecture, CI/CD, and ",
      p2b: "integration workflows",
      p2c: ". I especially care about clean code, performance, and observability.",
      p3: "This page is shaped as a professional profile, stack, and GitHub activity showcase rather than a personal project catalog.",
    },
    contact: {
      title: "Shall we build something?",
      subtitle: "Reach out via email, GitHub, or LinkedIn.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      footer: "© 2026 Bayram Göl · built with Next.js",
    },
  },
};

export const profileJson: Record<Lang, ProfileJson> = {
  tr: {
    name: "Bayram Göl",
    title: "Software Development Specialist",
    location: "Istanbul, TR",
    focus: ["backend", "api-design", "microservices", "full-stack"],
    backend: ["Java", "Spring Boot", "Spring Framework", "REST API", "OOP", "Microservices"],
    frontend: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
    data: ["SQL", "NoSQL"],
    devops: ["Git", "Docker", "Jenkins", "Linux", "Kubernetes", "Tomcat"],
    tools: ["Grafana", "DigitalOcean", "CI/CD"],
    language: "English B2 → C1",
    contact: {
      email: "bayram.gol66@gmail.com",
      github: "github.com/bayramgol",
      linkedin: "linkedin.com/in/bayramgol",
    },
  },
  en: {
    name: "Bayram Göl",
    title: "Software Development Specialist",
    location: "Istanbul, TR",
    focus: ["backend", "api-design", "microservices", "full-stack"],
    backend: ["Java", "Spring Boot", "Spring Framework", "REST API", "OOP", "Microservices"],
    frontend: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
    data: ["SQL", "NoSQL"],
    devops: ["Git", "Docker", "Jenkins", "Linux", "Kubernetes", "Tomcat"],
    tools: ["Grafana", "DigitalOcean", "CI/CD"],
    language: "English B2 → C1",
    contact: {
      email: "bayram.gol66@gmail.com",
      github: "github.com/bayramgol",
      linkedin: "linkedin.com/in/bayramgol",
    },
  },
};

export const skillGroups: Record<Lang, SkillGroup[]> = {
  tr: [
    {
      group: "Backend",
      items: ["Java", "Spring Boot", "Spring Framework", "REST API", "OOP", "Microservices"],
    },
    {
      group: "Frontend",
      items: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      group: "Data",
      items: ["SQL", "NoSQL"],
    },
    {
      group: "DevOps",
      items: ["Git", "Docker", "Jenkins", "Linux", "Kubernetes", "Tomcat"],
    },
    {
      group: "Tools",
      items: ["Grafana", "DigitalOcean", "CI/CD"],
    },
  ],
  en: [
    {
      group: "Backend",
      items: ["Java", "Spring Boot", "Spring Framework", "REST API", "OOP", "Microservices"],
    },
    {
      group: "Frontend",
      items: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      group: "Data",
      items: ["SQL", "NoSQL"],
    },
    {
      group: "DevOps",
      items: ["Git", "Docker", "Jenkins", "Linux", "Kubernetes", "Tomcat"],
    },
    {
      group: "Tools",
      items: ["Grafana", "DigitalOcean", "CI/CD"],
    },
  ],
};

export const activityItems: Record<Lang, ActivityItem[]> = {
  tr: [
    { label: "primary", value: "Java / Spring Boot" },
    { label: "frontend", value: "Angular / TypeScript" },
    { label: "delivery", value: "Jenkins / Docker" },
    { label: "observe", value: "Grafana / Logs" },
  ],
  en: [
    { label: "primary", value: "Java / Spring Boot" },
    { label: "frontend", value: "Angular / TypeScript" },
    { label: "delivery", value: "Jenkins / Docker" },
    { label: "observe", value: "Grafana / Logs" },
  ],
};
