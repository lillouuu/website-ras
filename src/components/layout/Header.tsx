"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BrandLockup from "./BrandLockup";
import { cta, mobileNav, primaryNav, secondaryNav, workMenu } from "@/data/nav";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue";

export default function Header() {
  const pathname = usePathname();
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const workRef = useRef<HTMLDivElement>(null);
  const mobileBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close menus on navigation
  useEffect(() => {
    setWorkOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Escape + outside click
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setWorkOpen(false);
      if (mobileOpen) {
        setMobileOpen(false);
        mobileBtnRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (workRef.current && !workRef.current.contains(t)) setWorkOpen(false);
      if (
        drawerRef.current &&
        mobileBtnRef.current &&
        !drawerRef.current.contains(t) &&
        !mobileBtnRef.current.contains(t)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const desktopLink = (href: string, label: string) => {
    const active = isActive(href);
    return (
      <Link
        key={href}
        href={href}
        aria-current={active ? "page" : undefined}
        className={`nav-link font-label text-label-lg py-1 ${focus} ${
          active
            ? "is-active text-ieee-blue"
            : "text-light-on-surface-variant hover:text-light-primary transition-colors duration-state-change"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 bg-light-surface-container-lowest border-b border-light-outline-variant">
      <div className="h-1 w-full bg-ieee-blue" aria-hidden="true" />
      <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin h-20 flex items-center justify-between gap-gutter-md">
        <BrandLockup />

        {/* Desktop navigation */}
        <nav
          className="hidden lg:flex items-center gap-gutter-lg"
          aria-label="Primary Navigation"
        >
          {primaryNav.map((l) => desktopLink(l.href, l.label))}

          <div ref={workRef} className="relative group">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setWorkOpen((v) => !v);
              }}
              className={`inline-flex items-center gap-1 font-label text-label-lg text-light-on-surface-variant hover:text-light-primary ${focus} transition-colors duration-state-change py-1`}
              aria-haspopup="true"
              aria-expanded={workOpen}
              aria-controls="work-dropdown-menu"
            >
              <span>Our Work</span>
              <span
                className="material-symbols-outlined text-body-md transition-transform duration-state-change"
                style={{ transform: workOpen ? "rotate(180deg)" : undefined }}
                aria-hidden="true"
              >
                expand_more
              </span>
            </button>
            <div
              id="work-dropdown-menu"
              className={`motion-menu absolute left-0 top-full pt-2 w-56 z-50 ${
                workOpen ? "is-open" : ""
              }`}
            >
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-xs flex flex-col">
                {workMenu.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`px-gutter-md py-gutter-sm rounded-xs font-label text-label-lg text-light-on-surface hover:bg-light-surface-container-low hover:text-ieee-blue ${focus}`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {secondaryNav.map((l) => desktopLink(l.href, l.label))}
        </nav>

        {/* Dual conversion CTAs */}
        <div className="hidden md:flex items-center gap-gutter-sm shrink-0">
          <Link
            href={cta.partner.href}
            className={`inline-flex items-center justify-center px-gutter-md py-2.5 rounded-sm border border-light-primary bg-light-surface-container-lowest text-light-primary font-label text-label-lg hover:bg-light-surface-container-low ${focus} transition-colors duration-state-change`}
          >
            <span>{cta.partner.label}</span>
          </Link>
          <Link
            href={cta.join.href}
            className={`inline-flex items-center justify-center px-gutter-md py-2.5 rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-ieee-blue ${focus} transition-colors duration-state-change`}
          >
            <span>{cta.join.label}</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          ref={mobileBtnRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setMobileOpen((v) => !v);
          }}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
          className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm border border-light-outline-variant text-light-primary hover:bg-light-surface-container-low ${focus}`}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        inert={mobileOpen ? undefined : true}
        aria-hidden={mobileOpen ? undefined : true}
        className={`motion-drawer lg:hidden bg-light-surface-container-lowest ${
          mobileOpen ? "is-open border-t border-light-outline-variant" : ""
        }`}
      >
        <nav
          className="flex flex-col gap-gutter-sm px-gutter-md py-gutter-lg"
          aria-label="Mobile Navigation"
        >
          {mobileNav.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`py-2 font-label text-label-lg ${
                  active
                    ? "text-ieee-blue"
                    : "text-light-on-surface hover:text-ieee-blue"
                } ${focus}`}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="pt-gutter-md flex flex-col gap-gutter-sm border-t border-light-outline-variant">
            <Link
              href={cta.join.href}
              className={`w-full text-center py-2.5 rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-ieee-blue ${focus}`}
            >
              {cta.join.label}
            </Link>
            <Link
              href={cta.partner.href}
              className={`w-full text-center py-2.5 rounded-sm border border-light-primary text-light-primary font-label text-label-lg hover:bg-light-surface-container-low ${focus}`}
            >
              {cta.partner.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
