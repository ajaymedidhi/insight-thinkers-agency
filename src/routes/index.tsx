import { createBrowserRouter } from "react-router-dom";
import type { ComponentType } from "react";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

// Interior pages are code-split so the homepage loads only what it needs.
const page = (load: () => Promise<{ default: ComponentType }>) => async () => ({ Component: (await load()).default });

const about = page(() => import("../pages/About"));
const services = page(() => import("../pages/Services"));
const leadership = page(() => import("../pages/Leadership"));
const mandates = page(() => import("../pages/Mandates"));
const network = page(() => import("../pages/Network"));
const insights = page(() => import("../pages/Insights"));
const insightDetail = page(() => import("../pages/Insights/Detail"));
const resources = page(() => import("../pages/Resources"));
const contact = page(() => import("../pages/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // Shown only while a lazily loaded page chunk arrives on first visit.
    hydrateFallbackElement: <div className="min-h-screen bg-ivory" aria-busy="true" />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", lazy: about },
      { path: "services", lazy: services },
      { path: "leadership", lazy: leadership },
      { path: "mandates", lazy: mandates },
      { path: "mandate", lazy: mandates },
      { path: "network", lazy: network },
      { path: "networks", lazy: network },
      { path: "insights", lazy: insights },
      { path: "insights/:slug", lazy: insightDetail },
      { path: "resources", lazy: resources },
      { path: "contact", lazy: contact },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
