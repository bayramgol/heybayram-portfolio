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

type StoryDetail = { score?: number; song?: string; review?: string };

const storyDetails: Record<number, StoryDetail> = {
  1: { score: 9, song: "Aşkın Nur Yengi - Susma", review: "Sondaki alkış sesine katıldım ^^" },
  2: { score: 9.5, song: "Ezginin Günlüğü - Aşk Bitti", review: "Aşk hiç biter mi? Hiçbir şey olmamış gibi boşlukta" },
  3: { score: 8.5, song: "Sıla - Oluruna Bırak", review: "Bu birazcık kısa olmuş devamını dinlemek isterdim ^^" },
  4: { score: 8.5, song: "Sıla - Oluruna Bırak", review: "Bu birazcık kısa olmuş devamını dinlemek isterdim ^^" },
  5: { score: 11, song: "Boş Liman - Boş Liman", review: "Şarkı ve Sesinin Uyumuna bayıldım" },
  6: { score: 10, song: "Sibel Bilgiç - Alışamadım", review: "7/24 dinleyebilirim sanırım" },
  7: { score: 9, song: "Bal Gibi", review: "Sesinde bir ilkbahar kararsızlığı var" },
  8: { score: 9, song: "İntihaşk", review: "Ses rengini kıskandı yıldızlar" },
  9: { score: 8, song: "Hırka" },
  10: { score: 8, song: "Hırka" },
  11: { score: 8.5, song: "Aşktan Ötesi", review: "Ses tam sana ait değil diyordum feat geldi" },
  12: { score: 8.5, song: "Aşktan Ötesi", review: "Ses tam sana ait değil diyordum feat geldi" },
  13: { score: 9, song: "Bu Böyle", review: "Klasik ama her daim hoş" },
  14: { score: 9, song: "Bu Böyle", review: "Klasik ama her daim hoş" },
  15: { score: 8, song: "Yokluğunda", review: "Kaplumbağa Terbiyesici tablosu, çok severim" },
  16: { score: 8, song: "Yokluğunda", review: "Kısa ömürlü ama gönül fetheden o grup" },
  17: { score: 8.5, song: "Çeyrek Gönül", review: "İlk dinleyişim ama sesinle tanıdık geldi ^^" },
  18: { score: 9, song: "Korkak", review: "Başım omuzlarına ağır gelmiş ya Bırak" },
  19: { score: 8, song: "Kaptan", review: "Bi' sigara yaktım bütün şehir yansın diye ... Yandı" },
  20: { score: 8, song: "Kaptan", review: "Yandım, söndüm kendi kendime" },
  21: { score: 8.5, song: "Mahşer", review: "Yakında kalbimden de silerim ismini" },
  22: { score: 9, song: "Kalpsiz Bir Serseri" },
};

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
    ...storyDetails[rank],
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
