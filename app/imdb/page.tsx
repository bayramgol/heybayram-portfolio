import type { Metadata } from "next";
import Link from "next/link";
import CursorGlow from "../components/CursorGlow";
import { artists } from "./data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "BayramDB Artists",
  description: "Instagram highlight videolarını sanatçı bazlı statik IMDb tarzı sıralama.",
};

export default function ImdbPage() {
  return (
    <>
      <div className="scanline-bg" />
      <CursorGlow />
      <main className={styles.page}>
        <nav className={styles.nav} aria-label="BayramDB navigation">
          <Link className={styles.logo} href="/">
            bayramgol.dev
          </Link>
          <div className={styles.navLinks}>
            <a href="#artists">artists</a>
            <a href="#format">format</a>
          </div>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>/imdb --artists</p>
            <h1>BayramDB</h1>
            <p>
              Instagram highlight müziklerini sanatçı profili, story thumbnail listesi ve tekil
              değerlendirme sayfalarıyla tutan statik arşiv.
            </p>
            <div className={styles.heroActions}>
              <a href="#artists" className={styles.primaryButton}>
                Sanatçılara bak
              </a>
            </div>
          </div>

          <aside className={styles.scoreboard} aria-label="BayramDB summary">
            <div className={styles.scoreHeader}>
              <span>artist count</span>
              <strong>{artists.length}</strong>
            </div>
            <div
              className={styles.featuredThumbnail}
              style={{ backgroundImage: `url(${artists[0].highlightCover})` }}
              aria-hidden="true"
            />
            <h2>{artists[0].name}</h2>
            <p>@{artists[0].username}</p>
            <div className={styles.stats}>
              <span>{artists[0].stories.length} story slotu</span>
              <span>{artists[0].highlightSource}</span>
            </div>
          </aside>
        </section>

        <section className={styles.section} id="artists">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>artist endpoint</p>
            <h2>Sanatçılar</h2>
          </div>

          <div className={styles.artistGrid}>
            {artists.map((artist) => (
              <Link className={styles.artistCard} href={`/imdb/artist/${artist.slug}/`} key={artist.slug}>
                <div className={styles.avatar} style={{ backgroundImage: `url(${artist.avatar})` }} />
                <div>
                  <p className={styles.artist}>{artist.username}</p>
                  <h3>{artist.name}</h3>
                  <p className={styles.meta}>
                    {artist.highlightSource} · {artist.stories.length} story
                  </p>
                  <p className={styles.verdict}>{artist.bio}</p>
                </div>
                <span className={styles.cardArrow}>Aç</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.templateBlock} id="format">
          <div>
            <p className={styles.eyebrow}>kayıt formatı</p>
            <h2>Story Kartı</h2>
            <p>
              Ayrı bir detay sayfasına gitmeden, sanatçı sayfasındaki her story kartının
              altında puan, şarkı adı ve değerlendirme notu doğrudan görünür.
            </p>
          </div>
          <pre className={styles.codeBlock}>
            <code>{`{
  score: 8.1,
  song: "Şarkı adı",
  review: "Tek paragraf değerlendirme."
}`}</code>
          </pre>
        </section>
      </main>
    </>
  );
}
