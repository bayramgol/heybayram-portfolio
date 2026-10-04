/**
 * Dilden bağımsız tek kaynak: kişisel bilgiler, bağlantılar ve teknoloji listeleri.
 * Dile bağlı metinler `dictionary.ts` içinde kalır; orası buradaki değerleri kullanır.
 * Bir bilgiyi değiştirmek için (unvan, e-posta, teknoloji...) yalnızca bu dosya yeter.
 */

const firstName = "Bayram";
const lastName = "Göl";
const githubUser = "bayramgol";
const linkedinHandle = "bayramgol";

/** Başarım (trophy) kimlikleri: 5 bölüm + tema + dil */
export const trophyIds = ["profil", "yetenekler", "github", "hakkimda", "iletisim", "theme", "lang"] as const;
export type TrophyId = (typeof trophyIds)[number];

import type { McName } from "./minecraft";

/** Editör düzeninde her bölümün "dosya adı"; bölüm kimlikleri sayfadaki #id'lerdir. */
export const sectionFiles = [
  { id: "top", file: "README.md", nav: null, icon: "bookshelf" as McName },
  { id: "profil", file: "profile.json", nav: "profile", icon: "craftingTable" as McName },
  { id: "yetenekler", file: "skills.json", nav: "skills", icon: "pickaxeSmall" as McName },
  { id: "github", file: "activity.json", nav: "github", icon: "clockSmall" as McName },
  { id: "hakkimda", file: "about.md", nav: "about", icon: "torchSmall" as McName },
  { id: "iletisim", file: "contact.sh", nav: "contact", icon: "arrowSmall" as McName },
] as const;

export const site = {
  firstName,
  lastName,
  name: `${firstName} ${lastName}`,
  title: "Software Development Specialist",
  location: "Istanbul, TR",
  englishLevel: "English B2 → C1",
  /** Portre dosyası (public/ altında). Gerçek fotoğraf için bu yolu değiştirmek yeter. */
  portrait: "/portrait.jpg",

  /** Hero ve "hakkımda" kod bloğunda görünen kısa yığın */
  headlineStack: ["Java", "Spring Boot", "Angular"],
  highlights: ["Java / Spring Boot", "Angular / TypeScript", "Docker / Jenkins"],
  focus: ["backend", "api-design", "microservices", "full-stack"],

  contact: {
    email: "bayram.gol66@gmail.com",
    githubUser,
    githubUrl: `https://github.com/${githubUser}`,
    githubDisplay: `github.com/${githubUser}`,
    linkedinUrl: `https://www.linkedin.com/in/${linkedinHandle}`,
    linkedinDisplay: `linkedin.com/in/${linkedinHandle}`,
  },

  stack: {
    backend: ["Java", "Spring Boot", "Spring Framework", "REST API", "OOP", "Microservices"],
    frontend: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
    data: ["SQL", "NoSQL"],
    devops: ["Git", "Docker", "Jenkins", "Linux", "Kubernetes", "Tomcat"],
    tools: ["Grafana", "DigitalOcean", "CI/CD"],
  },

  activity: [
    { label: "primary", value: "Java / Spring Boot" },
    { label: "frontend", value: "Angular / TypeScript" },
    { label: "delivery", value: "Jenkins / Docker" },
    { label: "observe", value: "Grafana / Logs" },
  ],
} as const;
