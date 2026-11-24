import Link from "next/link";
import type { Metadata } from "next";
import MemberPortal from "@/components/behaviors/MemberPortal";

export const metadata: Metadata = {
  title: "Members Hub \u2014 IEEE RAS INSAT",
};

export default function MembersPage() {
  return (
    <>
      <main className="flex-1">
        <section className="border-b border-light-outline-variant bg-light-surface">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
            <div className="lg:col-span-7 flex flex-col gap-gutter-md">
              <div className="flex items-center gap-gutter-sm">
                <span className="font-mono text-label-sm uppercase text-ras-purple">
                  MEMBERS HUB // PUBLIC TEASER &amp; PORTAL CONCEPT
                </span>
                <span className="px-2 py-0.5 rounded-xs bg-light-secondary-container text-light-on-secondary-container font-mono text-label-sm">
                  PHASE 2–3
                </span>
              </div>
              <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-primary text-balance">
                An engineering workspace for active IEEE RAS INSAT members.
              </h1>
              <p className="font-body text-body-lg text-light-on-surface-variant max-w-prose">
                Designed as a practical working platform—not a static folder of
                PDFs. Members get structured workshop codebases, hardware
                borrowing rules, technical docs, and open project roles.
              </p>
              <div className="flex flex-wrap gap-gutter-md">
                <button
                  id="toggle-portal-preview"
                  type="button"
                  className="px-gutter-lg py-gutter-md rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-ieee-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
                >
                  Preview Authenticated Workspace
                </button>
                <Link
                  href="/join-us"
                  className="px-gutter-lg py-gutter-md rounded-sm border border-light-primary text-light-primary font-label text-label-lg hover:bg-light-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
                >
                  Not a Member? Apply to Join
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-xl flex flex-col gap-gutter-md">
              <span className="font-mono text-label-sm uppercase text-ieee-blue">
                MEMBER SIGN IN (CONCEPT)
              </span>
              <h2 className="font-headline text-headline-sm text-light-primary">
                Access Internal Resources
              </h2>
              <form
                id="member-login-form"
                className="flex flex-col gap-gutter-md"
              >
                <div>
                  <label
                    htmlFor="m-email"
                    className="block font-label text-label-lg text-light-primary mb-1"
                  >
                    INSAT / IEEE Email
                  </label>
                  <input
                    id="m-email"
                    type="email"
                    placeholder="member@insat.ucar.tn"
                    className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="m-id"
                    className="block font-label text-label-lg text-light-primary mb-1"
                  >
                    IEEE Member Number
                  </label>
                  <input
                    id="m-id"
                    type="text"
                    placeholder="e.g. 98xxxxxx"
                    className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-gutter-md rounded-sm bg-ras-purple text-light-on-secondary font-label text-label-lg hover:bg-ras-crimson focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
                >
                  Enter Member Workspace
                </button>
                <p
                  id="login-note"
                  className="font-mono text-label-sm text-light-on-surface-variant"
                >
                  Authentication rolls out in Phase 2. Click &#34;Preview
                  Authenticated Workspace&#34; to explore the platform concept.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section id="portal-preview" className="bg-light-surface-container-low">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-gutter-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md">
              <div>
                <span className="font-mono text-label-sm uppercase text-ieee-blue">
                  AUTHENTICATED CONCEPT // MEMBER DASHBOARD
                </span>
                <h2 className="font-headline text-headline-md text-light-primary mt-1">
                  Resource Library, Hardware Inventory &amp; Project Board
                </h2>
              </div>
              <span className="font-mono text-label-sm text-light-on-surface-variant">
                STATUS: INTERACTIVE PREVIEW
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
                <span className="font-mono text-label-sm text-ieee-blue">
                  RESOURCE LIBRARY
                </span>
                <h3 className="font-headline text-title-lg text-light-primary">
                  ROS2, STM32 &amp; CAD Kits
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Tagged slides, starter repositories, and recorded lab sessions
                  maintained by domain leads.
                </p>
                <button
                  type="button"
                  data-expand
                  aria-expanded="false"
                  className="self-start font-mono text-label-sm uppercase tracking-wider text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue mt-2"
                >
                  Access notes
                </button>
                <div data-expand-panel hidden>
                  <span className="font-mono text-label-sm text-light-on-surface-variant">
                    ACCESS: MEMBERS ONLY
                  </span>
                </div>
              </div>

              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
                <span className="font-mono text-label-sm text-ras-purple">
                  EQUIPMENT INVENTORY
                </span>
                <h3 className="font-headline text-title-lg text-light-primary">
                  Lab Hardware &amp; Borrowing
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Live availability of LiDARs, motor drivers, soldering
                  stations, and safety guidelines.
                </p>
                <span className="font-mono text-label-sm text-light-on-surface-variant mt-2">
                  STATUS: [TO CONFIRM INVENTORY]
                </span>
              </div>

              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
                <span className="font-mono text-label-sm text-ras-crimson">
                  PROJECT BOARD [FUTURE]
                </span>
                <h3 className="font-headline text-title-lg text-light-primary">
                  Open Roles on Active Builds
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Apply directly to open firmware, mechanical, or vision roles
                  on NXP Cup &amp; EUROBOT teams.
                </p>
                <span className="font-mono text-label-sm text-light-on-surface-variant mt-2">
                  ROADMAP: PHASE 3
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MemberPortal />
    </>
  );
}
