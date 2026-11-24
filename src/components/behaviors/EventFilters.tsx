"use client";

import { useEffect } from "react";
import { animate } from "motion/react";
import { setActivePill } from "@/lib/dom";

/** Wires the event-type pills (.ev-filter) to the event rows (.ev-card). */
export default function EventFilters() {
  useEffect(() => {
    const filters = Array.from(
      document.querySelectorAll<HTMLElement>(".ev-filter"),
    );
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".ev-card"),
    );

    const handlers = filters.map((f) => {
      const onClick = () => {
        const val = f.getAttribute("data-ev") ?? "all";
        setActivePill(filters, f);
        cards.forEach((c) => {
          const type = c.getAttribute("data-ev-type");
          const show = val === "all" || type === val;
          if (show) {
            c.classList.remove("hidden");
            animate(
              c,
              { opacity: [0, 1], x: [-14, 0] },
              { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
            );
            return;
          }
          if (c.classList.contains("hidden")) return;
          const controls = animate(
            c,
            { opacity: [1, 0], y: [0, 8] },
            { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
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
