import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import Home from "./pages/Home.jsx";
import Works from "./sections/Works.jsx";

const router = createBrowserRouter([
  {
    path: "http://iamsanthosh.me/",
    element: <App />,
    children: [
      {
        path: "http://iamsanthosh.me/",
        element: <Home />,
      },
      {
        path: "http://iamsanthosh.me/about",
        element: <AboutPage />,
      },
      {
        path: "http://iamsanthosh.me/works",
        element: <Works />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
