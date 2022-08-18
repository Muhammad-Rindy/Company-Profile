import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Pictures from "../pages/Pictures";
import Prices from "../pages/Prices";
import Services from "../pages/Services";
import Videos from "../pages/Videos";

export const getPublicRoutes = () => [
  {
    path: "/",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Home />,
  },
  {
    path: "/contact",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Contact />,
  },
  {
    path: "/pictures",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Pictures />,
  },
  {
    path: "/videos",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Videos />,
  },
  {
    path: "/faq",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Faq />,
  },
  {
    path: "/services",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Services />,
  },
  {
    path: "/prices",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Prices />,
  },
];
