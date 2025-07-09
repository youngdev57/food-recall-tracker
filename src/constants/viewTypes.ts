export const VIEW_TYPES = {
  LIST: "list",
  GALLERY: "gallery",
} as const;

export type ViewType = (typeof VIEW_TYPES)[keyof typeof VIEW_TYPES];
