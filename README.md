# Insight Thinkers Agency — website

React 19 + TypeScript + Vite + Tailwind CSS v4. React Router (data router) with code-split interior pages.

```bash
npm install
npm run dev      # local development
npm run build    # type-check + production build to dist/
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| Business facts (contact details, founder designation, metrics, mandate value) | `src/content/site.ts` |
| Advisory services and enquiry topics | `src/content/services.ts` |
| Active mandates and engagement approach | `src/content/mandates.ts` |
| Articles and resources | `src/constants/insights.ts` |
| Design tokens and shared component classes | `src/index.css` (`@theme` + `@layer components`) |
| Shared UI (page hero, CTA band, headings, logo, founder portrait) | `src/components/ui/` |

Search the codebase for `CLIENT TO CONFIRM` / `CLIENT TO SUPPLY` for business facts awaiting client sign-off.

## Forms

All forms (enquiry, resource requests, newsletter) submit through `src/lib/submitForm.ts`.

- Set **`VITE_FORM_ENDPOINT`** at build time to any service that accepts a JSON `POST` (e.g. Formspree, Getform or a serverless function). Each submission includes `form`, `_subject` and `page` fields alongside the user's input.
- Without it, the form opens the visitor's email client with a pre-filled message to the firm, so enquiries are never silently discarded.

## Deployment

This is a client-side routed SPA: the host must rewrite unknown paths to `index.html`. Update `public/sitemap.xml` when routes or articles change.
