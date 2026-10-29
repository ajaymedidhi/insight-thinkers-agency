import { Link } from "react-router-dom";
import SEO from "../components/shared/SEO";

export default function NotFound() {
  return (
    <section className="pt-40 pb-28">
      <SEO title="Page not found" description="The page you were looking for could not be found." />
      <div className="container-x max-w-[48rem]">
        <p className="eyebrow mb-6">404</p>
        <h1 className="display">This page could not be found.</h1>
        <p className="lede mt-8">The link may be out of date, or the page may have moved.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/" className="btn-primary">Return home</Link>
          <Link to="/insights" className="btn-outline">Browse insights</Link>
        </div>
      </div>
    </section>
  );
}
