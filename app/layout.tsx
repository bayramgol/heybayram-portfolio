import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./context/LangContext";
import { ShellProvider } from "./context/ShellContext";
import { site } from "./data/site";

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Başlık ve gövde için tek aile (optik boyut eksenli: büyük boyutta daha keskin, küçükte okunaklı).
const sans = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description:
    "Bayram Göl developer profile. Java, Spring Boot, Angular, microservices, DevOps, and GitHub activity.",
};

export const viewport: Viewport = {
  themeColor: "#17130f",
};

// Sayfa boyanmadan önce tema ve dil belirlenir; yanıp sönme olmaz.
const initScript = `try{var d=document.documentElement,t=localStorage.getItem("theme");if(t!=="light"){t="dark"}d.dataset.theme=t;if(localStorage.getItem("tone")==="cool"){d.dataset.tone="cool"}var a=localStorage.getItem("accent");if(/^(amber|terracotta|rose|mint)$/.test(a||"")){d.dataset.accent=a}var l=localStorage.getItem("lang");if(l==="en"||l==="tr"){d.lang=l}else if(!/^tr/i.test(navigator.language||"tr")){d.lang="en"}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${mono.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>
        <LangProvider>
          <ShellProvider>{children}</ShellProvider>
        </LangProvider>
      </body>
    </html>
  );
}
