import { ch } from "./ch";
import { en } from "./en";
import { fr } from "./fr";
import { it } from "./it";
import type { Copy, Lang } from "./types";

export { LANGS, LOCALES, n, type Copy, type Lang } from "./types";
export const COPY: Record<Lang, Copy> = { fr, ch, en, it };
