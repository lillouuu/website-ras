"use client";

import { useEffect } from "react";
import { domains } from "@/data/domains";
import { animate } from "motion/react";

const ON = ["border-ieee-blue", "text-light-primary"];
const OFF = ["border-light-outline-variant", "text-light-on-surface-variant"];

/** Wires the domain tabs (.domain-tab) to the detail panel (#domain-tag/title/desc/stack). */
export default function DomainExplorer() {
  useEffect(() => {
    const tabs = Array.from(
      document.querySelectorAll<HTMLElement>(".domain-tab"),
    );

    const handlers = tabs.map((tab) => {
      const onClick = () => {
        const item = domains[tab.getAttribute("data-domain") ?? ""];
        if (!item) return;
        tabs.forEach((t) => {
          t.classList.remove(...ON);
          t.classList.add(...OFF);
        });
        tab.classList.add(...ON);
        tab.classList.remove(...OFF);
        const set = (id: string, text: string) => {
          const el = document.getElementById(id);
          if (el) el.textContent = text;
        };
        set("domain-tag", item.tag);
        set("domain-title", item.title);
        set("domain-desc", item.desc);
        set("domain-stack", item.stack);
        const panel = document.getElementById("domain-detail-panel");
        if (panel) {
          panel.classList.remove("is-switching");
          void panel.offsetWidth;
          panel.classList.add("is-switching");
          animate(
            panel,
            { opacity: [0.45, 1], y: [8, 0] },
            { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
          );
        }
      };
      tab.addEventListener("click", onClick);
      return [tab, onClick] as const;
    });

    return () =>
      handlers.forEach(([t, fn]) => t.removeEventListener("click", fn));
  }, []);

  return null;
}
