import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import NewsletterForm from "../shared/NewsletterForm";
import { COMPANY, FOOTER_NAV } from "../../content/site";
import { CORE_SERVICES } from "../../content/services";

export default function Footer() {
  return (
    <footer className="on-navy bg-navy-deep text-on-navy">
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-[22rem] text-[0.9375rem] leading-relaxed">
              Healthcare advisory for hospital owners, entrepreneurs and investors — M&amp;A, capital raising, technology and strategic growth.
            </p>
            <p className="mt-4 text-[0.875rem] text-on-navy-muted">{COMPANY.location}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="meta mb-5">Firm</h2>
            <ul className="space-y-3 text-[0.9375rem]">
              {FOOTER_NAV.map((n) => (
                <li key={n.path}>
                  <Link to={n.path} className="transition-colors hover:text-white">{n.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="meta mb-5">Advisory</h2>
            <ul className="space-y-3 text-[0.9375rem]">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className="transition-colors hover:text-white">{s.title}</Link>
                </li>
              ))}
            </ul>
            <h2 className="meta mt-10 mb-4">Contact</h2>
            <ul className="space-y-2 text-[0.9375rem]">
              <li><a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a></li>
              <li><a href={`tel:${COMPANY.phoneHref}`} className="hover:text-white">{COMPANY.phone}</a></li>
              {COMPANY.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <h2 className="meta mb-5">Insights by email</h2>
            <p className="mb-5 text-[0.9375rem] leading-relaxed">
              Occasional notes on healthcare transactions, capital and technology.
            </p>
            <NewsletterForm stacked />
          </div>
        </div>

        <div className="rule mt-16 flex flex-col gap-3 pt-8 text-[0.8125rem] text-on-navy-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Mandate information is shared with qualified counterparties under NDA.</p>
        </div>
      </div>
    </footer>
  );
}
