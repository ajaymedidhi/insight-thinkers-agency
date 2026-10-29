import { Link } from "react-router-dom";
import { contactFor } from "../../content/services";
import MandateList from "../shared/MandateList";
import Reveal from "../ui/Reveal";

export default function ActiveMandates() {
  return (
    <section aria-labelledby="mandates-title" className="on-navy section bg-navy text-on-navy">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5">Current engagements</p>
            <h2 id="mandates-title" className="h2">Active mandates</h2>
          </div>
          <p className="max-w-[24rem] text-[0.9375rem] leading-relaxed text-on-navy-muted">
            Live and anonymised — not completed transactions. Details shared with qualified parties under NDA.
          </p>
        </Reveal>

        <Reveal className="mt-12" delay={120}>
          <MandateList variant="cards" />
        </Reveal>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/mandates" className="link-arrow">
            How the process works <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <Link to={contactFor("Healthcare M&A / Transaction Advisory")} className="btn-outline-light">
            Enquire as a qualified buyer or investor
          </Link>
        </div>
      </div>
    </section>
  );
}
