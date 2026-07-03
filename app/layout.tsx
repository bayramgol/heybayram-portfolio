import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./context/LangContext";

export const metadata: Metadata = {
  title: "Bayram Göl — Software Development Specialist",
  description:
    "Bayram Göl professional developer dashboard. Java, Spring Boot, Angular, microservices, DevOps, and GitHub activity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
