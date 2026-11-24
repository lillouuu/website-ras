import Link from "next/link";
import type { Metadata } from "next";
import EventFilters from "@/components/behaviors/EventFilters";

export const metadata: Metadata = {
  title: "Events \u2014 NRW & Competitions | IEEE RAS INSAT",
};

export default function EventsPage() {
  return (
    <>
      <main className="flex-1">
        <section className="bg-ieee-navy text-light-on-primary border-b border-ieee-blue">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
            <div className="lg:col-span-6 flex flex-col gap-gutter-md">
              <span className="font-mono text-label-sm uppercase text-ras-amber">
                FLAGSHIP EVENT SERIES // INSAT TUNIS
              </span>
              <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance">
                National Robotics Weekend (NRW)
              </h1>
              <p className="font-body text-body-lg text-light-on-primary-container">
                Our signature national robotics gathering—combining autonomous
                hardware competitions, hands-on engineering workshops, and
                industry networking at INSAT.
              </p>
              <div className="grid grid-cols-3 gap-gutter-md py-gutter-md border-y border-ieee-blue">
                <div>
                  <span className="font-mono text-label-sm text-light-on-primary-container block">
                    EDITIONS HELD
                  </span>
                  <span className="font-mono text-title-lg text-light-on-primary">
                    [TO CONFIRM]
                  </span>
                </div>
                <div>
                  <span className="font-mono text-label-sm text-light-on-primary-container block">
                    TYPICAL AUDIENCE
                  </span>
                  <span className="font-mono text-title-lg text-light-on-primary">
                    [TO CONFIRM]
                  </span>
                </div>
                <div>
                  <span className="font-mono text-label-sm text-light-on-primary-container block">
                    NEXT DATE
                  </span>
                  <span className="font-mono text-title-lg text-ras-amber">
                    [TO CONFIRM]
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-gutter-md">
                <Link
                  href="/partners#partner-form"
                  className="px-gutter-lg py-gutter-md rounded-sm bg-ras-amber text-light-primary font-label text-label-lg hover:bg-ras-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber transition-colors duration-state-change"
                >
                  Sponsor NRW
                </Link>
                <a
                  href="#upcoming-events"
                  className="px-gutter-lg py-gutter-md rounded-sm border border-light-on-primary-container text-light-on-primary font-label text-label-lg hover:bg-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber transition-colors duration-state-change"
                >
                  View Schedule
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div data-parallax="12" className="border border-ieee-blue rounded-sm overflow-hidden bg-light-primary">
                <div
                  role="img"
                  data-mask="center"
                  aria-label="Image placeholder: National Robotics Weekend arena photography to be supplied"
                  className="w-full aspect-[16/10] bg-light-primary flex flex-col items-center justify-center p-gutter-xl text-center relative"
                >
                  <span
                    className="absolute top-3 left-3 w-3 h-3 border-t border-l border-ras-amber"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="absolute top-3 right-3 w-3 h-3 border-t border-r border-ras-amber"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-ras-amber"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-ras-amber"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="material-symbols-outlined text-headline-lg text-ras-amber mb-gutter-sm"
                    aria-hidden="true"
                  >
                    photo_camera
                  </span>
                  <span className="font-mono text-label-sm uppercase tracking-wider text-light-on-primary">
                    IMAGE PLACEHOLDER · 16:10
                  </span>
                  <p className="font-body text-body-sm text-light-on-primary-container mt-1 max-w-[34ch]">
                    Replace with verified National Robotics Weekend photograph.
                  </p>
                </div>
                <div className="px-gutter-md py-gutter-sm flex items-center justify-between font-mono text-label-sm text-light-on-primary-container border-t border-ieee-blue">
                  <span>NRW COMPETITION ARENA // INSAT</span>
                  <span>[TO CONFIRM: ARCHIVE PHOTO]</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="upcoming-events" className="bg-light-surface">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-gutter-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md">
              <div>
                <span className="font-mono text-label-sm uppercase text-ieee-blue">
                  CALENDAR &amp; ARCHIVE
                </span>
                <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary mt-1">
                  Workshops, Competitions &amp; Conferences
                </h2>
              </div>
              <div className="flex flex-wrap gap-gutter-sm">
                <button
                  type="button"
                  data-ev="all"
                  className="ev-filter px-gutter-md py-2 rounded-sm bg-light-primary text-light-on-primary font-mono text-label-sm uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  ALL
                </button>
                <button
                  type="button"
                  data-ev="competition"
                  className="ev-filter px-gutter-md py-2 rounded-sm border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface-variant font-mono text-label-sm uppercase hover:border-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  COMPETITIONS
                </button>
                <button
                  type="button"
                  data-ev="workshop"
                  className="ev-filter px-gutter-md py-2 rounded-sm border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface-variant font-mono text-label-sm uppercase hover:border-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  WORKSHOPS
                </button>
                <button
                  type="button"
                  data-ev="conference"
                  className="ev-filter px-gutter-md py-2 rounded-sm border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface-variant font-mono text-label-sm uppercase hover:border-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  CONFERENCES
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
              <article
                data-ev-type="competition"
                data-tilt
                className="ev-card bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col justify-between gap-gutter-md"
              >
                <div className="flex flex-col gap-gutter-sm">
                  <span className="font-mono text-label-sm uppercase text-ras-crimson">
                    COMPETITION // UPCOMING
                  </span>
                  <h3 className="font-headline text-title-lg text-light-primary">
                    NXP Cup Tunisia Qualifiers
                  </h3>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    Autonomous model car racing challenge testing real-time
                    embedded vision and control.
                  </p>
                  <button
                    type="button"
                    data-expand
                    aria-expanded="false"
                    className="self-start font-mono text-label-sm uppercase tracking-wider text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                  >
                    Schedule &amp; logistics
                  </button>
                  <div data-expand-panel hidden className="flex flex-col gap-gutter-sm">
                    <p className="font-mono text-body-sm text-light-on-surface-variant">
                      Date: [TO CONFIRM] · Location: INSAT Tunis
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  Request Team Info →
                </Link>
              </article>

              <article
                data-ev-type="workshop"
                data-tilt
                className="ev-card bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col justify-between gap-gutter-md"
              >
                <div className="flex flex-col gap-gutter-sm">
                  <span className="font-mono text-label-sm uppercase text-ieee-blue">
                    WORKSHOP // ARCHIVE
                  </span>
                  <h3 className="font-headline text-title-lg text-light-primary">
                    ROS2 &amp; Autonomous Navigation Bootcamp
                  </h3>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    Hands-on training covering URDF modeling, Gazebo simulation,
                    and Nav2 stacks.
                  </p>
                  <button
                    type="button"
                    data-expand
                    aria-expanded="false"
                    className="self-start font-mono text-label-sm uppercase tracking-wider text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                  >
                    Schedule &amp; logistics
                  </button>
                  <div data-expand-panel hidden className="flex flex-col gap-gutter-sm">
                    <p className="font-mono text-body-sm text-light-on-surface-variant">
                      Attendance: [TO CONFIRM] · Materials: Members Hub
                    </p>
                  </div>
                </div>
                <Link
                  href="/members"
                  className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  View Workshop Materials →
                </Link>
              </article>

              <article
                data-ev-type="conference"
                data-tilt
                className="ev-card bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col justify-between gap-gutter-md"
              >
                <div className="flex flex-col gap-gutter-sm">
                  <span className="font-mono text-label-sm uppercase text-ras-purple">
                    CONFERENCE // ARCHIVE
                  </span>
                  <h3 className="font-headline text-title-lg text-light-primary">
                    Industry Robotics &amp; Embedded Talk
                  </h3>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    Technical keynote connecting INSAT students with robotics
                    engineers and R&amp;D leads.
                  </p>
                  <button
                    type="button"
                    data-expand
                    aria-expanded="false"
                    className="self-start font-mono text-label-sm uppercase tracking-wider text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                  >
                    Schedule &amp; logistics
                  </button>
                  <div data-expand-panel hidden className="flex flex-col gap-gutter-sm">
                    <p className="font-mono text-body-sm text-light-on-surface-variant">
                      Speakers: [TO CONFIRM] · Attendance: [TO CONFIRM]
                    </p>
                  </div>
                </div>
                <Link
                  href="/partners"
                  className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  Host a Technical Talk →
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>
      <EventFilters />
    </>
  );
}
