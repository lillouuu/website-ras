import Link from "next/link";
import type { Metadata } from "next";
import ProjectFilters from "@/components/behaviors/ProjectFilters";

export const metadata: Metadata = {
  title: "Our Work: Projects \u2014 IEEE RAS INSAT",
};

export default function ProjectsPage() {
  return (
    <>
      <main className="flex-1">
        <section className="border-b border-light-outline-variant bg-light-surface">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-gutter-lg">
            <div className="max-w-2xl flex flex-col gap-gutter-sm">
              <span className="font-mono text-label-sm uppercase text-ras-crimson">
                OUR WORK // PROJECT ARCHIVE
              </span>
              <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-primary text-balance">
                Engineered Systems &amp; Competition Builds
              </h1>
              <p className="font-body text-body-lg text-light-on-surface-variant">
                Every project is documented with its problem statement,
                hardware/software stack, team roles, and verified outcomes.
              </p>
            </div>

            <div
              className="flex flex-wrap items-center gap-gutter-sm"
              role="group"
              aria-label="Filter projects by domain"
            >
              <button
                type="button"
                data-filter="all"
                className="proj-filter px-gutter-md py-2 rounded-sm bg-light-primary text-light-on-primary font-mono text-label-sm uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
              >
                ALL (04)
              </button>
              <button
                type="button"
                data-filter="embedded"
                className="proj-filter px-gutter-md py-2 rounded-sm border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface-variant font-mono text-label-sm uppercase hover:border-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
              >
                EMBEDDED &amp; PCB
              </button>
              <button
                type="button"
                data-filter="robotics"
                className="proj-filter px-gutter-md py-2 rounded-sm border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface-variant font-mono text-label-sm uppercase hover:border-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
              >
                MOBILE ROBOTICS
              </button>
              <button
                type="button"
                data-filter="ongoing"
                className="proj-filter px-gutter-md py-2 rounded-sm border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface-variant font-mono text-label-sm uppercase hover:border-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
              >
                STATUS: ONGOING
              </button>
            </div>
          </div>
        </section>

        <section className="border-b border-light-outline-variant bg-light-surface-container-low">
          <div
            className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 md:grid-cols-2 gap-gutter-lg"
            id="projects-grid"
          >
            <article
              data-category="embedded ongoing"
              data-tilt
              className="project-card bg-light-surface-container-lowest border border-light-outline-variant rounded-sm overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div
                  role="img"
                  aria-label="Image placeholder: NXP Cup Tunisia autonomous race car photography to be supplied"
                  className="w-full aspect-[16/9] bg-light-surface-container-low border-b border-light-outline-variant flex flex-col items-center justify-center p-gutter-xl text-center relative"
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
                    className="material-symbols-outlined text-headline-lg text-ieee-blue mb-1"
                    aria-hidden="true"
                  >
                    photo_camera
                  </span>
                  <span className="font-mono text-label-sm uppercase tracking-wider text-light-primary">
                    IMAGE PLACEHOLDER · 16:9
                  </span>
                  <p className="font-body text-body-sm text-light-on-surface-variant mt-1 max-w-[30ch]">
                    Replace with verified NXP Cup vehicle photograph.
                  </p>
                </div>
                <div className="p-gutter-lg flex flex-col gap-gutter-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-label-sm uppercase text-ieee-blue">
                      NXP CUP TUNISIA // EMBEDDED
                    </span>
                    <span className="px-2 py-0.5 rounded-xs bg-light-secondary-container text-light-on-secondary-container font-mono text-label-sm">
                      ONGOING
                    </span>
                  </div>
                  <h2 className="font-headline text-headline-sm text-light-primary">
                    Autonomous Line-Scan Race Car
                  </h2>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    <strong>Problem:</strong> High-speed track following under
                    variable lighting without external localization.
                  </p>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    <strong>Solution:</strong> Forward line-scan camera + PID
                    differential steering on NXP Kinetis MCU.
                  </p>
                  <p className="font-mono text-body-sm text-light-on-surface-variant">
                    Team: [TO CONFIRM] · Outcome: [TO CONFIRM]
                  </p>
                </div>
              </div>
              <div className="px-gutter-lg py-gutter-md border-t border-light-outline-variant flex items-center justify-between">
                <span className="font-mono text-label-sm text-light-on-surface-variant">
                  GITHUB / DOCS: [TO CONFIRM]
                </span>
                <Link
                  href="/join-us"
                  className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  Join Team →
                </Link>
              </div>
            </article>

            <article
              data-category="robotics ongoing"
              data-tilt
              className="project-card bg-light-surface-container-lowest border border-light-outline-variant rounded-sm overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div
                  role="img"
                  aria-label="Image placeholder: EUROBOT autonomous competition robot photography to be supplied"
                  className="w-full aspect-[16/9] bg-light-surface-container-low border-b border-light-outline-variant flex flex-col items-center justify-center p-gutter-xl text-center relative"
                >
                  <span
                    className="absolute top-3 left-3 w-3 h-3 border-t border-l border-ras-purple"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="absolute top-3 right-3 w-3 h-3 border-t border-r border-ras-purple"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-ras-purple"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-ras-purple"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="material-symbols-outlined text-headline-lg text-ras-purple mb-1"
                    aria-hidden="true"
                  >
                    photo_camera
                  </span>
                  <span className="font-mono text-label-sm uppercase tracking-wider text-light-primary">
                    IMAGE PLACEHOLDER · 16:9
                  </span>
                  <p className="font-body text-body-sm text-light-on-surface-variant mt-1 max-w-[30ch]">
                    Replace with verified EUROBOT robot photograph.
                  </p>
                </div>
                <div className="p-gutter-lg flex flex-col gap-gutter-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-label-sm uppercase text-ras-purple">
                      EUROBOT // MOBILE ROBOTICS
                    </span>
                    <span className="px-2 py-0.5 rounded-xs bg-light-secondary-container text-light-on-secondary-container font-mono text-label-sm">
                      ONGOING
                    </span>
                  </div>
                  <h2 className="font-headline text-headline-sm text-light-primary">
                    EUROBOT Autonomous Manipulator
                  </h2>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    <strong>Problem:</strong> Autonomous object sorting and
                    obstacle avoidance within a strict 100-second match.
                  </p>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    <strong>Solution:</strong> Custom 3D-printed dual-gripper,
                    odometry + LiDAR beacon localization, and ROS2 state
                    machine.
                  </p>
                  <p className="font-mono text-body-sm text-light-on-surface-variant">
                    Team: [TO CONFIRM] · Outcome: [TO CONFIRM]
                  </p>
                </div>
              </div>
              <div className="px-gutter-lg py-gutter-md border-t border-light-outline-variant flex items-center justify-between">
                <span className="font-mono text-label-sm text-light-on-surface-variant">
                  SCHEMATICS: [TO CONFIRM]
                </span>
                <Link
                  href="/join-us"
                  className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  Join Team →
                </Link>
              </div>
            </article>

            <article
              data-category="embedded"
              data-tilt
              className="project-card bg-light-surface-container-lowest border border-light-outline-variant rounded-sm overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div
                  role="img"
                  aria-label="Image placeholder: Micromouse maze-solving robot photography to be supplied"
                  className="w-full aspect-[16/9] bg-light-surface-container-low border-b border-light-outline-variant flex flex-col items-center justify-center p-gutter-xl text-center relative"
                >
                  <span
                    className="absolute top-3 left-3 w-3 h-3 border-t border-l border-ras-crimson"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="absolute top-3 right-3 w-3 h-3 border-t border-r border-ras-crimson"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-ras-crimson"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-ras-crimson"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="material-symbols-outlined text-headline-lg text-ras-crimson mb-1"
                    aria-hidden="true"
                  >
                    photo_camera
                  </span>
                  <span className="font-mono text-label-sm uppercase tracking-wider text-light-primary">
                    IMAGE PLACEHOLDER · 16:9
                  </span>
                  <p className="font-body text-body-sm text-light-on-surface-variant mt-1 max-w-[30ch]">
                    Replace with verified Micromouse robot photograph.
                  </p>
                </div>
                <div className="p-gutter-lg flex flex-col gap-gutter-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-label-sm uppercase text-ras-crimson">
                      MICROMOUSE // EMBEDDED
                    </span>
                    <span className="px-2 py-0.5 rounded-xs border border-light-outline-variant font-mono text-label-sm text-light-primary">
                      COMPLETED
                    </span>
                  </div>
                  <h2 className="font-headline text-headline-sm text-light-primary">
                    Flood-Fill Micromouse Platform
                  </h2>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    <strong>Problem:</strong> Rapidly mapping an unknown 16×16
                    maze and executing a high-speed diagonal return run.
                  </p>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    <strong>Solution:</strong> Custom 4-layer PCB, optical
                    encoders, IR wall sensors, and C++ flood-fill solver.
                  </p>
                  <p className="font-mono text-body-sm text-light-on-surface-variant">
                    Team: [TO CONFIRM] · Outcome: [TO CONFIRM]
                  </p>
                </div>
              </div>
              <div className="px-gutter-lg py-gutter-md border-t border-light-outline-variant flex items-center justify-between">
                <span className="font-mono text-label-sm text-light-on-surface-variant">
                  REPO: [TO CONFIRM]
                </span>
                <Link
                  href="/impact"
                  className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  View Results →
                </Link>
              </div>
            </article>

            <article
              data-category="robotics ongoing"
              data-tilt
              className="project-card bg-light-surface-container-lowest border border-light-outline-variant rounded-sm overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div
                  role="img"
                  aria-label="Image placeholder: INSAT SLAM research mobile robot photography to be supplied"
                  className="w-full aspect-[16/9] bg-light-surface-container-low border-b border-light-outline-variant flex flex-col items-center justify-center p-gutter-xl text-center relative"
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
                    className="material-symbols-outlined text-headline-lg text-ieee-blue mb-1"
                    aria-hidden="true"
                  >
                    photo_camera
                  </span>
                  <span className="font-mono text-label-sm uppercase tracking-wider text-light-primary">
                    IMAGE PLACEHOLDER · 16:9
                  </span>
                  <p className="font-body text-body-sm text-light-on-surface-variant mt-1 max-w-[30ch]">
                    Replace with verified INSAT SLAM platform photograph.
                  </p>
                </div>
                <div className="p-gutter-lg flex flex-col gap-gutter-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-label-sm uppercase text-ieee-blue">
                      LAB R&amp;D // MOBILE ROBOTICS
                    </span>
                    <span className="px-2 py-0.5 rounded-xs bg-light-secondary-container text-light-on-secondary-container font-mono text-label-sm">
                      ONGOING
                    </span>
                  </div>
                  <h2 className="font-headline text-headline-sm text-light-primary">
                    INSAT SLAM Research Base
                  </h2>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    <strong>Problem:</strong> Reusable modular testbed for
                    members learning ROS2, perception, and autonomous
                    navigation.
                  </p>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    <strong>Solution:</strong> Aluminum extrusion chassis with
                    RPLiDAR, Jetson compute, and open-source student docs.
                  </p>
                  <p className="font-mono text-body-sm text-light-on-surface-variant">
                    Team: [TO CONFIRM] · Outcome: [TO CONFIRM]
                  </p>
                </div>
              </div>
              <div className="px-gutter-lg py-gutter-md border-t border-light-outline-variant flex items-center justify-between">
                <span className="font-mono text-label-sm text-light-on-surface-variant">
                  PARTNER: [OPEN FOR SPONSORSHIP]
                </span>
                <Link
                  href="/partners"
                  className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  Sponsor Build →
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-light-surface">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-gutter-lg">
            <div>
              <span className="font-mono text-label-sm uppercase text-ras-purple">
                PROPOSE A PROJECT
              </span>
              <h2 className="font-headline text-headline-md text-light-primary mt-1">
                Have a robotics build you want to pitch?
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant mt-1">
                Members submit technical proposals for lab space, mentorship,
                and component budgets each semester.
              </p>
            </div>
            <Link
              href="/join-us"
              className="px-gutter-lg py-gutter-md rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-ieee-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change shrink-0"
            >
              Apply to Join a Team
            </Link>
          </div>
        </section>
      </main>
      <ProjectFilters />
    </>
  );
}
