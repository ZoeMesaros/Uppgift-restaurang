import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import { Booking } from "./components/Booking/Booking";
import { Contact } from "./components/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
