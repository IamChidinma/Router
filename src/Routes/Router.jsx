import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/SignUp";
import Home from "../Components/Home";
import ForgotPassword from "../Components/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
]);

export default router;
