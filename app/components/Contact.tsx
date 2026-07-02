export default function Contact() {
  return (
    <>
      <section className="section" id="iletisim">
        <div className="container">
          <div className="contact-box">
            <h2>Bir proje mi var aklında?</h2>
            <p>Konuşalım — mail at ya da sosyal medyadan ulaş.</p>
            <div className="contact-links">
              <a href="mailto:mail@example.com" className="btn btn-primary">
                ✉ mail@example.com
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>© 2026 İsim Soyisim · tüm hakları saklıdır</footer>
    </>
  );
}
