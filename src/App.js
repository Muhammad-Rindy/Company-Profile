import React from "react";
import { Routes, Route } from "react-router-dom";
import { getPublicRoutes } from "./routes";

export default function App() {
  const publicRoutes = getPublicRoutes();
  console.log(publicRoutes);
  return (
    <Routes>
      {publicRoutes.map(
        (route) => !route.isDisabled && <Route key={route.path} {...route} />
      )}
    </Routes>
  );
}
