import Link from "next/link";
import type { Metadata } from "next";
import FormHandler from "@/components/behaviors/FormHandler";

export const metadata: Metadata = {
  title: "Join Us \u2014 Recruitment | IEEE RAS INSAT",
};

export default function JoinUsPage() {
  return (
    <>
      <main className="flex-1">
        <section className="border-b border-light-outline-variant bg-light-surface">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
            <div className="lg:col-span-7 flex flex-col gap-gutter-md">
              <span className="font-mono text-label-sm uppercase text-ras-purple">
                STUDENT RECRUITMENT // INSAT TUNIS
              </span>
              <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-primary text-balance">
                Build robots. Run flagship events. Grow with IEEE RAS INSAT.
              </h1>
              <p className="font-body text-body-lg text-light-on-surface-variant max-w-prose">
                Whether you want to design PCBs, program autonomous navigation,
                or lead communications, partnerships, and National Robotics
                Weekend logistics—there is a place for you here.
              </p>
            </div>
            <div data-stagger="steps" className="lg:col-span-5 bg-light-surface-container-low border border-light-outline-variant rounded-sm p-gutter-xl flex flex-col gap-gutter-sm">
              <span className="font-mono text-label-sm uppercase text-ieee-blue">
                RECRUITMENT PROCESS
              </span>
              <p className="font-body text-body-sm text-light-on-surface">
                <strong>01. Application</strong> — Submit your profile &amp;
                track interests.
              </p>
              <p className="font-body text-body-sm text-light-on-surface">
                <strong>02. Interview / Orientation</strong> — Meet team leads
                at INSAT.
              </p>
              <p className="font-body text-body-sm text-light-on-surface">
                <strong>03. Onboarding</strong> — Join a working group &amp;
                IEEE RAS roster.
              </p>
              <p className="font-mono text-label-sm text-light-on-surface-variant mt-2">
                NEXT CAMPAIGN: [TO CONFIRM] · IEEE FEE: [TO CONFIRM]
              </p>
            </div>
          </div>
        </section>

        <section className="bg-light-surface-container-low">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl">
            <div className="lg:col-span-5 flex flex-col gap-gutter-md">
              <span className="font-mono text-label-sm uppercase text-ras-crimson">
                OPPORTUNITIES
              </span>
              <h2 className="font-headline text-headline-md text-light-primary">
                Technical &amp; Non-Technical Poles
              </h2>
              <div data-rise className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg">
                <h3 className="font-headline text-title-lg text-light-primary">
                  Technical Working Groups
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                  Mobile Robotics (ROS2), Embedded Systems &amp; PCB, Computer
                  Vision &amp; AI, Mechanical CAD &amp; Control.
                </p>
              </div>
              <div data-rise className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg">
                <h3 className="font-headline text-title-lg text-light-primary">
                  Chapter Operations &amp; Media
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                  Partnerships &amp; Sponsoring, Event Logistics (NRW), Visual
                  Design, Media &amp; Communications.
                </p>
              </div>
            </div>

            <form
              id="join-application-form"
              className="lg:col-span-7 bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-xl grid grid-cols-1 sm:grid-cols-2 gap-gutter-md"
            >
              <div className="sm:col-span-2">
                <h2 className="font-headline text-headline-sm text-light-primary">
                  Membership Application
                </h2>
              </div>
              <div>
                <label
                  htmlFor="j-name"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Full Name
                </label>
                <input
                  id="j-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md"
                />
              </div>
              <div>
                <label
                  htmlFor="j-email"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Email
                </label>
                <input
                  id="j-email"
                  type="email"
                  required
                  placeholder="name@insat.ucar.tn"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md"
                />
              </div>
              <div>
                <label
                  htmlFor="j-major"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Major &amp; Year at INSAT
                </label>
                <input
                  id="j-major"
                  type="text"
                  required
                  placeholder="e.g. IIA3 / GL2 / MPI"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md"
                />
              </div>
              <div>
                <label
                  htmlFor="j-track"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Primary Track Interest
                </label>
                <select
                  id="j-track"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md"
                >
                  <option>Mobile Robotics &amp; ROS2</option>
                  <option>Embedded Systems &amp; PCB</option>
                  <option>Computer Vision &amp; AI</option>
                  <option>Mechanical CAD &amp; Control</option>
                  <option>
                    Partnerships / Communication / Design / Logistics
                  </option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="j-motivation"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Skills &amp; Motivation
                </label>
                <textarea
                  id="j-motivation"
                  rows={3}
                  placeholder="What would you like to build or contribute?"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md"
                ></textarea>
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-gutter-md">
                <button
                  type="submit"
                  className="px-gutter-lg py-gutter-md rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-ieee-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
                >
                  Submit Application
                </button>
                <span
                  id="join-form-status"
                  className="font-mono text-body-sm text-ieee-blue hidden"
                >
                  Application received — recruitment team will contact you.
                </span>
              </div>
            </form>
          </div>
        </section>
      </main>
      <FormHandler
        formId="join-application-form"
        statusId="join-form-status"
        endpoint="/api/join"
      />
    </>
  );
}
