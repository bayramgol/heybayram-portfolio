export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="terminal-window">
          <div className="terminal-titlebar">
            <div className="dot dot-r"></div>
            <div className="dot dot-y"></div>
            <div className="dot dot-g"></div>
            <span>zsh — 80×24</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line" style={{ animationDelay: "0.1s" }}>
              <span className="prompt">visitor@site</span>
              <span className="cmd">:~$ whoami</span>
            </div>
            <p
              className="terminal-out"
              style={{
                animation: "fadeIn 0.4s forwards",
                animationDelay: "0.5s",
                opacity: 0,
              }}
            >
              <span className="hero-name">
                İsim <span className="accent-text">Soyisim</span>
                <span className="cursor"></span>
              </span>
              <br />
              <span className="hero-role">
                Full-Stack Developer — arayüzden veritabanına kadar
              </span>
            </p>
            <div className="terminal-line" style={{ animationDelay: "0.9s" }}>
              <span className="prompt">visitor@site</span>
              <span className="cmd">:~$ cat status.txt</span>
            </div>
            <p
              className="terminal-out"
              style={{
                animation: "fadeIn 0.4s forwards",
                animationDelay: "1.2s",
                opacity: 0,
              }}
            >
              → Yeni projelere açık · React / Node / PostgreSQL ile çalışıyor
            </p>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#projeler" className="btn btn-primary">
            ./projeleri-gor.sh
          </a>
          <a href="#iletisim" className="btn btn-ghost">
            iletişime geç →
          </a>
        </div>
      </div>
    </header>
  );
}
