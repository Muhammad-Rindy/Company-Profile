import Home from "../pages/Home";

export const getPublicRoutes = () => [
  {
    path: "/",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Home />,
  },
];
