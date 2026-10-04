/**
 * Piksel ikonlar (Minecraft esintili, kendi çizimim): her sprite bir karakter ızgarasıdır.
 * '.' saydam, 'c' currentColor, diğer harfler `palette` renkleridir.
 * Yeni ikon eklemek için `sprites` içine aynı biçimde bir ızgara eklemek yeter.
 */
export const palette = {
  B: "#4a7be0",
  F: "#f29d1a",
  J: "#8a6234",
  K: "#55c27a",
  L: "#55649f",
  M: "#7f8ed0",
  T: "#e04a4a",
  f: "#ffcf3a",
  j: "#b78a50",
  w: "#ffffff",
  y: "#e5b83a",
} as const;

export const sprites = {
  sun: [
    "....f....",
    ".f..f..f.",
    "..fFFFf..",
    "..FffwF..",
    "ffFfffFff",
    "..FfffF..",
    "..fFFFf..",
    ".f..f..f.",
    "....f....",
  ],
  moon: [
    "..MMMM..",
    ".MML....",
    "MML.....",
    "MML.....",
    "MML.....",
    "MMML....",
    ".MMMLLL.",
    "..LLLL..",
  ],
  menu: [
    "cccccccc",
    "........",
    "cccccccc",
    "........",
    "cccccccc",
  ],
  close: [
    "c.....c",
    ".c...c.",
    "..c.c..",
    "...c...",
    "..c.c..",
    ".c...c.",
    "c.....c",
  ],
  palette: [
    "..jjjj..",
    ".jJTJBJj",
    "jJJJJJJj",
    "jyJJJJJj",
    "jJJJJKJj",
    ".jJJJJjj",
    "..jjjj..",
  ],
} as const;

export type SpriteName = keyof typeof sprites;
