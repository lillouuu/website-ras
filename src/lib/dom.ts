export const ACTIVE_CLASSES = ["bg-light-primary", "text-light-on-primary"];
export const INACTIVE_CLASSES = [
  "border",
  "border-light-outline-variant",
  "bg-light-surface-container-lowest",
  "text-light-on-surface-variant",
];

/** Highlights the active filter pill and dims the others (matches the design's pill styling). */
export function setActivePill(all: Element[], active: Element) {
  all.forEach((el) => {
    el.classList.remove(...ACTIVE_CLASSES);
    el.classList.add(...INACTIVE_CLASSES);
  });
  active.classList.add(...ACTIVE_CLASSES);
  active.classList.remove(...INACTIVE_CLASSES);
}
