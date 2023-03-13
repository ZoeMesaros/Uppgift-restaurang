import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import Booking from "./components/Booking/Booking";
import BookingForm from "./components/Booking/Booking";
// import { RestaurantBooking } from "./components/Booking/Booking";
// import RestaurantBooking from "./components/Booking/Booking";
// import { Admin } from "./components/Admin/searchbookning";

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
        // element: <Admin />,
      },
    ],
  },
]);
