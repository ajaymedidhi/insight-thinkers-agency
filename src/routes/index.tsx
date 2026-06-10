import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Leadership from "../pages/Leadership";
import Contact from "../pages/Contact";
import Mandates from "../pages/Mandates";
import Network from "../pages/Network";
import Insights from "../pages/Insights";
import InsightsDetail from "../pages/Insights/Detail";
import Resources from "../pages/Resources";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "leadership",
        element: <Leadership />,
      },
      {
        path: "mandates",
        element: <Mandates />,
      },
      {
        path: "mandate",
        element: <Mandates />,
      },
      {
        path: "network",
        element: <Network />,
      },
      {
        path: "networks",
        element: <Network />,
      },
      {
        path: "insights",
        element: <Insights />,
      },
      {
        path: "insights/:slug",
        element: <InsightsDetail />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
