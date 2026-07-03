export default function About() {
  return (
    <section className="section" id="hakkimda">
      <div className="container">
        <div className="eyebrow">whoami --verbose</div>
        <h2 className="section-title">Hakkımda</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Fikirleri <strong>çalışan ürünlere</strong> dönüştürmeyi seven
              bir full-stack developer&apos;ım. Arayüzden veritabanına kadar
              tüm katmanlarda rahat çalışıyorum.
            </p>
            <p>
              Temiz kod, ölçeklenebilir mimari ve{" "}
              <strong>kullanıcı deneyimini önceleyen</strong> çözümler
              üretmeye odaklanıyorum. Her projede öğrenmeye açık, detaylara
              dikkat eden bir yaklaşım benimsiyorum.
            </p>
            <p>
              Şu anda yeni fırsatlara ve ilginç projelere{" "}
              <strong>açığım</strong> — birlikte bir şeyler inşa etmek
              istersen aşağıdan ulaşabilirsin.
            </p>
          </div>
          <div className="code-block">
            <span className="c-key">const</span> developer = {"{"}
            <br />
            &nbsp;&nbsp;name: <span className="c-str">
              &quot;Bayram Göl&quot;
            </span>,
            <br />
            &nbsp;&nbsp;role:{" "}
            <span className="c-str">&quot;Full-Stack Developer&quot;</span>,
            <br />
            &nbsp;&nbsp;focus: [<span className="c-str">&quot;fullstack&quot;</span>
            , <span className="c-str">&quot;microservis&quot;</span>,{" "}
            <span className="c-str">&quot;api&quot;</span>],
            <br />
            &nbsp;&nbsp;available: <span className="c-key">true</span>,{" "}
            <span className="c-com">// müsait</span>
            <br />
            &nbsp;&nbsp;location: <span className="c-str">
              &quot;İstanbul, TR&quot;
            </span>
            <br />
            {"}"};
          </div>
        </div>
      </div>
    </section>
  );
}
