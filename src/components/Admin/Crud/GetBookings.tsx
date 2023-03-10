import { useEffect, useState } from "react";
import { IBooking } from "../../../models/IBooking";
import { getBookings, getCustomers } from "../../../services/bookingService";
import { Booking } from "./ShowBooking";

export const Bookings = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    const getData = async () => {
      let allBookings = await getBookings();
      setBookings(allBookings);
    };

    if (bookings.length > 0) return;
    getData();
  });
  let bookingsHtml = bookings.map((booking) => {
    return <Booking booking={booking} key={booking._id}></Booking>;
  });
  return (
    <table className="bookings">
      <thead>
        <tr>
          <th>BookingId</th>
          <th>CustomerId</th>
          <th>Date</th>
          <th>Time</th>
          <th>Guests</th>
        </tr>
      </thead>
      <tbody>{bookingsHtml}</tbody>
    </table>
  );
};
