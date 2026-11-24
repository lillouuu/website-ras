export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export const workMenu: NavLink[] = [
  { label: "Domains & Teams", href: "/domains-teams" },
  { label: "Projects Portfolio", href: "/projects" },
];

export const secondaryNav: NavLink[] = [
  { label: "Events", href: "/events" },
  { label: "Impact", href: "/impact" },
  { label: "Partners", href: "/partners" },
  { label: "Members", href: "/members" },
  { label: "Contact", href: "/contact" },
];

export const mobileNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work — Domains & Teams", href: "/domains-teams" },
  { label: "Our Work — Projects", href: "/projects" },
  { label: "Events", href: "/events" },
  { label: "Impact", href: "/impact" },
  { label: "Partners", href: "/partners" },
  { label: "Members Hub", href: "/members" },
  { label: "Contact", href: "/contact" },
];

export const cta = {
  partner: { label: "Partner With Us", href: "/partners#partner-form" },
  join: { label: "Join Us", href: "/join-us" },
};
