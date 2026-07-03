export type Lang = "tr" | "en";

export type Dictionary = {
  nav: {
    logo: string;
    dashboard: string;
    skills: string;
    experience: string;
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
    badgeOne: string;
    badgeTwo: string;
    badgeThree: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  dashboard: {
    eyebrow: string;
    title: string;
    subtitle: string;
    terminalTitle: string;
    terminalLineOne: string;
    terminalLineTwo: string;
    terminalLineThree: string;
    nowCardTitle: string;
    nowCardBody: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  experience: {
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
    codeRole: string;
    codeLocation: string;
    codeMode: string;
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

export const dictionary: Record<Lang, Dictionary> = {
  tr: {
    nav: {
      logo: "bayramgol.dev",
      dashboard: "dashboard",
      skills: "yetenekler",
      experience: "deneyim",
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
        "Enterprise uygulamalar, mikroservis mimarisi, otomasyon akışları ve temiz API tasarımı üzerine çalışan full-stack developer.",
      badgeOne: "Spring Boot",
      badgeTwo: "Angular",
      badgeThree: "Microservices",
      ctaPrimary: "./dashboard-ac.sh",
      ctaSecondary: "iletişime geç →",
    },
    dashboard: {
      eyebrow: "system --overview",
      title: "Developer Dashboard",
      subtitle:
        "CV özetini tek bakışta okunur hale getiren, proje adı göstermeyen profesyonel vitrin.",
      terminalTitle: "career.log",
      terminalLineOne: "backend + frontend geliştirme",
      terminalLineTwo: "CI/CD, deployment ve monitoring süreçleri",
      terminalLineThree: "yüksek hacimli operasyonlar için otomasyon",
      nowCardTitle: "current_stack.json",
      nowCardBody:
        "Java, Spring Boot, Angular, SQL/NoSQL, Docker, Jenkins, Kubernetes ve Grafana ekseninde üretim ortamına dokunan geliştirmeler.",
    },
    skills: {
      eyebrow: "stack --compact",
      title: "Yetenekler",
      subtitle:
        "Küçük bloklar, daha dashboard hissi. Teknoloji isimleri CV’deki yeteneklerden derlendi.",
    },
    experience: {
      eyebrow: "career --timeline",
      title: "Profesyonel Deneyim",
      subtitle:
        "Kişisel proje detayı olmadan; rol, sorumluluk ve iş etkisi odaklı kısa özet.",
    },
    github: {
      eyebrow: "github --activity",
      title: "GitHub Aktivitesi",
      subtitle:
        "Kod ritmini göstermek için canlı GitHub kartları. Site içinde proje listesi yok.",
      statsAlt: "Bayram Göl GitHub istatistikleri",
      langsAlt: "Bayram Göl GitHub kullanılan diller",
      streakAlt: "Bayram Göl GitHub streak istatistikleri",
    },
    about: {
      eyebrow: "whoami --verbose",
      title: "Hakkımda",
      p1a: "Backend ağırlıklı çalışan, gerektiğinde frontend tarafını da sahiplenen ",
      p1b: "full-stack developer",
      p1c:
        " yaklaşımına sahibim. İş ihtiyacını anlayıp bunu sürdürülebilir, okunabilir ve deploy edilebilir çözüme çevirmeye odaklanıyorum.",
      p2a: "Günlük çalışma alanımda Java Spring Boot, Angular, mikroservis mimarisi, CI/CD ve ",
      p2b: "operasyonel otomasyon",
      p2c:
        " öne çıkıyor. Performans, izlenebilirlik ve süreç iyileştirme tarafını özellikle önemsiyorum.",
      p3: "Bu sayfa bilinçli olarak kişisel proje katalogu yerine, profesyonel profil + yetenek + aktivite dashboard’u gibi tasarlandı.",
      codeRole: "Software Development Specialist",
      codeLocation: "Istanbul, TR",
      codeMode: "production-minded",
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
      dashboard: "dashboard",
      skills: "skills",
      experience: "experience",
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
        "Full-stack developer focused on enterprise applications, microservice architecture, automation workflows, and clean API design.",
      badgeOne: "Spring Boot",
      badgeTwo: "Angular",
      badgeThree: "Microservices",
      ctaPrimary: "./open-dashboard.sh",
      ctaSecondary: "get in touch →",
    },
    dashboard: {
      eyebrow: "system --overview",
      title: "Developer Dashboard",
      subtitle:
        "A clean professional profile view based on the CV, without listing personal projects.",
      terminalTitle: "career.log",
      terminalLineOne: "backend + frontend development",
      terminalLineTwo: "CI/CD, deployment, and monitoring workflows",
      terminalLineThree: "automation for high-volume operations",
      nowCardTitle: "current_stack.json",
      nowCardBody:
        "Production-oriented work across Java, Spring Boot, Angular, SQL/NoSQL, Docker, Jenkins, Kubernetes, and Grafana.",
    },
    skills: {
      eyebrow: "stack --compact",
      title: "Skills",
      subtitle:
        "Compact skill chips for a dashboard-like look. Technologies are derived from the CV skill set.",
    },
    experience: {
      eyebrow: "career --timeline",
      title: "Professional Experience",
      subtitle:
        "No personal project catalog; just role, responsibility, and measurable business impact.",
    },
    github: {
      eyebrow: "github --activity",
      title: "GitHub Activity",
      subtitle:
        "Live GitHub cards to show coding rhythm. No project list is shown on the site.",
      statsAlt: "Bayram Göl GitHub stats",
      langsAlt: "Bayram Göl GitHub top languages",
      streakAlt: "Bayram Göl GitHub streak stats",
    },
    about: {
      eyebrow: "whoami --verbose",
      title: "About Me",
      p1a: "I work mainly on backend development while comfortably owning frontend tasks when needed, with a ",
      p1b: "full-stack developer",
      p1c:
        " mindset. I focus on understanding the business need and turning it into maintainable, readable, deployable software.",
      p2a: "My day-to-day work includes Java Spring Boot, Angular, microservice architecture, CI/CD, and ",
      p2b: "operational automation",
      p2c:
        ". I especially care about performance, observability, and continuous process improvement.",
      p3: "This page is intentionally designed as a professional profile, skills, and activity dashboard instead of a personal project catalog.",
      codeRole: "Software Development Specialist",
      codeLocation: "Istanbul, TR",
      codeMode: "production-minded",
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

export const dashboardMetrics: Record<Lang, { value: string; label: string; detail: string }[]> = {
  tr: [
    { value: "3+", label: "yıl deneyim", detail: "Kurumsal yazılım geliştirme" },
    { value: "45%", label: "hızlanma", detail: "Operasyonel akış otomasyonu" },
    { value: "70%", label: "otomatik çözüm", detail: "Gelen taleplerin otomatik karşılanması" },
    { value: "40%", label: "azalma", detail: "Bazı talep tiplerinde optimizasyon etkisi" },
  ],
  en: [
    { value: "3+", label: "years experience", detail: "Enterprise software development" },
    { value: "45%", label: "faster workflows", detail: "Operational workflow automation" },
    { value: "70%", label: "automatic resolution", detail: "Incoming requests handled automatically" },
    { value: "40%", label: "reduction", detail: "Impact on selected request categories" },
  ],
};

export const skillGroups: Record<Lang, { group: string; items: string[] }[]> = {
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
      group: "Cloud & Monitoring",
      items: ["DigitalOcean", "Grafana", "CI/CD", "Production Support"],
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
      group: "Cloud & Monitoring",
      items: ["DigitalOcean", "Grafana", "CI/CD", "Production Support"],
    },
  ],
};

export const experienceItems: Record<Lang, { period: string; role: string; company: string; bullets: string[] }[]> = {
  tr: [
    {
      period: "10.2025 — Present",
      role: "Software Development Specialist",
      company: "Ebebek · Istanbul",
      bullets: [
        "Java Spring Boot ve Angular ile uçtan uca kurumsal uygulama geliştirme.",
        "Mikroservis mimarisinde RESTful servis tasarımı, bakım ve entegrasyon süreçleri.",
        "Batch processing, otomasyon ve yüksek hacimli operasyonel süreç iyileştirmeleri.",
      ],
    },
    {
      period: "10.2022 — 10.2025",
      role: "Associate Software Development Specialist",
      company: "Ebebek · Istanbul",
      bullets: [
        "Backend geliştirme ve bakım süreçlerinde Java Spring Boot odaklı çalışma.",
        "SQL / NoSQL veri modelleme, entegrasyon ve deployment süreçlerine katkı.",
        "Jenkins ile CI/CD, UAT ve production süreçlerinde aktif rol.",
      ],
    },
    {
      period: "07.2022 — 10.2022",
      role: "IT Intern",
      company: "Ebebek · Istanbul",
      bullets: [
        "Spring Boot REST API geliştirme ve integration test süreçlerine destek.",
        "Angular frontend geliştirme çalışmalarına katkı.",
        "Cucumber ve Appium ile Android mobil test senaryoları hazırlama.",
      ],
    },
  ],
  en: [
    {
      period: "10.2025 — Present",
      role: "Software Development Specialist",
      company: "Ebebek · Istanbul",
      bullets: [
        "End-to-end enterprise application development with Java Spring Boot and Angular.",
        "RESTful service design, maintenance, and integration within microservice architecture.",
        "Batch processing, automation, and improvements for high-volume operational workflows.",
      ],
    },
    {
      period: "10.2022 — 10.2025",
      role: "Associate Software Development Specialist",
      company: "Ebebek · Istanbul",
      bullets: [
        "Backend development and maintenance with a Java Spring Boot focus.",
        "SQL / NoSQL data modeling, integration, and deployment process contributions.",
        "Active role in CI/CD, UAT, and production workflows using Jenkins.",
      ],
    },
    {
      period: "07.2022 — 10.2022",
      role: "IT Intern",
      company: "Ebebek · Istanbul",
      bullets: [
        "Supported Spring Boot REST API development and integration testing.",
        "Contributed to Angular frontend development tasks.",
        "Prepared Android mobile test scenarios using Cucumber and Appium.",
      ],
    },
  ],
};
