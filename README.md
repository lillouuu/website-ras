# IEEE RAS INSAT — website

Next.js (App Router) + React + TypeScript + Tailwind CSS v3. Built from the Stitch design export (10 pages).

## Run
```bash
npm install
cp .env.example .env.local   # optional: add RESEND_API_KEY to send real emails
npm run dev                  # http://localhost:3000
npm run build && npm start
```

## Structure
- `tailwind.config.js` — design tokens copied from the design (colors, spacing, type scale, transitions).
- `src/app/*/page.tsx` — the 10 pages. Markup is the design's, converted to JSX (class → className, links → next/link).
- `src/components/layout/` — `Header` (React: active link, dropdown, mobile drawer), `Footer`, `BrandLockup`.
- `src/components/behaviors/` — client components that add the interactions: project/event filters, domain tabs, members portal note, form submission.
- `src/app/api/{contact,join,partner}/route.ts` — validated with zod (`src/lib/validation.ts`), sent through `src/lib/mailer.ts` (Resend; logs to console without a key).
- `src/data/` — nav links and domain content.

## Before launch
- Replace `[TO CONFIRM: ...]` placeholders (email, privacy policy) and unverified milestones/stats in the page markup.
- Set real recipient addresses in `.env.local`.
- Members login is a concept only; no auth yet.
