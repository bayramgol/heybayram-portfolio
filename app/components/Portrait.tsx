import { site } from "../data/site";

/** Portre görseli. Gerçek fotoğraf için `site.portrait` yolunu değiştirmek yeter. */
export default function Portrait({ alt }: { alt: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="portrait-img" src={site.portrait} alt={alt} width={512} height={640} decoding="async" />;
}
