export type Lang = "tr" | "en";

export type Dictionary = {
  nav: {
    logo: string;
    skills: string;
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
  };
  skills: {
    eyebrow: string;
    title: string;
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
    codeRole: string;
    codeLocation: string;
  };
  contact: {
    title: string;
    subtitle: string;
    github: string;
    linkedin: string;
    footer: string;
  };
};

export const dictionary: Record<Lang, Dictionary> = {
  tr: {
    nav: {
      logo: "bayramgol.dev",
      skills: "yetenekler",
      about: "hakkımda",
      contact: "iletişim",
    },
    hero: {
      whoami: "whoami",
      name: "Bayram",
      nameAccent: "Göl",
      role: "Full-Stack Developer, Part-time Homo Sapiens",
      catStatus: "cat status.txt",
      quote:
        '→ "İmkânın Sınırını Görmek İçin İmkânsızı Denemek Lazım." — Fatih Sultan Mehmet',
      ctaPrimary: "./hakkimda-oku.sh",
      ctaSecondary: "iletişime geç →",
    },
    skills: {
      eyebrow: "stack --list",
      title: "Yetenekler",
    },
    about: {
      eyebrow: "whoami --verbose",
      title: "Hakkımda",
      p1a: "Fikirleri ",
      p1b: "çalışan ürünlere",
      p1c:
        " dönüştürmeyi seven bir full-stack developer'ım. Arayüzden veritabanına kadar tüm katmanlarda rahat çalışıyorum.",
      p2a: "Temiz kod, ölçeklenebilir mimari ve ",
      p2b: "kullanıcı deneyimini önceleyen",
      p2c:
        " çözümler üretmeye odaklanıyorum. Her projede öğrenmeye açık, detaylara dikkat eden bir yaklaşım benimsiyorum.",
      p3: "İlginç projelerle ilgileniyorum — birlikte bir şeyler inşa etmek istersen aşağıdan ulaşabilirsin.",
      codeRole: "Full-Stack Developer",
      codeLocation: "İstanbul, TR",
    },
    contact: {
      title: "Bir proje mi var aklında?",
      subtitle: "Konuşalım — sosyal medyadan ulaş.",
      github: "GitHub",
      linkedin: "LinkedIn",
      footer: "© 2026 Bayram Göl · tüm hakları saklıdır",
    },
  },
  en: {
    nav: {
      logo: "bayramgol.dev",
      skills: "skills",
      about: "about",
      contact: "contact",
    },
    hero: {
      whoami: "whoami",
      name: "Bayram",
      nameAccent: "Göl",
      role: "Full-Stack Developer, Part-time Homo Sapiens",
      catStatus: "cat status.txt",
      quote:
        '→ "You Have To Try The Impossible To See The Limits Of The Possible." — Mehmed the Conqueror',
      ctaPrimary: "./read-about-me.sh",
      ctaSecondary: "get in touch →",
    },
    skills: {
      eyebrow: "stack --list",
      title: "Skills",
    },
    about: {
      eyebrow: "whoami --verbose",
      title: "About Me",
      p1a: "I'm a full-stack developer who loves turning ideas into ",
      p1b: "working products",
      p1c:
        ". I'm comfortable working across every layer, from the interface down to the database.",
      p2a: "I focus on clean code, scalable architecture, and solutions that ",
      p2b: "put user experience first",
      p2c:
        ". I approach every project with a willingness to learn and an eye for detail.",
      p3: "I'm interested in interesting projects — feel free to reach out below if you'd like to build something together.",
      codeRole: "Full-Stack Developer",
      codeLocation: "Istanbul, TR",
    },
    contact: {
      title: "Got a project in mind?",
      subtitle: "Let's talk — reach out on social media.",
      github: "GitHub",
      linkedin: "LinkedIn",
      footer: "© 2026 Bayram Göl · all rights reserved",
    },
  },
};

export const skillsList: Record<Lang, string[]> = {
  tr: [
    "Java / Spring Boot",
    "Microservis Mimarisi",
    "Angular",
    "JavaScript / TypeScript",
    "React / Next.js",
    "Node.js / Express",
    "MSSQL / Couchbase",
    "Docker",
    "CI/CD",
    "REST / GraphQL",
  ],
  en: [
    "Java / Spring Boot",
    "Microservices Architecture",
    "Angular",
    "JavaScript / TypeScript",
    "React / Next.js",
    "Node.js / Express",
    "MSSQL / Couchbase",
    "Docker",
    "CI/CD",
    "REST / GraphQL",
  ],
};
