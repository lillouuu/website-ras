import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IEEE RAS INSAT \u2014 Robotics & Automation Student Branch Chapter",
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden border-b border-light-outline-variant bg-light-surface">
        <svg
          data-parallax="28"
          className="pointer-events-none absolute -right-20 -top-10 w-[560px] h-[400px] opacity-15 hidden lg:block"
          viewBox="0 0 64 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8 31C3 20 14 7 32 4C48 1 60 8 59 19C58 28 47 35 35 37"
            stroke="#772583"
            strokeWidth="2.2"
            strokeLinecap="round"
          ></path>
        </svg>

        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin pt-section-sm lg:pt-section-lg pb-gutter-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-end">
            <div className="lg:col-span-7 flex flex-col gap-gutter-lg">
              <div className="inline-flex items-center gap-gutter-sm self-start">
                <span className="ieee-wedge-45 bg-ieee-blue text-light-on-primary pl-gutter-md pr-gutter-lg py-1 font-mono text-label-sm uppercase tracking-wider">
                  INSAT TUNIS · REGION 8
                </span>
                <span className="font-mono text-label-sm uppercase text-ras-crimson tracking-wider">
                  STUDENT BRANCH CHAPTER
                </span>
              </div>

              <h1 data-kinetic className="font-headline text-display-xl-mobile lg:text-display-xl text-light-primary text-balance">
                We build autonomous robotics
                <br className="hidden lg:inline" /> from INSAT to the world.
              </h1>

              <p className="font-body text-body-lg text-light-on-surface-variant max-w-prose text-pretty">
                The IEEE Robotics and Automation® Society (IEEE RAS) INSAT
                Student Branch Chapter turns engineering theory into
                competition-grade hardware, national robotics events, and
                industry-ready talent.
              </p>

              <div className="flex flex-wrap items-center gap-gutter-md pt-gutter-xs">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-gutter-md rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-ieee-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
                >
                  <span>Explore Our Projects</span>
                  <span
                    className="material-symbols-outlined text-title-lg"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center px-gutter-md py-2.5 rounded-sm border border-light-primary bg-light-surface-container-lowest text-light-primary font-label text-label-lg hover:bg-light-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
                >
                  <span>Partner With Us</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-gutter-xs">
              <div data-parallax="14" className="relative border border-light-outline-variant rounded-sm overflow-hidden bg-light-surface-container-low">
                <div
                  role="img"
                  data-mask="right"
                  aria-label="Image placeholder: INSAT robotics lab calibration photography to be supplied"
                  className="w-full aspect-[4/3] bg-light-surface-container-low flex flex-col items-center justify-center p-gutter-xl text-center relative"
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
                    IMAGE PLACEHOLDER · 4:3
                  </span>
                  <p className="font-body text-body-sm text-light-on-surface-variant mt-1 max-w-[26ch]">
                    Replace with verified INSAT robotics lab photograph.
                  </p>
                </div>
                <div className="bg-light-primary text-light-on-primary px-gutter-md py-gutter-sm flex items-center justify-between gap-gutter-sm">
                  <span className="font-mono text-label-sm uppercase">
                    PLATE 01 // INSAT ROBOTICS LAB
                  </span>
                  <span className="font-mono text-label-sm text-ras-amber">
                    36.843° N, 10.197° E
                  </span>
                </div>
              </div>
              <p className="font-mono text-body-sm text-light-on-surface-variant">
                [TO CONFIRM: OFFICIAL CHAPTER LAB ARCHIVE PHOTO]
              </p>
            </div>
          </div>

          <div data-stagger="meta" className="mt-section-sm pt-gutter-md border-t border-light-outline-variant grid grid-cols-2 lg:grid-cols-4 gap-gutter-md font-mono text-label-sm">
            <div className="flex flex-col gap-1">
              <span className="text-light-on-surface-variant uppercase">
                ORGANIZATION
              </span>
              <span className="text-light-primary">IEEE RAS INSAT CHAPTER</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-light-on-surface-variant uppercase">
                CORE COMPETITIONS
              </span>
              <span className="text-ieee-blue">
                NXP CUP · EUROBOT · MICROMOUSE
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-light-on-surface-variant uppercase">
                FLAGSHIP EVENT
              </span>
              <span className="text-ras-crimson">
                NATIONAL ROBOTICS WEEKEND
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-light-on-surface-variant uppercase">
                LOCATION
              </span>
              <span className="text-light-primary">INSAT TUNIS, TUNISIA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-light-outline-variant bg-light-surface-container-low">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start">
          <div className="lg:col-span-5 flex flex-col gap-gutter-md">
            <span className="font-mono text-label-sm uppercase text-ras-purple">
              01 // WHO WE ARE
            </span>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance">
              Engineering capabilities built by students, tested in competition.
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Chartered at the National Institute of Applied Science and
              Technology (INSAT), IEEE RAS INSAT brings together mechanical,
              embedded, control, and AI engineers. Beyond organizing flagship
              gatherings like National Robotics Weekend, our teams design,
              machine, and program real autonomous systems year-round.
            </p>
            <div className="pt-gutter-xs">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
              >
                <span>Read Chapter Charter &amp; Leadership</span>
                <span
                  className="material-symbols-outlined text-title-lg"
                  aria-hidden="true"
                >
                  north_east
                </span>
              </Link>
            </div>
          </div>

          <div data-stagger="rows" className="lg:col-span-7 bg-light-surface-container-lowest border border-light-outline-variant rounded-sm divide-y divide-light-outline-variant">
            <div className="p-gutter-lg flex flex-col sm:flex-row sm:items-center justify-between gap-gutter-sm">
              <div>
                <span className="font-mono text-label-sm uppercase text-ieee-blue">
                  ACTIVE MEMBERS
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-0.5">
                  Source: Chapter Roster · Academic Year 2025/2026
                </p>
              </div>
              <div className="flex items-center gap-gutter-md">
                <span className="font-headline text-headline-md text-light-primary tabular-nums">
                  —
                </span>
                <span className="px-2 py-0.5 rounded-xs border border-ras-amber font-mono text-label-sm text-light-primary">
                  [TO CONFIRM]
                </span>
              </div>
            </div>

            <div className="p-gutter-lg flex flex-col sm:flex-row sm:items-center justify-between gap-gutter-sm">
              <div>
                <span className="font-mono text-label-sm uppercase text-ras-purple">
                  EVENTS &amp; WORKSHOPS ORGANIZED
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-0.5">
                  Including National Robotics Weekend (NRW) &amp; technical
                  bootcamps
                </p>
              </div>
              <div className="flex items-center gap-gutter-md">
                <span className="font-headline text-headline-md text-light-primary tabular-nums">
                  —
                </span>
                <span className="px-2 py-0.5 rounded-xs border border-ras-amber font-mono text-label-sm text-light-primary">
                  [TO CONFIRM]
                </span>
              </div>
            </div>

            <div className="p-gutter-lg flex flex-col sm:flex-row sm:items-center justify-between gap-gutter-sm">
              <div>
                <span className="font-mono text-label-sm uppercase text-ras-crimson">
                  COMPLETED HARDWARE PROJECTS
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-0.5">
                  Competition platforms &amp; autonomous research testbeds
                </p>
              </div>
              <div className="flex items-center gap-gutter-md">
                <span className="font-headline text-headline-md text-light-primary tabular-nums">
                  —
                </span>
                <span className="px-2 py-0.5 rounded-xs border border-ras-amber font-mono text-label-sm text-light-primary">
                  [TO CONFIRM]
                </span>
              </div>
            </div>

            <div className="p-gutter-lg flex flex-col sm:flex-row sm:items-center justify-between gap-gutter-sm">
              <div>
                <span className="font-mono text-label-sm uppercase text-light-primary">
                  CHAPTER FOUNDING YEAR
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-0.5">
                  INSAT Student Branch · IEEE Tunisia Section
                </p>
              </div>
              <div className="flex items-center gap-gutter-md">
                <span className="font-headline text-headline-md text-light-primary tabular-nums">
                  —
                </span>
                <span className="px-2 py-0.5 rounded-xs border border-ras-amber font-mono text-label-sm text-light-primary">
                  [TO CONFIRM]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-light-outline-variant bg-light-surface">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-gutter-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md">
            <div>
              <span className="font-mono text-label-sm uppercase text-ieee-blue">
                02 // TECHNICAL DOMAINS
              </span>
              <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary mt-1">
                Four Core Engineering Disciplines
              </h2>
            </div>
            <Link
              href="/domains-teams"
              className="inline-flex items-center gap-2 font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
            >
              <span>Explore All Domains &amp; Lab Equipment</span>
              <span
                className="material-symbols-outlined text-title-lg"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          </div>

          <div data-stagger="domains" className="grid grid-cols-1 md:grid-cols-2 gap-px bg-light-outline-variant border border-light-outline-variant rounded-sm overflow-hidden">
            <Link
              href="/domains-teams#mobile-robotics"
              className="group bg-light-surface-container-lowest hover:bg-light-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ieee-blue p-gutter-xl flex flex-col justify-between gap-gutter-lg transition-colors duration-state-change"
            >
              <div className="flex items-start justify-between gap-gutter-md">
                <div className="flex flex-col gap-gutter-sm">
                  <span className="font-mono text-label-sm uppercase text-ieee-blue">
                    01 // AUTONOMOUS NAVIGATION
                  </span>
                  <h3 className="font-headline text-headline-md text-light-primary group-hover:text-ieee-blue transition-colors">
                    Mobile Robotics
                  </h3>
                  <p className="font-body text-body-md text-light-on-surface-variant max-w-prose">
                    ROS2 navigation stacks, LiDAR SLAM, path planning, and
                    differential-drive competition bases.
                  </p>
                </div>
                <span
                  className="material-symbols-outlined text-headline-md text-ieee-blue shrink-0"
                  aria-hidden="true"
                >
                  precision_manufacturing
                </span>
              </div>
              <div className="pt-gutter-md border-t border-light-outline-variant flex items-center justify-between font-mono text-label-sm text-light-on-surface-variant">
                <span>STACK: ROS2 · C++ · NAV2 · GAZEBO</span>
                <span
                  className="text-ieee-blue group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </Link>

            <Link
              href="/domains-teams#embedded"
              className="group bg-light-surface-container-lowest hover:bg-light-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ieee-blue p-gutter-xl flex flex-col justify-between gap-gutter-lg transition-colors duration-state-change"
            >
              <div className="flex items-start justify-between gap-gutter-md">
                <div className="flex flex-col gap-gutter-sm">
                  <span className="font-mono text-label-sm uppercase text-ras-purple">
                    02 // REAL-TIME HARDWARE
                  </span>
                  <h3 className="font-headline text-headline-md text-light-primary group-hover:text-ras-purple transition-colors">
                    Embedded &amp; PCB
                  </h3>
                  <p className="font-body text-body-md text-light-on-surface-variant max-w-prose">
                    STM32 &amp; NXP microcontrollers, real-time firmware, motor
                    drivers, and custom multi-layer PCB design.
                  </p>
                </div>
                <span
                  className="material-symbols-outlined text-headline-md text-ras-purple shrink-0"
                  aria-hidden="true"
                >
                  memory
                </span>
              </div>
              <div className="pt-gutter-md border-t border-light-outline-variant flex items-center justify-between font-mono text-label-sm text-light-on-surface-variant">
                <span>STACK: STM32 · NXP · KICAD · FREERTOS</span>
                <span
                  className="text-ras-purple group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </Link>

            <Link
              href="/domains-teams#vision"
              className="group bg-light-surface-container-lowest hover:bg-light-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ieee-blue p-gutter-xl flex flex-col justify-between gap-gutter-lg transition-colors duration-state-change"
            >
              <div className="flex items-start justify-between gap-gutter-md">
                <div className="flex flex-col gap-gutter-sm">
                  <span className="font-mono text-label-sm uppercase text-ras-crimson">
                    03 // PERCEPTION PIPELINES
                  </span>
                  <h3 className="font-headline text-headline-md text-light-primary group-hover:text-ras-crimson transition-colors">
                    Vision &amp; Edge AI
                  </h3>
                  <p className="font-body text-body-md text-light-on-surface-variant max-w-prose">
                    Optical lane detection, object tracking, edge neural
                    inference, and camera-LiDAR sensor fusion.
                  </p>
                </div>
                <span
                  className="material-symbols-outlined text-headline-md text-ras-crimson shrink-0"
                  aria-hidden="true"
                >
                  visibility
                </span>
              </div>
              <div className="pt-gutter-md border-t border-light-outline-variant flex items-center justify-between font-mono text-label-sm text-light-on-surface-variant">
                <span>STACK: OPENCV · PYTORCH · ONNX · JETSON</span>
                <span
                  className="text-ras-crimson group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </Link>

            <Link
              href="/domains-teams#mechanical"
              className="group bg-light-surface-container-lowest hover:bg-light-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ieee-blue p-gutter-xl flex flex-col justify-between gap-gutter-lg transition-colors duration-state-change"
            >
              <div className="flex items-start justify-between gap-gutter-md">
                <div className="flex flex-col gap-gutter-sm">
                  <span className="font-mono text-label-sm uppercase text-light-primary">
                    04 // MECHATRONICS &amp; CAD
                  </span>
                  <h3 className="font-headline text-headline-md text-light-primary group-hover:text-ieee-blue transition-colors">
                    Mechanical Design
                  </h3>
                  <p className="font-body text-body-md text-light-on-surface-variant max-w-prose">
                    SolidWorks assemblies, 3D-printed competition actuators,
                    PID/LQR control loops, and kinematics.
                  </p>
                </div>
                <span
                  className="material-symbols-outlined text-headline-md text-light-primary shrink-0"
                  aria-hidden="true"
                >
                  settings_suggest
                </span>
              </div>
              <div className="pt-gutter-md border-t border-light-outline-variant flex items-center justify-between font-mono text-label-sm text-light-on-surface-variant">
                <span>STACK: SOLIDWORKS · MATLAB · PID · 3D PRINT</span>
                <span
                  className="text-light-primary group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-light-outline-variant bg-light-surface-container-low">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-gutter-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md">
            <div>
              <span className="font-mono text-label-sm uppercase text-ras-crimson">
                03 // FEATURED ENGINEERING
              </span>
              <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary mt-1">
                Competition &amp; Lab Builds
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
            >
              <span>View Full Project Portfolio</span>
              <span
                className="material-symbols-outlined text-title-lg"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch">
            <article data-tilt className="lg:col-span-8 bg-light-surface-container-lowest border border-light-outline-variant rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div
                  role="img"
                  data-mask="left"
                  aria-label="Image placeholder: NXP Cup Tunisia autonomous vehicle photography to be supplied"
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
                    className="material-symbols-outlined text-headline-lg text-ieee-blue mb-gutter-sm"
                    aria-hidden="true"
                  >
                    photo_camera
                  </span>
                  <span className="font-mono text-label-sm uppercase tracking-wider text-light-primary">
                    IMAGE PLACEHOLDER · PLATE 02 · 16:9
                  </span>
                  <p className="font-body text-body-sm text-light-on-surface-variant mt-1 max-w-[34ch]">
                    Replace with verified NXP Cup Tunisia vehicle photograph.
                  </p>
                </div>
                <div className="p-gutter-xl flex flex-col gap-gutter-md">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-label-sm uppercase text-ieee-blue">
                      NXP CUP TUNISIA // EMBEDDED + VISION
                    </span>
                    <span className="px-2 py-0.5 rounded-xs bg-light-secondary-container text-light-on-secondary-container font-mono text-label-sm">
                      LEAD PLATFORM
                    </span>
                  </div>
                  <h3 className="font-headline text-headline-lg-mobile lg:text-headline-md text-light-primary">
                    Autonomous Track Race Vehicle
                  </h3>
                  <p className="font-body text-body-md text-light-on-surface-variant max-w-prose">
                    Competition-scale autonomous model car developed by INSAT
                    student engineers for NXP Cup track challenges, integrating
                    embedded control and optical sensing.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-gutter-md pt-gutter-md border-t border-light-outline-variant font-mono text-label-sm">
                    <div>
                      <span className="text-light-on-surface-variant block">
                        COMPUTE
                      </span>
                      <span className="text-light-primary">
                        [TO CONFIRM: MCU]
                      </span>
                    </div>
                    <div>
                      <span className="text-light-on-surface-variant block">
                        SENSING
                      </span>
                      <span className="text-light-primary">
                        [TO CONFIRM: OPTICS]
                      </span>
                    </div>
                    <div>
                      <span className="text-light-on-surface-variant block">
                        CONTROL
                      </span>
                      <span className="text-light-primary">
                        [TO CONFIRM: CONTROL]
                      </span>
                    </div>
                    <div>
                      <span className="text-light-on-surface-variant block">
                        OUTCOME
                      </span>
                      <span className="text-ieee-blue">[TO CONFIRM]</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-gutter-xl py-gutter-md border-t border-light-outline-variant bg-light-surface-container-low flex items-center justify-between">
                <span className="font-mono text-label-sm text-light-on-surface-variant">
                  DOC STATUS: [TO CONFIRM]
                </span>
                <Link
                  href="/projects"
                  className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                >
                  Inspect Build Specs →
                </Link>
              </div>
            </article>

            <div className="lg:col-span-4 flex flex-col gap-gutter-lg">
              <article className="flex-1 bg-light-surface-container-lowest border border-light-outline-variant rounded-sm overflow-hidden flex flex-col justify-between">
                <div>
                  <div
                    role="img"
                    data-mask="up"
                    aria-label="Image placeholder: EUROBOT competition robot photography to be supplied"
                    className="w-full aspect-[4/3] bg-light-surface-container-low border-b border-light-outline-variant flex flex-col items-center justify-center p-gutter-lg text-center relative"
                  >
                    <span
                      className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-ras-purple"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-ras-purple"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-ras-purple"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-ras-purple"
                      aria-hidden="true"
                    ></span>

                    <span
                      className="material-symbols-outlined text-headline-md text-ras-purple mb-1"
                      aria-hidden="true"
                    >
                      photo_camera
                    </span>
                    <span className="font-mono text-label-sm uppercase tracking-wider text-light-primary">
                      PLACEHOLDER · PLATE 03 · 4:3
                    </span>
                    <p className="font-body text-body-sm text-light-on-surface-variant mt-0.5 max-w-[24ch]">
                      Replace with verified EUROBOT robot photo.
                    </p>
                  </div>
                  <div className="p-gutter-lg flex flex-col gap-gutter-xs">
                    <span className="font-mono text-label-sm uppercase text-ras-purple">
                      EUROBOT // MECHATRONICS
                    </span>
                    <h3 className="font-headline text-title-lg text-light-primary">
                      EUROBOT Robot
                    </h3>
                    <p className="font-body text-body-sm text-light-on-surface-variant text-pretty">
                      Autonomous competition robot engineered to meet annual
                      EUROBOT mechanical and strategy rules.
                    </p>
                  </div>
                </div>
                <div className="px-gutter-lg py-gutter-sm border-t border-light-outline-variant flex items-center justify-between">
                  <span className="font-mono text-label-sm text-light-on-surface-variant">
                    [TO CONFIRM]
                  </span>
                  <Link
                    href="/projects"
                    className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                  >
                    Read Brief →
                  </Link>
                </div>
              </article>

              <article className="flex-1 bg-light-surface-container-lowest border border-light-outline-variant rounded-sm overflow-hidden flex flex-col justify-between">
                <div>
                  <div
                    role="img"
                    data-mask="down"
                    aria-label="Image placeholder: Micromouse maze-solving robot photography to be supplied"
                    className="w-full aspect-[4/3] bg-light-surface-container-low border-b border-light-outline-variant flex flex-col items-center justify-center p-gutter-lg text-center relative"
                  >
                    <span
                      className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-ras-crimson"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-ras-crimson"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-ras-crimson"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-ras-crimson"
                      aria-hidden="true"
                    ></span>

                    <span
                      className="material-symbols-outlined text-headline-md text-ras-crimson mb-1"
                      aria-hidden="true"
                    >
                      photo_camera
                    </span>
                    <span className="font-mono text-label-sm uppercase tracking-wider text-light-primary">
                      PLACEHOLDER · PLATE 04 · 4:3
                    </span>
                    <p className="font-body text-body-sm text-light-on-surface-variant mt-0.5 max-w-[24ch]">
                      Replace with verified Micromouse photo.
                    </p>
                  </div>
                  <div className="p-gutter-lg flex flex-col gap-gutter-xs">
                    <span className="font-mono text-label-sm uppercase text-ras-crimson">
                      MICROMOUSE // ALGORITHMS
                    </span>
                    <h3 className="font-headline text-title-lg text-light-primary">
                      Autonomous Maze Solver
                    </h3>
                    <p className="font-body text-body-sm text-light-on-surface-variant">
                      Compact autonomous Micromouse initiative focused on
                      high-speed maze exploration and path planning.
                    </p>
                  </div>
                </div>
                <div className="px-gutter-lg py-gutter-sm border-t border-light-outline-variant flex items-center justify-between">
                  <span className="font-mono text-label-sm text-light-on-surface-variant">
                    [TO CONFIRM]
                  </span>
                  <Link
                    href="/projects"
                    className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                  >
                    Read Brief →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ieee-navy text-light-on-primary border-b border-light-outline-variant">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-gutter-xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-gutter-md border-b border-ieee-blue pb-gutter-lg">
            <div className="flex flex-col gap-gutter-sm">
              <div className="inline-flex items-center gap-gutter-sm">
                <span className="ieee-wedge-45 bg-ras-amber text-light-primary pl-gutter-md pr-gutter-lg py-1 font-mono text-label-sm uppercase font-semibold">
                  FLAGSHIP MILESTONE
                </span>
                <span className="font-mono text-label-sm uppercase text-light-on-primary-container">
                  INSAT TUNIS · ANNUAL GATHERING
                </span>
              </div>
              <h2 data-kinetic className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance">
                National Robotics Weekend (NRW)
              </h2>
            </div>
            <Link
              href="/impact"
              className="font-label text-label-lg text-ras-amber hover:text-light-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber shrink-0"
            >
              View Verified Impact &amp; Press →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
            <div className="lg:col-span-7">
              <div data-parallax="12" className="border border-ieee-blue rounded-sm overflow-hidden bg-light-primary">
                <div
                  role="img"
                  data-mask="center"
                  aria-label="Image placeholder: National Robotics Weekend competition photography to be supplied"
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
                    IMAGE PLACEHOLDER · PLATE 05 · 16:10
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

            <div className="lg:col-span-5 flex flex-col gap-gutter-lg">
              <p className="font-body text-body-lg text-light-on-primary-container text-pretty">
                IEEE RAS INSAT’s flagship national robotics event—uniting
                engineering students, hardware teams, technical speakers, and
                industry sponsors across Tunisia.
              </p>

              <div className="divide-y divide-ieee-blue border-y border-ieee-blue">
                <div className="py-gutter-sm flex items-center justify-between">
                  <span className="font-mono text-label-sm uppercase text-light-on-primary-container">
                    NEXT EDITION DATE
                  </span>
                  <span className="font-mono text-body-md text-ras-amber">
                    [TO CONFIRM]
                  </span>
                </div>
                <div className="py-gutter-sm flex items-center justify-between">
                  <span className="font-mono text-label-sm uppercase text-light-on-primary-container">
                    EDITIONS HELD
                  </span>
                  <span className="font-mono text-body-md text-light-on-primary">
                    [TO CONFIRM]
                  </span>
                </div>
                <div className="py-gutter-sm flex items-center justify-between">
                  <span className="font-mono text-label-sm uppercase text-light-on-primary-container">
                    VERIFIED ATTENDANCE
                  </span>
                  <span className="font-mono text-body-md text-light-on-primary">
                    [TO CONFIRM]
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-gutter-md">
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2 px-gutter-lg py-gutter-md rounded-sm bg-ras-amber text-light-primary font-label text-label-lg hover:bg-ras-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber transition-colors duration-state-change"
                >
                  <span>View Events &amp; NRW Archive</span>
                  <span
                    className="material-symbols-outlined text-title-lg"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/partners#partner-form"
                  className="inline-flex items-center justify-center px-gutter-lg py-gutter-md rounded-sm border border-light-on-primary-container text-light-on-primary font-label text-label-lg hover:bg-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber transition-colors duration-state-change"
                >
                  <span>Sponsor NRW</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-surface">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-section-sm">
          <div className="border border-light-outline-variant rounded-sm p-gutter-xl lg:p-10 bg-light-surface-container-low grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
            <div className="lg:col-span-5 flex flex-col gap-gutter-sm">
              <span className="font-mono text-label-sm uppercase text-ieee-blue">
                04 // PARTNERS &amp; SPONSORS
              </span>
              <h2 className="font-headline text-headline-md text-light-primary text-balance">
                Built with industry &amp; institutional support.
              </h2>
              <p className="font-body text-body-sm text-light-on-surface-variant text-pretty">
                Partner logos are published only with written authorization.{" "}
                <span className="font-mono text-ieee-blue">
                  [TO CONFIRM: ACTIVE SPONSOR LIST]
                </span>
              </p>
            </div>
            <div data-stagger="meta" className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-gutter-md">
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-1.5">
                <span className="font-mono text-label-sm text-ras-purple">
                  NRW SPONSORSHIP
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant text-pretty">
                  Event visibility, exhibition booths, and technical speaking
                  slots.
                </p>
              </div>
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-1.5">
                <span className="font-mono text-label-sm text-ieee-blue">
                  WORKSHOPS &amp; TALENT
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant text-pretty">
                  Technical masterclasses and INSAT recruitment.
                </p>
              </div>
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-1.5">
                <span className="font-mono text-label-sm text-ras-crimson">
                  LAB GRANTS
                </span>
                <p className="font-body text-body-sm text-light-on-surface-variant text-pretty">
                  Hardware, sensors, and competition tooling.
                </p>
              </div>
            </div>
          </div>

          <div data-stagger="signature" className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-xl flex flex-col justify-between gap-gutter-lg">
              <div className="flex flex-col gap-gutter-sm">
                <span className="font-mono text-label-sm uppercase text-ras-purple">
                  FOR INSAT STUDENTS
                </span>
                <h2 className="font-headline text-headline-md text-light-primary">
                  Build real hardware. Lead real teams.
                </h2>
                <p className="font-body text-body-md text-light-on-surface-variant">
                  Join technical project groups or non-technical poles
                  (communication, partnerships, logistics, design). Open to
                  INSAT students across all engineering years.
                </p>
              </div>
              <div>
                <Link
                  href="/join-us"
                  className="inline-flex items-center gap-2 px-gutter-lg py-gutter-md rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-ieee-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
                >
                  <span>Apply for Membership</span>
                  <span
                    className="material-symbols-outlined text-title-lg"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-light-surface-container-low border border-ieee-blue rounded-sm p-gutter-xl flex flex-col justify-between gap-gutter-lg">
              <div className="flex flex-col gap-gutter-sm">
                <span className="font-mono text-label-sm uppercase text-ieee-blue">
                  FOR INDUSTRY &amp; INSTITUTIONS
                </span>
                <h2 className="font-headline text-headline-md text-light-primary">
                  Collaborate with Tunisia’s next robotics engineers.
                </h2>
                <p className="font-body text-body-md text-light-on-surface-variant">
                  Sponsor National Robotics Weekend, host technical workshops,
                  submit engineering challenges, or connect directly with top
                  INSAT talent.
                </p>
              </div>
              <div>
                <Link
                  href="/partners#partner-form"
                  className="inline-flex items-center gap-2 px-gutter-md py-2.5 rounded-sm border border-light-primary bg-light-surface-container-lowest text-light-primary font-label text-label-lg hover:bg-light-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
                >
                  <span>Request Sponsorship Dossier</span>
                  <span
                    className="material-symbols-outlined text-title-lg"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
