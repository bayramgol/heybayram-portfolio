export type Project = {
  id: number;
  command: string; // örn: proje-1.sh
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    command: "proje-1.sh",
    title: "Proje Adı Bir",
    description:
      "Kısa proje açıklaması buraya gelecek — ne yaptığı, hangi problemi çözdüğü, kimin için yapıldığı.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
  {
    id: 2,
    command: "proje-2.sh",
    title: "Proje Adı İki",
    description:
      "Kısa proje açıklaması buraya gelecek — ne yaptığı, hangi problemi çözdüğü, kimin için yapıldığı.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
  {
    id: 3,
    command: "proje-3.sh",
    title: "Proje Adı Üç",
    description:
      "Kısa proje açıklaması buraya gelecek — ne yaptığı, hangi problemi çözdüğü, kimin için yapıldığı.",
    tags: ["Vue", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
];

export const skills: string[] = [
  "Java / Spring Boot",
  "Microservis Mimarisi",
  "Angular",
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "PostgreSQL / MongoDB",
  "Docker",
  "CI/CD",
  "REST / GraphQL",
  "AWS / Vercel",
];
