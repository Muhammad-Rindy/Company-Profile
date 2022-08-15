import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Pictures from "../pages/Pictures";

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
];
