import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: object;
}

export default function SEO({ title, description, keywords, schema }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = `${title} | Insight Thinkers Agency`;

    // Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Keywords
    if (keywords) {
      let metaKey = document.querySelector('meta[name="keywords"]');
      if (!metaKey) {
        metaKey = document.createElement("meta");
        metaKey.setAttribute("name", "keywords");
        document.head.appendChild(metaKey);
      }
      metaKey.setAttribute("content", keywords);
    }

    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    // OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", description);

    // JSON-LD Schema
    let scriptSchema = document.getElementById("jsonld-schema");
    if (scriptSchema) {
      scriptSchema.remove();
    }

    if (schema) {
      const script = document.createElement("script");
      script.id = "jsonld-schema";
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Clean schema on unmount
      const script = document.getElementById("jsonld-schema");
      if (script) script.remove();
    };
  }, [title, description, keywords, schema]);

  return null;
}
