import React from "react";
import { Routes, Route } from "react-router-dom";
import { ScroolToTop } from "./helpers/utilities";
import { getPublicRoutes } from "./routes";

export default function App() {
  const publicRoutes = getPublicRoutes();
  console.log(publicRoutes);
  return (
    <ScroolToTop>
      <Routes>
        {publicRoutes.map(
          (route) => !route.isDisabled && <Route key={route.path} {...route} />
        )}
      </Routes>
    </ScroolToTop>
  );
}
