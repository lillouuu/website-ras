import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ieee-navy text-light-on-primary border-t border-ieee-blue">
      <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm grid grid-cols-1 md:grid-cols-12 gap-gutter-xl">
        <div className="md:col-span-5 flex flex-col gap-gutter-md">
          <div className="flex items-center gap-gutter-md">
            <div className="flex items-center gap-2.5">
              <svg
                width="42"
                height="32"
                viewBox="0 0 64 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8 31C3 20 14 7 32 4C48 1 60 8 59 19C58 28 47 35 35 37"
                  stroke="#FFFFFF"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M16 36L21 15H31C36 15 38 18 37 22C36 25 33 27 29 27L34 36H28L24 27H22L20 36H16ZM23 23H29C31 23 32 22 32.5 20.5C33 19 32 18 30 18H24.5L23 23Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M36 36L45 15H50L54 36H49L48 31H41L39 36H36ZM42.5 27H47.5L46.5 20L42.5 27Z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-body text-body-sm font-bold text-light-on-primary">
                  IEEE RAS
                </span>
                <span className="font-mono text-label-sm text-light-on-primary-container uppercase">
                  INSAT CHAPTER
                </span>
              </div>
            </div>
            <span className="h-6 w-px bg-ieee-blue" aria-hidden="true"></span>
            <div className="flex items-center gap-1.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 2L20 12L12 22L4 12L12 2Z"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                ></path>
                <path
                  d="M12 6V18M8 12H16"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                ></path>
              </svg>
              <span className="font-headline text-label-lg font-bold text-light-on-primary">
                IEEE
              </span>
            </div>
          </div>
          <p className="font-body text-body-sm text-light-on-primary-container max-w-prose">
            IEEE Robotics and Automation® Society (IEEE RAS) Student Branch
            Chapter at INSAT — Centre Urbain Nord, BP 676, 1080 Tunis, Tunisia.
          </p>
          <p className="font-mono text-label-sm text-light-on-primary-container">
            EMAIL: [TO CONFIRM: ras-insat@ieee.org]
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col gap-gutter-sm">
          <span className="font-mono text-label-sm uppercase text-ras-amber">
            NAVIGATION
          </span>
          <Link
            href="/about"
            className="font-body text-body-sm text-light-on-primary-container hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber"
          >
            About &amp; Leadership
          </Link>
          <Link
            href="/domains-teams"
            className="font-body text-body-sm text-light-on-primary-container hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber"
          >
            Domains &amp; Teams
          </Link>
          <Link
            href="/projects"
            className="font-body text-body-sm text-light-on-primary-container hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber"
          >
            Projects Portfolio
          </Link>
          <Link
            href="/events"
            className="font-body text-body-sm text-light-on-primary-container hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber"
          >
            Events &amp; NRW
          </Link>
          <Link
            href="/impact"
            className="font-body text-body-sm text-light-on-primary-container hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber"
          >
            Impact &amp; Press
          </Link>
        </div>

        <div className="md:col-span-4 flex flex-col gap-gutter-sm">
          <span className="font-mono text-label-sm uppercase text-ras-amber">
            CONNECT &amp; LEGAL
          </span>
          <Link
            href="/partners"
            className="font-body text-body-sm text-light-on-primary-container hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber"
          >
            Partner With Us
          </Link>
          <Link
            href="/members"
            className="font-body text-body-sm text-light-on-primary-container hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber"
          >
            Members Hub
          </Link>
          <Link
            href="/join-us"
            className="font-body text-body-sm text-light-on-primary-container hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber"
          >
            Join Us
          </Link>
          <Link
            href="/contact"
            className="font-body text-body-sm text-light-on-primary-container hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber"
          >
            Contact &amp; Socials
          </Link>
          <p className="font-body text-body-sm text-light-on-primary-container pt-gutter-sm border-t border-ieee-blue">
            IEEE Disclaimer: Views expressed on this site are those of the INSAT
            Student Branch Chapter and do not necessarily represent official
            IEEE policy. Privacy Policy [TO CONFIRM].
          </p>
        </div>
      </div>
    </footer>
  );
}
