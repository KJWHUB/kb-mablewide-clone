export type CardTypes = "up" | "down" | "no-change";
export const CARD_TYPES: Record<string, CardTypes> = {
  UP: "up",
  DOWN: "down",
  NO_CHANGE: "no-change",
};
export const CARD_TYPE_COLORS: Record<CardTypes, string> = {
  up: getCSSVariable("--up"),
  down: getCSSVariable("--down"),
  "no-change": getCSSVariable("--zero"),
};
