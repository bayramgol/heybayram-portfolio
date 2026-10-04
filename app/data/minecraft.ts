/**
 * Minecraft görselleri (public/minecraft/ altında).
 * - karakterler, bloklar, XP küresi, logo: heybayram-minecraft-web-pack
 * - araçlar (kazma, kılıç, balta, kürek, saat, meşale, ok): heybayram-minecraft-tools-pack
 * Yeni görsel eklemek için dosyayı public/minecraft/ içine koyup buraya bir satır eklemek yeter.
 */
export const mc = {
  // karakterler (3B render)
  creeper: "/minecraft/characters/creeper-384.webp",
  steve: "/minecraft/characters/steve-384.webp",
  enderman: "/minecraft/characters/enderman-384.webp",
  // araçlar (2B piksel ikonlar)
  pickaxe: "/minecraft/tools/diamond-pickaxe-128.webp",
  pickaxeSmall: "/minecraft/tools/diamond-pickaxe-64.webp",
  sword: "/minecraft/tools/diamond-sword-128.webp",
  axe: "/minecraft/tools/diamond-axe-128.webp",
  shovel: "/minecraft/tools/diamond-shovel-128.webp",
  torchSmall: "/minecraft/tools/torch-64.webp",
  clockSmall: "/minecraft/tools/clock-64.webp",
  arrowSmall: "/minecraft/tools/arrow-64.webp",
  // diğer
  xp: "/minecraft/mini/xp-orb-64.webp",
  craftingTable: "/minecraft/blocks/crafting-table-128.webp",
  bookshelf: "/minecraft/blocks/bookshelf-mini-96.webp",
  logo: "/minecraft/logo/bayram-block-128.webp",
} as const;

export type McName = keyof typeof mc;
