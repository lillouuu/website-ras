"use client";

import { useEffect } from "react";
import { animate } from "motion/react";
import { setActivePill } from "@/lib/dom";

/** Wires the category filter pills (.proj-filter) to the project cards (.project-card). */
export default function ProjectFilters() {
  useEffect(() => {
    const filters = Array.from(
      document.querySelectorAll<HTMLElement>(".proj-filter"),
    );
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".project-card"),
    );

    const handlers = filters.map((f) => {
      const onClick = () => {
        const val = f.getAttribute("data-filter") ?? "all";
        setActivePill(filters, f);
        cards.forEach((c) => {
          const cats = c.getAttribute("data-category") ?? "";
          const show = val === "all" || cats.includes(val);
          if (show) {
            c.classList.remove("hidden");
            animate(
              c,
              { opacity: [0, 1], y: [18, 0] },
              { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
            );
            return;
          }
          if (c.classList.contains("hidden")) return;
          const controls = animate(
            c,
            { opacity: [1, 0], y: [0, 10] },
            { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
          );
          controls.finished
            .then(() => {
              c.classList.add("hidden");
              c.style.opacity = "";
              c.style.transform = "";
            })
            .catch(() => undefined);
        });
      };
      f.addEventListener("click", onClick);
      return [f, onClick] as const;
    });

    return () =>
      handlers.forEach(([f, fn]) => f.removeEventListener("click", fn));
  }, []);

  return null;
}
