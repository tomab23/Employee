import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignPage from "../pages/SignPage";
import HomePage from "../pages/HomePage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/sign", element: <SignPage /> },
  { path: "/login", element: <SignPage login /> },
   {path:"/*" , element:<ErrorPage />},
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
]);