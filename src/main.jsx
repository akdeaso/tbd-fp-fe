import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

//import pages ny dibawahsini
import TesDaze from "./pages/tes";
import LoginSide from "./pages/LoginSide";
import RegisterSide from "./pages/RegisterSide";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";
import Detail from "./pages/Detail";

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
    exact: true,
    path: "/signup",
    element: <RegisterSide />,
  },
  {
    path: "/add",
    element: <AddNew />,
  },
  {
    path: "/setup/:id",
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSide />} />
        <Route exact path="/signup" element={<RegisterSide />} />
        <Route path="/add" element={<AddNew />} />
        <Route path="/setup/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
