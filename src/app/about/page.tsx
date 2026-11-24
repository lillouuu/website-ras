import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About \u2014 IEEE RAS INSAT",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-light-outline-variant bg-light-surface">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start">
          <div className="lg:col-span-7 flex flex-col gap-gutter-md">
            <span className="font-mono text-label-sm uppercase text-ieee-blue">
              ABOUT THE CHAPTER
            </span>
            <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-primary text-balance">
              A student-led robotics chapter built on engineering rigor.
            </h1>
            <p className="font-body text-body-lg text-light-on-surface-variant max-w-prose text-pretty">
              Founded at the National Institute of Applied Science and
              Technology (INSAT) in Tunis, the IEEE Robotics and Automation®
              Society (IEEE RAS) INSAT Student Branch Chapter empowers
              engineering students to design, prototype, and compete with real
              autonomous systems.
            </p>
            <div data-stagger="meta" className="grid grid-cols-1 sm:grid-cols-3 gap-gutter-md pt-gutter-md border-t border-light-outline-variant">
              <div>
                <span className="font-mono text-label-sm uppercase text-light-on-surface-variant block">
                  INSTITUTION
                </span>
                <span className="font-body text-body-md font-semibold text-light-primary">
                  INSAT Tunis
                </span>
              </div>
              <div>
                <span className="font-mono text-label-sm uppercase text-light-on-surface-variant block">
                  IEEE REGION / SECTION
                </span>
                <span className="font-body text-body-md font-semibold text-light-primary">
                  Region 8 · Tunisia Section
                </span>
              </div>
              <div>
                <span className="font-mono text-label-sm uppercase text-light-on-surface-variant block">
                  CHARTER YEAR
                </span>
                <span className="font-mono text-body-md text-light-primary">
                  [TO CONFIRM]
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-light-outline-variant rounded-sm overflow-hidden bg-light-surface-container-low">
              <div
                role="img"
                aria-label="Image placeholder: IEEE RAS INSAT group photograph to be supplied"
                className="w-full aspect-[16/10] bg-light-surface-container-low flex flex-col items-center justify-center p-gutter-xl text-center relative"
              >
                <span
                  className="absolute top-3 left-3 w-3 h-3 border-t border-l border-ieee-blue"
                  aria-hidden="true"
                ></span>
                <span
                  className="absolute top-3 right-3 w-3 h-3 border-t border-r border-ieee-blue"
                  aria-hidden="true"
                ></span>
                <span
                  className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-ieee-blue"
                  aria-hidden="true"
                ></span>
                <span
                  className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-ieee-blue"
                  aria-hidden="true"
                ></span>

                <span
                  className="material-symbols-outlined text-headline-lg text-ieee-blue mb-gutter-sm"
                  aria-hidden="true"
                >
                  photo_camera
                </span>
                <span className="font-mono text-label-sm uppercase tracking-wider text-light-primary">
                  IMAGE PLACEHOLDER · 16:10
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-1 max-w-[28ch]">
                  Replace with official IEEE RAS INSAT group photograph.
                </p>
              </div>
              <div className="bg-light-primary text-light-on-primary px-gutter-md py-gutter-sm flex items-center justify-between gap-gutter-sm">
                <span className="font-mono text-label-sm uppercase">
                  COMMUNITY // INSAT TUNIS
                </span>
                <span className="font-mono text-label-sm text-ras-amber">
                  [TO CONFIRM: ARCHIVE]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-light-outline-variant bg-light-surface-container-low">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl">
          <div className="lg:col-span-6 flex flex-col gap-gutter-lg">
            <div>
              <span className="font-mono text-label-sm uppercase text-ras-purple">
                MISSION &amp; VISION
              </span>
              <h2 data-kinetic className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary mt-1">
                Why We Exist
              </h2>
            </div>
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg">
              <h3 className="font-headline text-title-lg text-light-primary">
                Our Mission
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant mt-2">
                Foster technical mastery in robotics and automation at INSAT
                through hands-on projects, peer mentorship, and national
                competitions.
              </p>
            </div>
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg">
              <h3 className="font-headline text-title-lg text-light-primary">
                Our Vision
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant mt-2">
                Establish INSAT as a recognized hub for student robotics
                innovation across North Africa and the international IEEE RAS
                community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-gutter-sm">
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-md">
                <span className="font-mono text-label-sm text-ieee-blue">
                  01 // INNOVATION
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                  Shipping working hardware over slide decks.
                </p>
              </div>
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-md">
                <span className="font-mono text-label-sm text-ras-purple">
                  02 // COLLABORATION
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                  Cross-disciplinary teams sharing knowledge.
                </p>
              </div>
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-md">
                <span className="font-mono text-label-sm text-ras-crimson">
                  03 // INTEGRITY
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                  Verifiable engineering results and ethics.
                </p>
              </div>
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-md">
                <span className="font-mono text-label-sm text-light-primary">
                  04 // GLOBAL REACH
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                  Connecting Tunisia to international IEEE RAS.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-ieee-navy text-light-on-primary rounded-sm p-gutter-xl flex flex-col justify-between gap-gutter-lg">
            <div className="flex flex-col gap-gutter-md">
              <span className="font-mono text-label-sm uppercase text-ras-amber">
                AFFILIATION &amp; GOVERNANCE
              </span>
              <h2 className="font-headline text-headline-md text-light-on-primary">
                Connected to the Global IEEE Robotics &amp; Automation® Society
              </h2>
              <p className="font-body text-body-md text-light-on-primary-container">
                IEEE is the world’s largest technical professional organization
                dedicated to advancing technology for the benefit of humanity.
                Within IEEE, the IEEE Robotics and Automation® Society (IEEE
                RAS) supports research, education, and industrial collaboration
                across autonomous systems.
              </p>
              <p className="font-body text-body-md text-light-on-primary-container">
                Our Student Branch Chapter operates under the INSAT IEEE Student
                Branch (Region 8, Tunisia Section), giving members access to
                IEEE Xplore® robotics publications, international conference
                grants, and global mentorship.
              </p>
            </div>
            <div className="border-t border-ieee-blue pt-gutter-md flex items-center justify-between">
              <span className="font-mono text-label-sm text-light-on-primary-container">
                CHAPTER CODE: [TO CONFIRM]
              </span>
              <Link
                href="/impact"
                className="font-label text-label-lg text-ras-amber hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber"
              >
                View IEEE Recognitions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-light-outline-variant bg-light-surface">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-gutter-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md">
            <div>
              <span className="font-mono text-label-sm uppercase text-ieee-blue">
                MILESTONES
              </span>
              <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary mt-1">
                Chapter Timeline
              </h2>
            </div>
            <span className="font-mono text-label-sm text-light-on-surface-variant">
              [TO CONFIRM: EXACT YEARS &amp; ARCHIVE PHOTOS]
            </span>
          </div>

          <div data-timeline className="grid grid-cols-1 md:grid-cols-4 gap-gutter-md">
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
              <span className="font-mono text-label-sm text-ras-purple">
                [TO CONFIRM] YEAR
              </span>
              <h3 className="font-headline text-title-lg text-light-primary">
                Chapter Founding
              </h3>
              <p className="font-body text-body-sm text-light-on-surface-variant">
                Official chartering of IEEE RAS INSAT Student Branch Chapter at
                INSAT Tunis.
              </p>
            </div>
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
              <span className="font-mono text-label-sm text-ieee-blue">
                [TO CONFIRM] YEAR
              </span>
              <h3 className="font-headline text-title-lg text-light-primary">
                First NRW Edition
              </h3>
              <p className="font-body text-body-sm text-light-on-surface-variant">
                Launch of National Robotics Weekend, bringing Tunisian
                university teams together.
              </p>
            </div>
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
              <span className="font-mono text-label-sm text-ras-crimson">
                [TO CONFIRM] YEAR
              </span>
              <h3 className="font-headline text-title-lg text-light-primary">
                International Competitions
              </h3>
              <p className="font-body text-body-sm text-light-on-surface-variant">
                Participation in NXP Cup Tunisia, EUROBOT, and Micromouse
                challenges.
              </p>
            </div>
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
              <span className="font-mono text-label-sm text-light-primary">
                2025 / 2026
              </span>
              <h3 className="font-headline text-title-lg text-light-primary">
                Industry &amp; R&amp;D Expansion
              </h3>
              <p className="font-body text-body-sm text-light-on-surface-variant">
                Scaling technical working groups and formalizing industrial
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-surface-container-low">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-gutter-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md">
            <div>
              <span className="font-mono text-label-sm uppercase text-ras-purple">
                LEADERSHIP &amp; PEOPLE
              </span>
              <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary mt-1">
                Executive Board &amp; Faculty Advisor
              </h2>
            </div>
            <span className="font-mono text-label-sm text-light-on-surface-variant">
              MANDATE: 2025–2026 [TO CONFIRM]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-md">
            <article data-portrait className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
              <div className="w-12 h-12 rounded-sm bg-light-primary text-light-on-primary flex items-center justify-center font-headline text-title-lg">
                CH
              </div>
              <div>
                <span className="font-mono text-label-sm text-ieee-blue">
                  CHAIR
                </span>
                <h3 className="font-headline text-title-lg text-light-primary">
                  [TO CONFIRM] Name
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                  Leads chapter strategy, IEEE reporting, and institutional
                  partnerships at INSAT.
                </p>
              </div>
            </article>
            <article data-portrait className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
              <div className="w-12 h-12 rounded-sm bg-ras-purple text-light-on-secondary flex items-center justify-center font-headline text-title-lg">
                VC
              </div>
              <div>
                <span className="font-mono text-label-sm text-ras-purple">
                  VICE CHAIR
                </span>
                <h3 className="font-headline text-title-lg text-light-primary">
                  [TO CONFIRM] Name
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                  Coordinates technical working groups, lab logistics, and
                  competition readiness.
                </p>
              </div>
            </article>
            <article data-portrait className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
              <div className="w-12 h-12 rounded-sm bg-ras-crimson text-light-on-tertiary flex items-center justify-center font-headline text-title-lg">
                TL
              </div>
              <div>
                <span className="font-mono text-label-sm text-ras-crimson">
                  TECHNICAL LEAD
                </span>
                <h3 className="font-headline text-title-lg text-light-primary">
                  [TO CONFIRM] Name
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                  Oversees robotics architecture reviews, workshop curricula,
                  and hardware safety.
                </p>
              </div>
            </article>
            <article data-portrait className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
              <div className="w-12 h-12 rounded-sm bg-ieee-blue text-light-on-primary flex items-center justify-center font-headline text-title-lg">
                FA
              </div>
              <div>
                <span className="font-mono text-label-sm text-ieee-blue">
                  FACULTY ADVISOR
                </span>
                <h3 className="font-headline text-title-lg text-light-primary">
                  [TO CONFIRM] Prof. Name
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                  INSAT faculty mentor supporting academic alignment and lab
                  access.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
