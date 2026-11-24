"use client";

import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { engage } from "@/lib/motion/engage";

export default function MotionEnhancer({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
  }, []);

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    let frame = 0;
    let cancelled = false;

    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        if (cancelled) return;
        engage(pathname, cleanups);
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </MotionConfig>
  );
}
