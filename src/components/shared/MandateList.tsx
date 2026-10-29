import { ACTIVE_MANDATES } from "../../content/mandates";

function ActiveBadge() {
  return (
    <span className="inline-flex items-center gap-2 border border-bronze/50 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-bronze">
      <span className="h-1.5 w-1.5 rounded-full bg-bronze" aria-hidden="true" />
      Active
    </span>
  );
}

/**
 * Anonymised active mandates. Always labelled as in-progress engagements.
 * `cards` is the scannable homepage summary; the default list adds the
 * descriptive summary and is used on the Mandates page.
 */
export default function MandateList({ variant = "list" }: { variant?: "list" | "cards" }) {
  if (variant === "cards") {
    return (
      <ul className="grid gap-px bg-white/12 md:grid-cols-3">
        {ACTIVE_MANDATES.map((m) => (
          <li
            key={m.ref}
            className="group relative flex flex-col bg-navy p-6 transition-colors duration-300 hover:bg-navy-soft sm:p-8"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-bronze transition-transform duration-500 ease-editorial group-hover:scale-x-100"
            />
            <div className="flex items-center justify-between gap-4">
              <span className="font-serif text-[1rem] text-bronze">{m.ref}</span>
              <ActiveBadge />
            </div>
            <p className="mt-10 font-serif text-[clamp(1.6rem,2.4vw,2rem)] leading-[1.1] tracking-[-0.015em] text-balance text-white">
              {m.metric}
            </p>
            <h3 className="mt-3 text-[0.9375rem] leading-snug text-on-navy">{m.title}</h3>
            <span aria-hidden="true" className="min-h-8 flex-1" />
            <dl className="grid gap-3 border-t border-white/12 pt-5 text-[0.875rem]">
              <div className="flex justify-between gap-4">
                <dt className="meta">Location</dt>
                <dd className="text-right text-white">{m.region}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="meta">Seeking</dt>
                <dd className="text-right text-white">{m.seeking}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="border-t border-white/12">
      {ACTIVE_MANDATES.map((m) => (
        <li key={m.ref} className="grid gap-4 border-b border-white/12 py-8 md:grid-cols-12 md:gap-8">
          <div className="flex items-center gap-4 md:col-span-2 md:flex-col md:items-start md:gap-3">
            <span className="font-serif text-[1rem] text-bronze">{m.ref}</span>
            <ActiveBadge />
          </div>
          <div className="md:col-span-6">
            <h3 className="h3">{m.title}</h3>
            <p className="mt-3 text-[1rem] leading-relaxed text-on-navy">{m.summary}</p>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-[0.9375rem] md:col-span-4 md:grid-cols-1 md:gap-3">
            <div>
              <dt className="meta">Location</dt>
              <dd className="mt-1 text-white">{m.region}</dd>
            </div>
            <div>
              <dt className="meta">Scale</dt>
              <dd className="mt-1 text-white">{m.metric}</dd>
            </div>
            <div className="col-span-2 md:col-span-1">
              <dt className="meta">Seeking</dt>
              <dd className="mt-1 text-white">{m.seeking}</dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}
