import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

//import pages ny dibawahsini
import TesDaze from "./pages/tes";
import LoginSide from "./pages/LoginSide";
import RegisterSide from "./pages/RegisterSide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TesDaze />,
  },
  {
    path: "/sini",
    element: <>mengokil</>,
  },
  {
    path: "/login",
    element: <LoginSide />,
  },
  {
    path: "/register",
    element: <RegisterSide />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
