import Link from "next/link";
import type { Metadata } from "next";
import DomainExplorer from "@/components/behaviors/DomainExplorer";

export const metadata: Metadata = {
  title: "Our Work: Domains & Teams \u2014 IEEE RAS INSAT",
};

export default function DomainsTeamsPage() {
  return (
    <>
      <main className="flex-1">
        <section className="border-b border-light-outline-variant bg-light-surface">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col md:flex-row md:items-end justify-between gap-gutter-lg">
            <div className="max-w-2xl flex flex-col gap-gutter-sm">
              <span className="font-mono text-label-sm uppercase text-ieee-blue">
                OUR WORK // TECHNICAL CAPABILITIES
              </span>
              <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-primary text-balance">
                Domains, Technical Teams &amp; Lab Infrastructure
              </h1>
              <p className="font-body text-body-lg text-light-on-surface-variant">
                Explore the engineering disciplines practiced by IEEE Robotics
                and Automation® Society (IEEE RAS) INSAT working groups, our
                workshop curriculum, and hardware capabilities.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-gutter-lg py-gutter-md rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-ieee-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change shrink-0"
            >
              <span>View All Projects</span>
              <span
                className="material-symbols-outlined text-title-lg"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          </div>
        </section>

        <section className="border-b border-light-outline-variant bg-light-surface-container-low">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl">
            <div data-stagger="steps" className="lg:col-span-4 flex flex-col gap-gutter-sm">
              <span className="font-mono text-label-sm uppercase text-ras-purple mb-1">
                INTERACTIVE DOMAIN EXPLORER
              </span>
              <button
                type="button"
                data-domain="mobile-robotics"
                className="domain-tab text-left p-gutter-md rounded-sm border border-ieee-blue bg-light-surface-container-lowest text-light-primary font-headline text-title-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
              >
                01. Autonomous Mobile Robotics
              </button>
              <button
                type="button"
                data-domain="embedded"
                className="domain-tab text-left p-gutter-md rounded-sm border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface-variant font-headline text-title-lg hover:border-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
              >
                02. Embedded Systems &amp; PCB
              </button>
              <button
                type="button"
                data-domain="vision"
                className="domain-tab text-left p-gutter-md rounded-sm border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface-variant font-headline text-title-lg hover:border-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
              >
                03. Computer Vision &amp; Edge AI
              </button>
              <button
                type="button"
                data-domain="mechanical"
                className="domain-tab text-left p-gutter-md rounded-sm border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface-variant font-headline text-title-lg hover:border-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
              >
                04. Mechanical Design &amp; Control
              </button>
            </div>

            <div
              className="lg:col-span-8 bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-xl flex flex-col justify-between gap-gutter-lg"
              id="domain-detail-panel"
              data-rise
            >
              <div className="flex flex-col gap-gutter-md">
                <div className="flex items-center justify-between">
                  <span
                    id="domain-tag"
                    className="font-mono text-label-sm uppercase text-ieee-blue"
                  >
                    DOMAIN // MOBILE ROBOTICS
                  </span>
                  <span className="px-2 py-0.5 rounded-xs bg-light-secondary-container text-light-on-secondary-container font-mono text-label-sm">
                    ACTIVE WORKING GROUP
                  </span>
                </div>
                <h2
                  id="domain-title"
                  className="font-headline text-headline-md text-light-primary"
                >
                  Autonomous Mobile Robotics
                </h2>
                <p
                  id="domain-desc"
                  className="font-body text-body-md text-light-on-surface-variant"
                >
                  Designing differential-drive and omnidirectional mobile bases
                  equipped with 2D LiDAR, wheel encoders, and IMU sensor fusion
                  for SLAM mapping and autonomous navigation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md pt-gutter-md border-t border-light-outline-variant">
                  <div>
                    <span className="font-mono text-label-sm uppercase text-light-on-surface-variant block">
                      TOOLS &amp; STACK
                    </span>
                    <p
                      id="domain-stack"
                      className="font-mono text-body-sm text-light-primary mt-1"
                    >
                      ROS2 · C++ · Python · Gazebo · Nav2
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-label-sm uppercase text-light-on-surface-variant block">
                      TEAM LEAD &amp; SIZE
                    </span>
                    <p className="font-mono text-body-sm text-light-primary mt-1">
                      [TO CONFIRM] Lead · [TO CONFIRM] Members
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-gutter-md border-t border-light-outline-variant">
                <Link
                  href="/projects"
                  className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  See Related Projects →
                </Link>
                <Link
                  href="/join-us"
                  className="font-label text-label-lg text-ras-purple hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  Join This Working Group →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light-surface">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl">
            <div className="lg:col-span-7 flex flex-col gap-gutter-md">
              <span className="font-mono text-label-sm uppercase text-ras-crimson">
                WORKSHOPS &amp; TRAINING
              </span>
              <h2 className="font-headline text-headline-md text-light-primary">
                Technical Learning Tracks
              </h2>
              <div className="border border-light-outline-variant rounded-sm overflow-hidden bg-light-surface-container-lowest">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-light-outline-variant bg-light-surface-container-low">
                      <th className="p-gutter-md font-mono text-label-sm uppercase text-light-on-surface-variant">
                        WORKSHOP TRACK
                      </th>
                      <th className="p-gutter-md font-mono text-label-sm uppercase text-light-on-surface-variant">
                        LEVEL
                      </th>
                      <th className="p-gutter-md font-mono text-label-sm uppercase text-light-on-surface-variant">
                        SESSIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-light-outline-variant font-body text-body-sm">
                    <tr>
                      <td className="p-gutter-md font-semibold text-light-primary">
                        Embedded C &amp; STM32 Fundamentals
                      </td>
                      <td className="p-gutter-md text-light-on-surface-variant">
                        Beginner–Intermediate
                      </td>
                      <td className="p-gutter-md font-mono text-light-on-surface-variant">
                        [TO CONFIRM]
                      </td>
                    </tr>
                    <tr>
                      <td className="p-gutter-md font-semibold text-light-primary">
                        ROS2 Navigation &amp; Simulation
                      </td>
                      <td className="p-gutter-md text-light-on-surface-variant">
                        Intermediate
                      </td>
                      <td className="p-gutter-md font-mono text-light-on-surface-variant">
                        [TO CONFIRM]
                      </td>
                    </tr>
                    <tr>
                      <td className="p-gutter-md font-semibold text-light-primary">
                        SolidWorks CAD &amp; 3D Prototyping
                      </td>
                      <td className="p-gutter-md text-light-on-surface-variant">
                        Beginner
                      </td>
                      <td className="p-gutter-md font-mono text-light-on-surface-variant">
                        [TO CONFIRM]
                      </td>
                    </tr>
                    <tr>
                      <td className="p-gutter-md font-semibold text-light-primary">
                        Computer Vision for Autonomous Vehicles
                      </td>
                      <td className="p-gutter-md text-light-on-surface-variant">
                        Advanced
                      </td>
                      <td className="p-gutter-md font-mono text-light-on-surface-variant">
                        [TO CONFIRM]
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-5 bg-ieee-navy text-light-on-primary rounded-sm p-gutter-xl flex flex-col justify-between gap-gutter-md">
              <div>
                <span className="font-mono text-label-sm uppercase text-ras-amber">
                  LAB &amp; EQUIPMENT
                </span>
                <h2 className="font-headline text-headline-md text-light-on-primary mt-1">
                  Hardware Capabilities
                </h2>
                <p className="font-body text-body-sm text-light-on-primary-container mt-2">
                  Available to active IEEE RAS INSAT project teams for
                  prototyping, testing, and competition prep:
                </p>
                <ul className="mt-gutter-md flex flex-col gap-gutter-sm font-mono text-body-sm text-light-on-primary">
                  <li>
                    • 3D Printers &amp; Rapid Prototyping [TO CONFIRM SPECS]
                  </li>
                  <li>• Soldering &amp; PCB Rework Stations [TO CONFIRM]</li>
                  <li>
                    • Oscilloscopes, Logic Analyzers &amp; Bench PSUs [TO
                    CONFIRM]
                  </li>
                  <li>• NXP Cup &amp; Micromouse Test Tracks [TO CONFIRM]</li>
                </ul>
              </div>
              <Link
                href="/partners"
                className="font-label text-label-lg text-ras-amber hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber"
              >
                Sponsor Lab Equipment →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <DomainExplorer />
    </>
  );
}
