import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact \u2014 Achievements & Press | IEEE RAS INSAT",
};

export default function ImpactPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-light-outline-variant bg-light-surface">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-gutter-md">
          <span className="font-mono text-label-sm uppercase text-ras-crimson">
            IMPACT // VERIFIED EVIDENCE &amp; PRESS
          </span>
          <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-primary text-balance max-w-3xl">
            Proof of Technical Execution &amp; Recognition
          </h1>
          <p className="font-body text-body-lg text-light-on-surface-variant max-w-prose">
            Every competition result, IEEE award, international delegation, and
            media feature is logged with verifiable documentation. Entries
            awaiting certificate scans are marked{" "}
            <span className="font-mono text-body-sm text-light-primary">
              [TO CONFIRM]
            </span>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-light-outline-variant bg-light-surface-container-low">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg flex flex-col gap-gutter-lg">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-label-sm uppercase text-ieee-blue">
                COMPETITION LOG
              </span>
              <h2 className="font-headline text-headline-md text-light-primary mt-1">
                National &amp; International Competitions
              </h2>
            </div>
          </div>

          <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-light-outline-variant bg-light-surface-container-low">
                  <th className="p-gutter-md font-mono text-label-sm uppercase text-light-on-surface-variant">
                    COMPETITION
                  </th>
                  <th className="p-gutter-md font-mono text-label-sm uppercase text-light-on-surface-variant">
                    YEAR
                  </th>
                  <th className="p-gutter-md font-mono text-label-sm uppercase text-light-on-surface-variant">
                    TEAM / INITIATIVE
                  </th>
                  <th className="p-gutter-md font-mono text-label-sm uppercase text-light-on-surface-variant">
                    RANK / OUTCOME
                  </th>
                  <th className="p-gutter-md font-mono text-label-sm uppercase text-light-on-surface-variant">
                    PROOF
                  </th>
                </tr>
              </thead>
              <tbody data-stagger="rows" data-log className="divide-y divide-light-outline-variant font-body text-body-sm">
                <tr>
                  <td className="p-gutter-md font-semibold text-light-primary">
                    NXP Cup Tunisia
                  </td>
                  <td className="p-gutter-md font-mono">[TO CONFIRM]</td>
                  <td className="p-gutter-md">INSAT Autonomous Vehicle Team</td>
                  <td className="p-gutter-md font-mono text-ieee-blue">
                    [TO CONFIRM]
                  </td>
                  <td className="p-gutter-md font-mono text-light-on-surface-variant">
                    [CERTIFICATE PENDING]
                  </td>
                </tr>
                <tr>
                  <td className="p-gutter-md font-semibold text-light-primary">
                    EUROBOT
                  </td>
                  <td className="p-gutter-md font-mono">[TO CONFIRM]</td>
                  <td className="p-gutter-md">INSAT Robotics Delegation</td>
                  <td className="p-gutter-md font-mono text-ras-purple">
                    [TO CONFIRM]
                  </td>
                  <td className="p-gutter-md font-mono text-light-on-surface-variant">
                    [REPORT PENDING]
                  </td>
                </tr>
                <tr>
                  <td className="p-gutter-md font-semibold text-light-primary">
                    Micromouse Challenge
                  </td>
                  <td className="p-gutter-md font-mono">[TO CONFIRM]</td>
                  <td className="p-gutter-md">INSAT Embedded Group</td>
                  <td className="p-gutter-md font-mono text-ras-crimson">
                    [TO CONFIRM]
                  </td>
                  <td className="p-gutter-md font-mono text-light-on-surface-variant">
                    [PROOF PENDING]
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-light-surface">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-sm lg:py-section-lg grid grid-cols-1 lg:grid-cols-2 gap-gutter-xl">
          <div className="flex flex-col gap-gutter-md">
            <span className="font-mono text-label-sm uppercase text-ras-purple">
              AWARDS &amp; IEEE RECOGNITION
            </span>
            <h2 className="font-headline text-headline-md text-light-primary">
              Chapter &amp; Section Honors
            </h2>
            <div data-rise className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
              <span className="font-mono text-label-sm text-ieee-blue">
                [TO CONFIRM] YEAR
              </span>
              <h3 className="font-headline text-title-lg text-light-primary">
                IEEE RAS Student Branch Chapter Recognition
              </h3>
              <p className="font-body text-body-sm text-light-on-surface-variant">
                Awarding Body: IEEE Region 8 / Tunisia Section · Proof: [TO
                CONFIRM]
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-gutter-md">
            <span className="font-mono text-label-sm uppercase text-ieee-blue">
              PRESS &amp; MEDIA
            </span>
            <h2 className="font-headline text-headline-md text-light-primary">
              Media Coverage
            </h2>
            <div data-rise className="bg-light-surface-container-lowest border border-light-outline-variant rounded-sm p-gutter-lg flex flex-col gap-gutter-sm">
              <span className="font-mono text-label-sm text-ras-crimson">
                [TO CONFIRM] OUTLET · DATE
              </span>
              <h3 className="font-headline text-title-lg text-light-primary">
                National Robotics Weekend (NRW) Coverage
              </h3>
              <p className="font-body text-body-sm text-light-on-surface-variant">
                Press clippings and broadcast links will be archived here once
                verified by the communications pole.
              </p>
              <Link
                href="/partners"
                className="font-label text-label-lg text-ieee-blue hover:text-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ieee-blue mt-2"
              >
                See Partner Value &amp; Visibility →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
