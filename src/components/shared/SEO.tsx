import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "../../content/site";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: object;
  type?: "website" | "article";
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SEO({ title, description, keywords, schema, type = "website" }: SEOProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
    document.title = `${title} | Insight Thinkers Agency`;

    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    document.getElementById("jsonld-schema")?.remove();
    if (schema) {
      const script = document.createElement("script");
      script.id = "jsonld-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => document.getElementById("jsonld-schema")?.remove();
  }, [title, description, keywords, schema, type, pathname]);

  return null;
}
