import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import About from "./pages/About";
import Apparel from "./pages/Apparel";
import Contact from "./pages/Contact";
import Equipment from "./pages/Equipment";
import Checkout from "./pages/Checkout";
import Nutrition from "./pages/Nutrition";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/apparel",
    element: <Apparel />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/equipment",
    element: <Equipment />,
  },
  {
    path: "/nutrition",
    element: <Nutrition />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
