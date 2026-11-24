import { animate, inView, scroll } from "motion/react";

type Cleanup = () => void;

const EASE = [0.16, 1, 0.3, 1] as const;

const MASKS: Record<string, [string, string]> = {
  left: ["inset(0 100% 0 0)", "inset(0 0 0 0)"],
  right: ["inset(0 0 0 100%)", "inset(0 0 0 0)"],
  up: ["inset(100% 0 0 0)", "inset(0 0 0 0)"],
  down: ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
  center: ["inset(16% 16% 16% 16%)", "inset(0 0 0 0)"],
};

const MASK_CYCLE = ["left", "right", "up", "down"] as const;

function reduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function mobile() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function finePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function seen(el: HTMLElement) {
  return el.hasAttribute("data-motion");
}

function claim(el: HTMLElement, touched: HTMLElement[]) {
  el.setAttribute("data-motion", "");
  touched.push(el);
}

function visibleEnough(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const height = window.innerHeight || 1;
  return rect.top < height * 0.94 && rect.bottom > height * 0.02;
}

function settle(el: HTMLElement) {
  el.style.opacity = "";
  el.style.transform = "";
  el.style.clipPath = "";
  el.classList.add("is-settled");
}

function play(
  el: HTMLElement,
  keyframes: Record<string, Array<number | string>>,
  options: { duration: number; delay?: number },
  cleanups: Cleanup[],
  touched: HTMLElement[],
) {
  if (seen(el) || reduced()) return;
  claim(el, touched);

  const first = keyframes;
  if (Array.isArray(first.opacity)) el.style.opacity = String(first.opacity[0]);
  if (Array.isArray(first.clipPath)) el.style.clipPath = String(first.clipPath[0]);
  const transforms: string[] = [];
  if (Array.isArray(first.x)) transforms.push(`translateX(${first.x[0]}px)`);
  if (Array.isArray(first.y)) transforms.push(`translateY(${first.y[0]}px)`);
  if (Array.isArray(first.scale)) transforms.push(`scale(${first.scale[0]})`);
  if (transforms.length) el.style.transform = transforms.join(" ");

  const run = () => {
    const controls = animate(el, keyframes, {
      duration: mobile() ? Math.min(options.duration, 0.62) : options.duration,
      delay: options.delay ?? 0,
      ease: EASE,
    });
    cleanups.push(() => controls.stop());
    controls.finished.then(() => settle(el)).catch(() => undefined);
  };

  if (visibleEnough(el)) {
    run();
    return;
  }

  let played = false;
  const stop = inView(
    el,
    () => {
      if (played) return;
      played = true;
      run();
    },
    { amount: 0.18, margin: "0px 0px -6% 0px" },
  );
  cleanups.push(stop);
}

function splitWords(el: HTMLElement) {
  if (el.querySelector(":scope > .kinetic-word")) return;
  const fragment = document.createDocumentFragment();
  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const parts = (node.textContent ?? "").split(/(\s+)/);
      parts.forEach((part) => {
        if (!part) return;
        if (!part.trim()) {
          fragment.appendChild(document.createTextNode(part));
          return;
        }
        const word = document.createElement("span");
        word.className = "kinetic-word";
        word.textContent = part;
        fragment.appendChild(word);
      });
      return;
    }
    fragment.appendChild(node.cloneNode(true));
  });
  el.replaceChildren(fragment);
}

function bindKinetic(el: HTMLElement, cleanups: Cleanup[], touched: HTMLElement[]) {
  if (seen(el) || reduced()) return;
  const words = (el.textContent ?? "").trim().split(/\s+/).filter(Boolean);
  const travel = mobile() ? 12 : 20;
  if (words.length > 12) {
    play(
      el,
      {
        opacity: [0, 1],
        y: [travel, 0],
        clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
      },
      { duration: 0.8 },
      cleanups,
      touched,
    );
    return;
  }

  const start = () => {
    if (seen(el)) return;
    claim(el, touched);
    splitWords(el);
    el.querySelectorAll<HTMLElement>(".kinetic-word").forEach((word, index) => {
      word.style.opacity = "0";
      word.style.transform = `translateY(${travel}px)`;
      const controls = animate(
        word,
        { opacity: [0, 1], y: [travel, 0] },
        {
          duration: mobile() ? 0.5 : 0.7,
          delay: 0.08 + index * (mobile() ? 0.028 : 0.042),
          ease: EASE,
        },
      );
      cleanups.push(() => controls.stop());
      controls.finished.then(() => settle(word)).catch(() => undefined);
    });
  };

  if (visibleEnough(el)) {
    start();
    return;
  }

  let played = false;
  const stop = inView(
    el,
    () => {
      if (played) return;
      played = true;
      start();
    },
    { amount: 0.5 },
  );
  cleanups.push(stop);
}

function maskFor(el: HTMLElement, index: number) {
  const named = el.dataset.mask;
  if (named && MASKS[named]) return MASKS[named];
  return MASKS[MASK_CYCLE[index % MASK_CYCLE.length]];
}

function bindImage(
  el: HTMLElement,
  index: number,
  cleanups: Cleanup[],
  touched: HTMLElement[],
) {
  const [from, to] = maskFor(el, index);
  const scaleFrom = mobile() ? 1.03 : el.dataset.mask === "center" ? 1.08 : 1.06;
  play(
    el,
    {
      clipPath: [from, to],
      scale: [scaleFrom, 1],
    },
    { duration: el.dataset.mask === "center" ? 1.05 : 0.9, delay: mobile() ? 0 : 0.04 },
    cleanups,
    touched,
  );
}

function articleFrames(pathname: string, index: number) {
  const y = mobile() ? 14 : 24;
  if (pathname.startsWith("/about")) {
    return { opacity: [0, 1], y: [mobile() ? 10 : 16, 0], scale: [0.985, 1] };
  }
  if (pathname.startsWith("/events")) {
    const x = index % 2 === 0 ? -18 : 18;
    return { opacity: [0, 1], x: [mobile() ? x / 2 : x, 0], y: [8, 0] };
  }
  if (pathname.startsWith("/projects")) {
    return { opacity: [1, 1], y: [y, 0] };
  }
  if (pathname.startsWith("/partners")) {
    return { opacity: [0, 1], y: [12, 0] };
  }
  return { opacity: [0, 1], y: [index % 2 === 0 ? y : y - 6, 0] };
}

function bindStagger(
  root: HTMLElement,
  cleanups: Cleanup[],
  touched: HTMLElement[],
) {
  const kind = root.dataset.stagger || "rise";
  const kids = Array.from(root.children).filter(
    (node): node is HTMLElement => node instanceof HTMLElement,
  );
  kids.forEach((kid, index) => {
    if (kid.hasAttribute("data-motion-ignore")) return;
    const delay = Math.min(index, 7) * (mobile() ? 0.045 : 0.07);
    if (kid.tagName === "TR") {
      play(kid, { opacity: [0, 1] }, { duration: 0.45, delay }, cleanups, touched);
      if (root.hasAttribute("data-log")) {
        const stop = inView(kid, () => kid.classList.add("is-lit"), { amount: 0.55 });
        cleanups.push(stop);
      }
      return;
    }
    if (kind === "rows") {
      play(
        kid,
        { opacity: [0, 1], y: [mobile() ? 8 : 14, 0] },
        { duration: 0.5, delay },
        cleanups,
        touched,
      );
      return;
    }
    if (kind === "steps") {
      play(
        kid,
        { opacity: [0, 1], x: [mobile() ? -10 : -16, 0] },
        { duration: 0.5, delay },
        cleanups,
        touched,
      );
      return;
    }
    if (kind === "meta") {
      play(
        kid,
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.48, delay },
        cleanups,
        touched,
      );
      return;
    }
    const distance = kind === "signature" ? (mobile() ? 16 : 32) : mobile() ? 14 : 22;
    play(
      kid,
      { opacity: [0, 1], y: [distance, 0] },
      { duration: kind === "signature" ? 0.72 : 0.58, delay },
      cleanups,
      touched,
    );
  });
}

function bindTimeline(root: HTMLElement, cleanups: Cleanup[], touched: HTMLElement[]) {
  if (root.querySelector(":scope > .motion-rail")) return;
  const rail = document.createElement("span");
  rail.className = "motion-rail";
  rail.setAttribute("aria-hidden", "true");
  rail.setAttribute("data-motion-ignore", "");
  const fill = document.createElement("span");
  fill.className = "motion-rail-fill";
  rail.appendChild(fill);
  root.prepend(rail);

  const vertical = mobile();
  if (vertical) rail.classList.add("is-vertical");
  if (!reduced()) {
    const stop = scroll(
      animate(fill, vertical ? { scaleY: [0, 1] } : { scaleX: [0, 1] }),
      { target: root, offset: ["start 80%", "end 55%"] },
    );
    cleanups.push(() => stop());
  }

  Array.from(root.children).forEach((node, index) => {
    if (!(node instanceof HTMLElement) || node === rail) return;
    play(
      node,
      { opacity: [0, 1], y: [mobile() ? 12 : 20, 0] },
      { duration: 0.6, delay: index * 0.06 },
      cleanups,
      touched,
    );
    const stop = inView(
      node,
      () => node.classList.add("is-lit"),
      { amount: 0.45 },
    );
    cleanups.push(stop);
  });
}

function bindParallax(el: HTMLElement, cleanups: Cleanup[]) {
  if (reduced()) return;
  const speed = Number(el.dataset.parallax) || 16;
  const distance = mobile() ? Math.min(speed, 10) * 0.35 : speed;
  if (distance < 2) return;
  const stop = scroll(animate(el, { y: [distance, -distance] }), {
    target: el,
    offset: ["start end", "end start"],
  });
  cleanups.push(() => stop());
}

function bindTilt(el: HTMLElement, cleanups: Cleanup[]) {
  if (reduced() || !finePointer()) return;
  el.style.transformStyle = "preserve-3d";
  const onMove = (event: PointerEvent) => {
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    animate(el, { rotateX: -y * 4.5, rotateY: x * 6, y: -2 }, { duration: 0.22, ease: "easeOut" });
  };
  const onLeave = () => {
    animate(el, { rotateX: 0, rotateY: 0, y: 0 }, { duration: 0.45, ease: EASE });
  };
  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerleave", onLeave);
  cleanups.push(() => {
    el.removeEventListener("pointermove", onMove);
    el.removeEventListener("pointerleave", onLeave);
  });
}

function bindExpand(cleanups: Cleanup[]) {
  document.querySelectorAll<HTMLButtonElement>("[data-expand]").forEach((button) => {
    const panel = button.nextElementSibling;
    if (!(panel instanceof HTMLElement) || !panel.hasAttribute("data-expand-panel")) return;
    if (button.hasAttribute("data-expand-ready")) return;
    button.setAttribute("data-expand-ready", "");
    panel.style.overflow = "hidden";

    const onClick = () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", open ? "false" : "true");
      if (open) {
        const controls = animate(
          panel,
          { height: [panel.scrollHeight, 0], opacity: [1, 0] },
          { duration: 0.28, ease: EASE },
        );
        controls.finished
          .then(() => {
            panel.hidden = true;
            panel.style.height = "";
            panel.style.opacity = "";
          })
          .catch(() => undefined);
        return;
      }
      panel.hidden = false;
      panel.style.height = "0px";
      const target = panel.scrollHeight;
      const controls = animate(
        panel,
        { height: [0, target], opacity: [0, 1] },
        { duration: 0.38, ease: EASE },
      );
      controls.finished
        .then(() => {
          panel.style.height = "auto";
          panel.style.opacity = "";
        })
        .catch(() => undefined);
    };
    button.addEventListener("click", onClick);
    cleanups.push(() => {
      button.removeEventListener("click", onClick);
      button.removeAttribute("data-expand-ready");
    });
  });
}

function bindCounters(cleanups: Cleanup[]) {
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((counter) => {
    const target = Number(counter.dataset.count);
    if (!Number.isFinite(target)) return;
    const suffix = counter.dataset.countSuffix ?? "";
    const stop = inView(
      counter,
      () => {
        if (counter.dataset.counted === "true") return;
        counter.dataset.counted = "true";
        if (reduced()) {
          counter.textContent = `${Math.round(target).toLocaleString()}${suffix}`;
          return;
        }
        const controls = animate(0, target, {
          duration: 1.35,
          ease: EASE,
          onUpdate(value) {
            counter.textContent = `${Math.round(value).toLocaleString()}${suffix}`;
          },
        });
        cleanups.push(() => controls.stop());
      },
      { amount: 0.7 },
    );
    cleanups.push(stop);
  });
}

function headingClip(index: number): [string, string] {
  const variants: Array<[string, string]> = [
    ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
    ["inset(100% 0 0 0)", "inset(0 0 0 0)"],
    ["inset(0 12% 0 12%)", "inset(0 0 0 0)"],
  ];
  return variants[index % variants.length];
}

export function engage(pathname: string, cleanups: Cleanup[]) {
  const touched: HTMLElement[] = [];
  const main = document.querySelector("main");
  cleanups.push(() => {
    touched.forEach((el) => {
      el.style.opacity = "";
      el.style.transform = "";
      el.style.clipPath = "";
      el.removeAttribute("data-motion");
    });
  });

  if (main && !reduced()) {
    const controls = animate(main, { opacity: [0.94, 1] }, { duration: 0.35, ease: EASE });
    cleanups.push(() => controls.stop());
  }

  if (reduced()) {
    const progress = document.getElementById("motion-progress");
    if (progress) progress.style.display = "none";
    bindExpand(cleanups);
    bindCounters(cleanups);
    return;
  }

  document.querySelectorAll<HTMLElement>("main h1, [data-kinetic]").forEach((heading) => {
    bindKinetic(heading, cleanups, touched);
  });

  document.querySelectorAll<HTMLElement>("main h2").forEach((heading, index) => {
    if (heading.hasAttribute("data-kinetic") || seen(heading)) return;
    if (heading.closest("form")) return;
    const inCard = heading.closest("article");
    if (inCard && !pathname.startsWith("/projects")) return;
    const [from, to] = headingClip(index + (pathname.startsWith("/projects") ? 1 : 0));
    play(
      heading,
      { opacity: [0, 1], y: [mobile() ? 10 : 16, 0], clipPath: [from, to] },
      { duration: pathname.startsWith("/projects") ? 0.72 : 0.64, delay: inCard ? 0.08 : 0 },
      cleanups,
      touched,
    );
  });

  const hero = document.querySelector("main h1");
  if (hero instanceof HTMLElement) {
    const kicker = hero.previousElementSibling;
    if (kicker instanceof HTMLElement) {
      play(kicker, { opacity: [0, 1], y: [8, 0] }, { duration: 0.45 }, cleanups, touched);
    }
    const lede = hero.nextElementSibling;
    if (lede instanceof HTMLElement && lede.tagName === "P") {
      play(
        lede,
        { opacity: [0, 1], y: [12, 0] },
        { duration: 0.55, delay: 0.18 },
        cleanups,
        touched,
      );
      const actions = lede.nextElementSibling;
      if (
        actions instanceof HTMLElement &&
        actions.querySelector("a, button") &&
        !actions.hasAttribute("data-stagger")
      ) {
        play(
          actions,
          { opacity: [0, 1], y: [12, 0] },
          { duration: 0.5, delay: 0.28 },
          cleanups,
          touched,
        );
      }
    }
  }

  document.querySelectorAll<HTMLElement>('main [role="img"]').forEach((image, index) => {
    bindImage(image, index, cleanups, touched);
  });

  document.querySelectorAll<HTMLElement>("main article").forEach((article, index) => {
    play(article, articleFrames(pathname, index), { duration: 0.62, delay: (index % 4) * 0.05 }, cleanups, touched);
    if (!pathname.startsWith("/projects")) return;
    article.querySelectorAll<HTMLElement>("p").forEach((spec, specIndex) => {
      if (!spec.querySelector("strong")) return;
      play(
        spec,
        { opacity: [0, 1], y: [8, 0] },
        { duration: 0.45, delay: 0.12 + specIndex * 0.06 },
        cleanups,
        touched,
      );
    });
  });

  document.querySelectorAll<HTMLElement>("[data-rise]").forEach((el, index) => {
    play(
      el,
      { opacity: [0, 1], y: [mobile() ? 12 : 18, 0] },
      { duration: 0.58, delay: (index % 4) * 0.05 },
      cleanups,
      touched,
    );
  });

  document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
    bindStagger(group, cleanups, touched);
  });

  document.querySelectorAll<HTMLElement>("[data-timeline]").forEach((group) => {
    bindTimeline(group, cleanups, touched);
  });

  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    bindParallax(el, cleanups);
  });

  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
    bindTilt(el, cleanups);
  });

  document.querySelectorAll<HTMLElement>("form").forEach((form) => {
    const fields = Array.from(form.children).filter(
      (node): node is HTMLElement => node instanceof HTMLElement,
    );
    fields.forEach((field, index) => {
      play(
        field,
        { opacity: [0, 1] },
        { duration: 0.4, delay: Math.min(index, 6) * 0.04 },
        cleanups,
        touched,
      );
    });
  });

  bindExpand(cleanups);
  bindCounters(cleanups);

  const progress = document.getElementById("motion-progress");
  if (progress) {
    progress.style.display = "";
    const stop = scroll(animate(progress, { scaleX: [0, 1] }), {
      offset: ["start start", "end end"],
    });
    cleanups.push(() => stop());
  }
}
