import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";

const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Routes = () => {
  return <RouterProvider router={createRouter} />;
};

export default Routes;
