import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CursorGlow from "../../../components/CursorGlow";
import { artists, getArtist } from "../../data";
import styles from "../../page.module.css";

type ArtistPageProps = {
  params: Promise<{
    artistSlug: string;
  }>;
};

export function generateStaticParams() {
  return artists.map((artist) => ({
    artistSlug: artist.slug,
  }));
}

export async function generateMetadata({ params }: ArtistPageProps): Promise<Metadata> {
  const { artistSlug } = await params;
  const artist = getArtist(artistSlug);

  if (!artist) {
    return {
      title: "Artist not found",
    };
  }

  return {
    title: `${artist.name} · BayramDB`,
    description: `${artist.name} için Instagram highlight story rankleri.`,
  };
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { artistSlug } = await params;
  const artist = getArtist(artistSlug);

  if (!artist) {
    notFound();
  }

  const scoredStories = artist.stories.filter((story) => typeof story.score === "number");
  const averageScore = scoredStories.length
    ? scoredStories.reduce((total, story) => total + Number(story.score), 0) / scoredStories.length
    : undefined;

  return (
    <>
      <div className="scanline-bg" />
      <CursorGlow />
      <main className={styles.page}>
        <nav className={styles.nav} aria-label="BayramDB artist navigation">
          <Link className={styles.logo} href="/imdb/">
            BayramDB
          </Link>
          <div className={styles.navLinks}>
            <a href="#stories">storyler</a>
            <Link href="/imdb/">artists</Link>
          </div>
        </nav>

        <section className={styles.artistHero}>
          <div className={styles.artistProfile}>
            <div className={styles.avatarLarge} style={{ backgroundImage: `url(${artist.avatar})` }} />
            <div>
              <p className={styles.eyebrow}>/artist/{artist.slug}</p>
              <h1>{artist.name}</h1>
              <p>@{artist.username}</p>
              <p>{artist.bio}</p>
            </div>
          </div>
          <aside className={styles.scoreboard}>
            <div className={styles.scoreHeader}>
              <span>{artist.highlightSource}</span>
              <strong>{averageScore ? averageScore.toFixed(1) : "--"}</strong>
            </div>
            <div
              className={styles.featuredThumbnail}
              style={{ backgroundImage: `url(${artist.highlightCover})` }}
              aria-hidden="true"
            />
            <h2>{artist.highlightTitle}</h2>
            <p>{artist.stories.length} story slotu · {scoredStories.length} puanlandı</p>
          </aside>
        </section>

        <section className={styles.section} id="stories">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>story grid</p>
            <h2>Thumbnail Rankleri</h2>
          </div>

          <div className={styles.storyGrid}>
            {artist.stories.map((story) => (
              <article className={styles.storyCard} key={story.slug}>
                <Thumbnail rank={story.rank} thumbnail={story.thumbnail} title={story.title} />
                <div className={styles.storyInfo}>
                  <span className={styles.rank}>#{story.rank}</span>
                  <span className={styles.score}>
                    {typeof story.score === "number" ? story.score.toFixed(1) : "--"}
                  </span>
                </div>
                <h3>{story.song ?? "Şarkı bekliyor"}</h3>
                <p className={styles.storyReview}>
                  {story.review ?? "Henüz değerlendirilmedi."}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function Thumbnail({ rank, thumbnail, title }: { rank: number; thumbnail?: string; title: string }) {
  if (thumbnail) {
    return <div className={styles.storyThumb} style={{ backgroundImage: `url(${thumbnail})` }} aria-label={title} />;
  }

  return (
    <div className={styles.storyThumb} aria-hidden="true">
      <span>{String(rank).padStart(2, "0")}</span>
    </div>
  );
}
