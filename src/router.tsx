import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import BookingForm from "./components/Booking/Booking";
import { Admin } from "./components/Admin/Admin";


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
        element: <BookingForm />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);
