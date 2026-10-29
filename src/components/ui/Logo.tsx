import { Link } from "react-router-dom";
import mark from "../../assets/logo-mark.png";

interface LogoProps {
  tone?: "dark" | "light";
  onClick?: () => void;
}

/** Brand mark (cropped from the client logo) with a typeset wordmark. */
export default function Logo({ tone = "dark", onClick }: LogoProps) {
  const name = tone === "dark" ? "text-ink" : "text-white";
  const sub = tone === "dark" ? "text-bronze-ink" : "text-bronze";
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-3" aria-label="Insight Thinkers Agency — home">
      <img src={mark} alt="" width={40} height={40} className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.2rem] tracking-[-0.01em] ${name}`}>Insight Thinkers</span>
        <span className={`mt-1 text-[0.625rem] font-medium uppercase tracking-[0.28em] ${sub}`}>Agency</span>
      </span>
    </Link>
  );
}
