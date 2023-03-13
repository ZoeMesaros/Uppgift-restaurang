import { useEffect, useState } from "react";
import { IBooking } from "../../../models/IBooking";
import { getBookings, getCustomers } from "../../../services/bookingService";
import { Booking } from "./ShowBooking";
import './GetBookings.scss'

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
          <th>Bokning Id</th>
          <th>Kund If</th>
          <th>Datum</th>
          <th>Tid</th>
          <th>Gäster</th>
          <th>Förnamn</th>
          <th>Efternamn</th>
          <th>E-mail</th>
          <th>Telefon</th>
        </tr>
      </thead>
      <tbody>{bookingsHtml}</tbody>
    </table>
  );
};
