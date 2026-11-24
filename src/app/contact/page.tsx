import Link from "next/link";
import type { Metadata } from "next";
import FormHandler from "@/components/behaviors/FormHandler";

export const metadata: Metadata = {
  title: "Contact \u2014 IEEE RAS INSAT",
};

export default function ContactPage() {
  return (
    <>
      <main className="flex-1">
        <section className="bg-light-surface">
          <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl">
            <div className="lg:col-span-5 flex flex-col gap-gutter-lg">
              <div>
                <span className="font-mono text-label-sm uppercase text-ieee-blue">
                  CONTACT ROUTING
                </span>
                <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-primary mt-1">
                  Reach the Right Team
                </h1>
                <p className="font-body text-body-md text-light-on-surface-variant mt-2">
                  Typical response time: [TO CONFIRM: 24–48 business hours].
                </p>
              </div>

              <div className="bg-light-surface-container-low border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-md">
                <div>
                  <span className="font-mono text-label-sm uppercase text-light-on-surface-variant block">
                    GENERAL INQUIRIES
                  </span>
                  <span className="font-mono text-body-sm text-light-primary">
                    [TO CONFIRM: info@ras-insat.org]
                  </span>
                </div>
                <div>
                  <span className="font-mono text-label-sm uppercase text-light-on-surface-variant block">
                    PARTNERSHIPS &amp; SPONSORING
                  </span>
                  <span className="font-mono text-body-sm text-ieee-blue">
                    [TO CONFIRM: partners@ras-insat.org]
                  </span>
                </div>
                <div>
                  <span className="font-mono text-label-sm uppercase text-light-on-surface-variant block">
                    STUDENT RECRUITMENT
                  </span>
                  <Link
                    href="/join-us"
                    className="font-label text-label-lg text-ras-purple hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue"
                  >
                    Apply via Join Us Page →
                  </Link>
                </div>
                <div>
                  <span className="font-mono text-label-sm uppercase text-light-on-surface-variant block">
                    MEDIA &amp; PRESS
                  </span>
                  <span className="font-mono text-body-sm text-light-primary">
                    [TO CONFIRM: press@ras-insat.org]
                  </span>
                </div>
              </div>

              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-xs">
                <span className="font-mono text-label-sm uppercase text-ras-crimson">
                  CAMPUS LOCATION
                </span>
                <p className="font-body text-body-md font-semibold text-light-primary">
                  INSAT — National Institute of Applied Science and Technology
                </p>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Centre Urbain Nord, BP 676, 1080 Tunis, Tunisia · Lab Room:
                  [TO CONFIRM]
                </p>
              </div>
            </div>

            <form
              id="contact-form"
              className="lg:col-span-7 bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-xl flex flex-col gap-gutter-md"
            >
              <h2 className="font-headline text-headline-sm text-light-primary">
                Send a Direct Message
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
                <div>
                  <label
                    htmlFor="c-name"
                    className="block font-label text-label-lg text-light-primary mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="c-email"
                    className="block font-label text-label-lg text-light-primary mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="c-subject"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Subject / Department
                </label>
                <select
                  id="c-subject"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md"
                >
                  <option>General Chapter Inquiry</option>
                  <option>Industry Partnership / NRW Sponsorship</option>
                  <option>Technical Collaboration / Speakers</option>
                  <option>Press &amp; Media</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="c-msg"
                  className="block font-label text-label-lg text-light-primary mb-1"
                >
                  Message
                </label>
                <textarea
                  id="c-msg"
                  rows={5}
                  required
                  placeholder="How can we help?"
                  className="w-full rounded-sm border-light-outline-variant bg-light-surface text-body-md"
                ></textarea>
              </div>
              <div className="flex items-center justify-between gap-gutter-md">
                <button
                  type="submit"
                  className="px-gutter-lg py-gutter-md rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-ieee-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue transition-colors duration-state-change"
                >
                  Send Message
                </button>
                <span
                  id="contact-form-status"
                  className="font-mono text-body-sm text-ieee-blue hidden"
                >
                  Message queued — routed to the selected chapter team.
                </span>
              </div>
            </form>
          </div>
        </section>
      </main>
      <FormHandler
        formId="contact-form"
        statusId="contact-form-status"
        endpoint="/api/contact"
      />
    </>
  );
}
