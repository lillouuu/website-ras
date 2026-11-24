import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1">
      <section className="bg-light-surface">
        <div className="max-w-[1360px] mx-auto px-gutter-md lg:px-page-margin py-section-lg flex flex-col gap-gutter-md items-start">
          <span className="font-mono text-label-sm uppercase text-ras-crimson">
            ERROR // 404
          </span>
          <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-primary">
            Page not found
          </h1>
          <p className="font-body text-body-lg text-light-on-surface-variant">
            The page you are looking for does not exist or has moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-gutter-md py-2.5 rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-ieee-blue transition-colors duration-state-change"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
