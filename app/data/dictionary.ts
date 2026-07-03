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
    fileName: string;
    explorerTitle: string;
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
    statsAlt: string;
    langsAlt: string;
    streakAlt: string;
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
  devops: string[];
  monitoring: string[];
  language: string;
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
        "Kurumsal uygulamalar, temiz API tasarımı, mikroservis mimarisi ve frontend/backend geliştirme üzerine çalışan software developer.",
      ctaPrimary: "./profile-json-ac.sh",
      ctaSecondary: "iletişime geç →",
      sideTitle: "active_stack",
      sideOne: "Spring Boot",
      sideTwo: "Angular",
      sideThree: "Microservices",
    },
    profile: {
      eyebrow: "profile --json",
      title: "Profil Özeti",
      subtitle:
        "Sayı/metrik ya da proje listesi olmadan; sadece teknoloji odağı ve çalışma alanını gösteren sade JSON görünümü.",
      fileName: "profile.json",
      explorerTitle: "file explorer",
    },
    skills: {
      eyebrow: "stack --compact",
      title: "Yetenekler",
      subtitle:
        "Kompakt bloklar halinde backend, frontend, veri ve DevOps tarafında kullandığım teknolojiler.",
    },
    github: {
      eyebrow: "github --activity",
      title: "GitHub Aktivitesi",
      subtitle:
        "Proje listesi göstermeden kod aktivitesini görsel olarak destekleyen canlı GitHub kartları.",
      statsAlt: "Bayram Göl GitHub istatistikleri",
      langsAlt: "Bayram Göl GitHub kullanılan diller",
      streakAlt: "Bayram Göl GitHub aktivite serisi",
    },
    about: {
      eyebrow: "whoami --verbose",
      title: "Hakkımda",
      p1a: "Backend ağırlıklı çalışan, gerektiğinde frontend tarafını da sahiplenen ",
      p1b: "full-stack developer",
      p1c:
        " yaklaşımına sahibim. İş ihtiyacını anlayıp bunu okunabilir, sürdürülebilir ve deploy edilebilir çözüme çevirmeye odaklanıyorum.",
      p2a: "Günlük çalışma alanımda Java Spring Boot, Angular, mikroservis mimarisi, CI/CD ve ",
      p2b: "entegrasyon süreçleri",
      p2c:
        " öne çıkıyor. Temiz kod, performans ve izlenebilirlik tarafını özellikle önemsiyorum.",
      p3: "Bu sayfa proje kataloğu gibi değil; daha çok profesyonel profil, stack ve GitHub aktivitesi vitrini gibi kurgulandı.",
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
        "Software developer focused on enterprise applications, clean API design, microservice architecture, and frontend/backend development.",
      ctaPrimary: "./open-profile-json.sh",
      ctaSecondary: "get in touch →",
      sideTitle: "active_stack",
      sideOne: "Spring Boot",
      sideTwo: "Angular",
      sideThree: "Microservices",
    },
    profile: {
      eyebrow: "profile --json",
      title: "Profile Summary",
      subtitle:
        "A clean JSON-style view showing technology focus and working area, without metric cards or project lists.",
      fileName: "profile.json",
      explorerTitle: "file explorer",
    },
    skills: {
      eyebrow: "stack --compact",
      title: "Skills",
      subtitle:
        "Compact blocks for the technologies I use across backend, frontend, data, and DevOps workflows.",
    },
    github: {
      eyebrow: "github --activity",
      title: "GitHub Activity",
      subtitle:
        "Live GitHub cards that support the profile visually without showing a project catalog.",
      statsAlt: "Bayram Göl GitHub stats",
      langsAlt: "Bayram Göl GitHub top languages",
      streakAlt: "Bayram Göl GitHub activity streak",
    },
    about: {
      eyebrow: "whoami --verbose",
      title: "About Me",
      p1a: "I work mainly on backend development while comfortably owning frontend tasks when needed, with a ",
      p1b: "full-stack developer",
      p1c:
        " mindset. I focus on understanding business needs and turning them into readable, maintainable, deployable software.",
      p2a: "My daily work includes Java Spring Boot, Angular, microservice architecture, CI/CD, and ",
      p2b: "integration workflows",
      p2c:
        ". I especially care about clean code, performance, and observability.",
      p3: "This page is shaped as a professional profile, stack, and GitHub activity showcase rather than a project catalog.",
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
    focus: ["backend", "frontend", "api-design", "automation"],
    backend: ["Java", "Spring Boot", "Spring Framework", "RESTful API", "Microservices"],
    frontend: ["Angular", "TypeScript", "Responsive UI"],
    devops: ["Git", "Docker", "Jenkins", "Linux", "Kubernetes", "Tomcat"],
    monitoring: ["Grafana", "CI/CD", "Production Support"],
    language: "English B2 → C1",
  },
  en: {
    name: "Bayram Göl",
    title: "Software Development Specialist",
    location: "Istanbul, TR",
    focus: ["backend", "frontend", "api-design", "automation"],
    backend: ["Java", "Spring Boot", "Spring Framework", "RESTful API", "Microservices"],
    frontend: ["Angular", "TypeScript", "Responsive UI"],
    devops: ["Git", "Docker", "Jenkins", "Linux", "Kubernetes", "Tomcat"],
    monitoring: ["Grafana", "CI/CD", "Production Support"],
    language: "English B2 → C1",
  },
};

export const skillGroups: Record<Lang, SkillGroup[]> = {
  tr: [
    {
      group: "Backend",
      items: ["Java", "Spring Boot", "Spring Framework", "RESTful API", "OOP", "Microservices"],
    },
    {
      group: "Frontend",
      items: ["Angular", "TypeScript", "Responsive UI", "Component Design"],
    },
    {
      group: "Data",
      items: ["SQL", "NoSQL", "Data Modeling", "Integration"],
    },
    {
      group: "DevOps",
      items: ["Git", "Docker", "Jenkins", "Linux", "Kubernetes", "Tomcat"],
    },
    {
      group: "Monitoring & Tools",
      items: ["Grafana", "DigitalOcean", "CI/CD", "Microsoft Office"],
    },
  ],
  en: [
    {
      group: "Backend",
      items: ["Java", "Spring Boot", "Spring Framework", "RESTful API", "OOP", "Microservices"],
    },
    {
      group: "Frontend",
      items: ["Angular", "TypeScript", "Responsive UI", "Component Design"],
    },
    {
      group: "Data",
      items: ["SQL", "NoSQL", "Data Modeling", "Integration"],
    },
    {
      group: "DevOps",
      items: ["Git", "Docker", "Jenkins", "Linux", "Kubernetes", "Tomcat"],
    },
    {
      group: "Monitoring & Tools",
      items: ["Grafana", "DigitalOcean", "CI/CD", "Microsoft Office"],
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
