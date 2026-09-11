export type StoryRank = {
  rank: number;
  slug: string;
  title: string;
  highlight: string;
  date: string;
  thumbnail?: string;
  video?: string;
  score?: number;
  song?: string;
  review?: string;
};

export type Artist = {
  name: string;
  slug: string;
  username: string;
  bio: string;
  avatar: string;
  highlightTitle: string;
  highlightSource: string;
  highlightCover: string;
  stories: StoryRank[];
};

const highlightDate = "2026-09-11";

const stories: StoryRank[] = Array.from({ length: 39 }, (_, index) => {
  const rank = index + 1;
  const paddedRank = String(rank).padStart(2, "0");

  return {
    rank,
    slug: `story-${paddedRank}`,
    title: `Story ${paddedRank}`,
    highlight: "8. Instagram highlight · 🎼🎤🎶🎵🎸",
    date: highlightDate,
    thumbnail: `/imdb-thumbnails/highlight-08-${paddedRank}.png`,
  };
});

export const artists: Artist[] = [
  {
    name: "Esra Bostancı",
    slug: "esra-bostanci",
    username: "psk.dan.esrabostanci",
    bio: "8. highlight müzik story arşivi.",
    avatar: "/imdb-thumbnails/esra-bostanci-avatar.jpg",
    highlightTitle: "🎼🎤🎶🎵🎸",
    highlightSource: "8. Instagram highlight",
    highlightCover: "/imdb-thumbnails/music-highlight-cover.png",
    stories,
  },
];

export function getArtist(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}
