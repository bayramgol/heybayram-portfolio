import { palette, sprites, type SpriteName } from "../data/pixel";

type Rect = { x: number; y: number; w: number; fill: string };

type Prepared = {
  rects: Rect[];
  minX: number;
  minY: number;
  width: number;
  height: number;
};

const cache = new Map<SpriteName, Prepared>();

/** Izgarayı boş kenarlardan kırpar ve aynı renkli yatay dizileri tek dikdörtgene birleştirir. */
function prepare(name: SpriteName): Prepared {
  const hit = cache.get(name);
  if (hit) return hit;

  const grid: readonly string[] = sprites[name];
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -1;
  let maxY = -1;
  grid.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (ch === ".") return;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    });
  });

  const rects: Rect[] = [];
  grid.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === ".") {
        x += 1;
        continue;
      }
      let end = x;
      while (end + 1 < row.length && row[end + 1] === ch) end += 1;
      rects.push({
        x,
        y,
        w: end - x + 1,
        fill: ch === "c" ? "currentColor" : palette[ch as keyof typeof palette],
      });
      x = end + 1;
    }
  });

  const prepared = { rects, minX, minY, width: maxX - minX + 1, height: maxY - minY + 1 };
  cache.set(name, prepared);
  return prepared;
}

/**
 * Süs amaçlı piksel ikon (ekran okuyuculardan gizli). `scale`, bir ızgara hücresinin
 * piksel boyudur; tam sayı verilirse kenarlar keskin kalır.
 */
export default function PixelIcon({
  name,
  scale = 2,
  className,
}: {
  name: SpriteName;
  scale?: number;
  className?: string;
}) {
  const { rects, minX, minY, width, height } = prepare(name);

  return (
    <svg
      className={className}
      viewBox={`${minX} ${minY} ${width} ${height}`}
      width={width * scale}
      height={height * scale}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      {rects.map((rect) => (
        <rect key={`${rect.x}-${rect.y}`} x={rect.x} y={rect.y} width={rect.w} height={1} fill={rect.fill} />
      ))}
    </svg>
  );
}
