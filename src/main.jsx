import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

//import pages ny dibawahsini
import TesDaze from "./pages/tes";
import LoginSide from "./pages/LoginSide";
import RegisterSide from "./pages/RegisterSide";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
  {
    path: "/add",
    element: <AddNew />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
