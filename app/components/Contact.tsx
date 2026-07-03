"use client";

import { useLang } from "../context/LangContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <>
      <section className="section" id="iletisim">
        <div className="container">
          <div className="contact-box">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>
            <div className="contact-links">
              <a href="mailto:bayram.gol66@gmail.com" className="btn btn-primary">
                {t.contact.email}
              </a>
              <a
                href="https://github.com/bayramgol"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                {t.contact.github}
              </a>
              <a
                href="https://www.linkedin.com/in/bayramgol"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                {t.contact.linkedin}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>{t.contact.footer}</footer>
    </>
  );
}
