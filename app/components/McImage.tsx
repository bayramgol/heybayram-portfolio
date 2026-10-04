import { mc, type McName } from "../data/minecraft";

/** Süs amaçlı Minecraft görseli (ekran okuyuculardan gizli). */
export default function McImage({
  name,
  size,
  className,
  priority = false,
}: {
  name: McName;
  size: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    // Statik export kullanıldığı için next/image yerine düz <img>; dosyalar zaten küçük WebP.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={mc[name]}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      draggable={false}
    />
  );
}
