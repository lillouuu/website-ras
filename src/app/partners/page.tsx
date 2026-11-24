import Link from "next/link";
import type { Metadata } from "next";
import FormHandler from "@/components/behaviors/FormHandler";

export const metadata: Metadata = {
  title: "Partners \u2014 Sponsorship & Collaboration | IEEE RAS INSAT",
};

export default function PartnersPage() {
  return (
    <>
      <main className="flex-1">
        <section className="bg-ieee-navy text-light-on-primary border-b border-ieee-blue">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
            <div className="lg:col-span-7 flex flex-col gap-gutter-md">
              <span className="font-mono text-label-sm uppercase text-ras-amber">
                INDUSTRY &amp; INSTITUTIONAL PARTNERSHIPS
              </span>
              <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance">
                Invest in INSAT’s robotics talent and hardware innovation.
              </h1>
              <p className="font-body text-body-lg text-light-on-primary-container max-w-prose">
                Partnering with the IEEE Robotics and Automation® Society (IEEE
                RAS) INSAT Student Branch Chapter connects your organization
                with top engineering students, national event visibility, and
                applied R&amp;D challenges.
              </p>
              <div className="flex flex-wrap gap-gutter-md pt-gutter-xs">
                <a
                  href="#partner-form"
                  className="px-gutter-lg py-gutter-md rounded-sm bg-ras-amber text-light-primary font-label text-label-lg hover:bg-ras-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber transition-colors duration-state-change"
                >
                  Request Sponsorship Proposal
                </a>
                <Link
                  href="/impact"
                  className="px-gutter-lg py-gutter-md rounded-sm border border-light-on-primary-container text-light-on-primary font-label text-label-lg hover:bg-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ras-amber transition-colors duration-state-change"
                >
                  Review Our Track Record
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-light-primary border border-ieee-blue rounded-sm p-gutter-xl flex flex-col gap-gutter-md">
              <span className="font-mono text-label-sm uppercase text-ras-amber">
                OUR REACH IN NUMBERS
              </span>
              <div className="grid grid-cols-2 gap-gutter-md">
                <div className="border-b border-ieee-blue pb-gutter-sm">
                  <span className="font-headline text-headline-md text-light-on-primary">
                    [TO CONFIRM]
                  </span>
                  <p className="font-body text-body-sm text-light-on-primary-container">
                    Active Chapter Members
                  </p>
                </div>
                <div className="border-b border-ieee-blue pb-gutter-sm">
                  <span className="font-headline text-headline-md text-light-on-primary">
                    [TO CONFIRM]
                  </span>
                  <p className="font-body text-body-sm text-light-on-primary-container">
                    NRW Event Attendees
                  </p>
                </div>
                <div>
                  <span className="font-headline text-headline-md text-light-on-primary">
                    [TO CONFIRM]
                  </span>
                  <p className="font-body text-body-sm text-light-on-primary-container">
                    Social &amp; Campus Reach
                  </p>
                </div>
                <div>
                  <span className="font-headline text-headline-md text-light-on-primary">
                    [TO CONFIRM]
                  </span>
                  <p className="font-body text-body-sm text-light-on-primary-container">
                    Partner Organizations
                  </p>
                </div>
              </div>
              <p className="font-mono text-label-sm text-light-on-primary-container">
                POST-EVENT REPORTING COMMITMENT: [TO CONFIRM]
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-light-outline-variant bg-light-surface">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-gutter-xl">
            <div>
              <span className="font-mono text-label-sm uppercase text-ieee-blue">
                COLLABORATION FORMATS
              </span>
              <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary mt-1">
                How Companies Work With Us
              </h2>
            </div>

            <div data-stagger="rise" className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
                <span className="font-mono text-label-sm text-ras-purple">
                  01 // EVENT SPONSORSHIP
                </span>
                <h3 className="font-headline text-title-lg text-light-primary">
                  National Robotics Weekend (NRW)
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Brand visibility, speaking slots, booth presence, and direct
                  access to competing student teams.
                </p>
              </div>
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
                <span className="font-mono text-label-sm text-ieee-blue">
                  02 // TECHNICAL WORKSHOPS &amp; TALENT
                </span>
                <h3 className="font-headline text-title-lg text-light-primary">
                  Workshops &amp; Recruitment Access
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Host engineering masterclasses, evaluate hardware challenges,
                  and connect with INSAT interns &amp; graduates.
                </p>
              </div>
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
                <span className="font-mono text-label-sm text-ras-crimson">
                  03 // HARDWARE &amp; IN-KIND
                </span>
                <h3 className="font-headline text-title-lg text-light-primary">
                  Lab Equipment &amp; Component Grants
                </h3>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Equip our robotics lab with microcontrollers, sensors, or
                  tooling used across competition builds.
                </p>
              </div>
            </div>

            <div className="border border-light-outline-variant rounded-sm overflow-x-auto bg-light-surface-container-lowest">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-light-outline-variant bg-light-surface-container-low">
                    <th className="p-gutter-md font-mono text-label-sm uppercase text-light-on-surface-variant">
                      PACKAGE TIER
                    </th>
                    <th className="p-gutter-md font-mono text-label-sm uppercase text-light-on-surface-variant">
                      CONTRIBUTION
                    </th>
                    <th className="p-gutter-md font-mono text-label-sm uppercase text-light-on-surface-variant">
                      KEY DELIVERABLES
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-outline-variant font-body text-body-sm">
                  <tr>
                    <td className="p-gutter-md font-semibold text-light-primary">
                      Principal / Gold Partner
                    </td>
                    <td className="p-gutter-md font-mono">On request</td>
                    <td className="p-gutter-md text-light-on-surface-variant">
                      Headline NRW placement, keynote slot, dedicated workshop,
                      CV book access [TO CONFIRM]
                    </td>
                  </tr>
                  <tr>
                    <td className="p-gutter-md font-semibold text-light-primary">
                      Technical / Silver Partner
                    </td>
                    <td className="p-gutter-md font-mono">On request</td>
                    <td className="p-gutter-md text-light-on-surface-variant">
                      Logo on event collateral &amp; website, booth space,
                      competition jury seat [TO CONFIRM]
                    </td>
                  </tr>
                  <tr>
                    <td className="p-gutter-md font-semibold text-light-primary">
                      In-Kind / Hardware Supporter
                    </td>
                    <td className="p-gutter-md font-mono">
                      Equipment / Components
                    </td>
                    <td className="p-gutter-md text-light-on-surface-variant">
                      Project build attribution, lab recognition, social media
                      feature [TO CONFIRM]
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="partner-form" className="bg-light-surface-container-low">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl">
            <div className="lg:col-span-5 flex flex-col gap-gutter-md">
              <span className="font-mono text-label-sm uppercase text-ras-purple">
                NEXT STEP
              </span>
              <h2 className="font-headline text-headline-md text-light-primary">
                Request the Sponsorship Proposal
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Share your organization’s goals and our partnerships lead will
                send the detailed sponsorship dossier and schedule an
                introductory call.
              </p>
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-xs">
                <span className="font-mono text-label-sm uppercase text-light-on-surface-variant">
                  PARTNERSHIPS CONTACT
                </span>
                <p className="font-body text-body-sm font-semibold text-light-primary">
                  [TO CONFIRM] Partnerships Lead
                </p>
                <p className="font-mono text-body-sm text-ieee-blue">
                  [TO CONFIRM: partners@ras-insat.org]
                </p>
                <p className="font-mono text-label-sm text-light-on-surface-variant mt-1">
                  RESPONSE TIME: [TO CONFIRM: 48H]
                </p>
              </div>
            </div>

            <form
              id="partner-request-form"
              className="lg:col-span-7 bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-xl grid grid-cols-1 sm:grid-cols-2 gap-gutter-md"
            >
              <div>
                <label
                  htmlFor="p-name"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Full Name
                </label>
                <input
                  id="p-name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md focus:border-ieee-blue focus:ring-ieee-blue"
                />
              </div>
              <div>
                <label
                  htmlFor="p-company"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Company / Institution
                </label>
                <input
                  id="p-company"
                  type="text"
                  required
                  placeholder="Organization name"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md focus:border-ieee-blue focus:ring-ieee-blue"
                />
              </div>
              <div>
                <label
                  htmlFor="p-role"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Role / Title
                </label>
                <input
                  id="p-role"
                  type="text"
                  placeholder="e.g. Engineering Manager"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md focus:border-ieee-blue focus:ring-ieee-blue"
                />
              </div>
              <div>
                <label
                  htmlFor="p-email"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Work Email
                </label>
                <input
                  id="p-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md focus:border-ieee-blue focus:ring-ieee-blue"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="p-interest"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Collaboration Interest
                </label>
                <select
                  id="p-interest"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md focus:border-ieee-blue focus:ring-ieee-blue"
                >
                  <option>NRW Event Sponsorship</option>
                  <option>Technical Workshop / Hackathon Challenge</option>
                  <option>Hardware / In-Kind Donation</option>
                  <option>Recruitment &amp; Mentorship</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="p-msg"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Message
                </label>
                <textarea
                  id="p-msg"
                  rows={3}
                  placeholder="Tell us about your partnership objectives..."
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md focus:border-ieee-blue focus:ring-ieee-blue"
                ></textarea>
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-gutter-md">
                <button
                  type="submit"
                  className="px-gutter-lg py-gutter-md rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-ieee-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
                >
                  Request Proposal Dossier
                </button>
                <span
                  id="partner-form-status"
                  className="font-mono text-body-sm text-ieee-blue hidden"
                >
                  Request logged — our partnerships lead will respond shortly.
                </span>
              </div>
            </form>
          </div>
        </section>
      </main>
      <FormHandler
        formId="partner-request-form"
        statusId="partner-form-status"
        endpoint="/api/partner"
      />
    </>
  );
}
