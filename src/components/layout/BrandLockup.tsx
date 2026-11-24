import Link from "next/link";

export default function BrandLockup() {
  return (
    <Link
      href="/"
      className="flex items-center gap-gutter-md shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
      aria-label="IEEE RAS INSAT Home"
    >
      <div className="flex items-center gap-2.5">
        <svg
          width="46"
          height="34"
          viewBox="0 0 64 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8 31C3 20 14 7 32 4C48 1 60 8 59 19C58 28 47 35 35 37"
            stroke="#772583"
            strokeWidth="3.2"
            strokeLinecap="round"
          ></path>
          <path
            d="M16 36L21 15H31C36 15 38 18 37 22C36 25 33 27 29 27L34 36H28L24 27H22L20 36H16ZM23 23H29C31 23 32 22 32.5 20.5C33 19 32 18 30 18H24.5L23 23Z"
            fill="#861F41"
          ></path>
          <path
            d="M36 36L45 15H50L54 36H49L48 31H41L39 36H36ZM42.5 27H47.5L46.5 20L42.5 27Z"
            fill="#772583"
          ></path>
        </svg>
        <div className="flex flex-col leading-none">
          <span className="font-body text-body-sm font-bold text-ras-crimson tracking-tight">
            IEEE RAS
          </span>
          <span className="font-mono text-label-sm text-light-primary uppercase">
            INSAT CHAPTER
          </span>
        </div>
      </div>
      <span
        className="h-7 w-px bg-light-outline-variant hidden sm:inline-block"
        aria-hidden="true"
      ></span>

      <div className="hidden sm:flex items-center gap-1.5">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 2L20 12L12 22L4 12L12 2Z"
            stroke="#00629B"
            strokeWidth="2"
          ></path>
          <path d="M12 6V18M8 12H16" stroke="#00629B" strokeWidth="1.8"></path>
        </svg>
        <span className="font-headline text-label-lg font-bold text-ieee-blue tracking-tight">
          IEEE
        </span>
      </div>
    </Link>
  );
}
