import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Quiz from "../pages/Quiz";
import PageLayout from "../components/layout/PageLayout";
import ProtectedRoute from "./ProtectedRoute";

const createRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <LandingPage />
      </PageLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <PageLayout>
        <Login />
      </PageLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <PageLayout>
          <Dashboard />
        </PageLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PageLayout>
        <Signup />
      </PageLayout>
    ),
  },
  {
    path: "/quiz/:category/:amount",
    element: (
      <ProtectedRoute>
        <Quiz />
      </ProtectedRoute>
    ),
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
