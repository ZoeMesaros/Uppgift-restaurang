import { useEffect, useState } from "react";
import { IBooking } from "../../../models/IBooking";
import { getBookings, getCustomers } from "../../../services/bookingService";
import { Booking } from "./ShowBooking";
import './Table.scss'

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
    <section className="tableContainer">
    <table className="bookings">
      <thead>
        <tr>
        <th scope="col">Bokning ID</th>
        <th scope="col">Kund ID</th>
        <th scope="col">Datum</th>
        <th scope="col">Tid</th>
        <th scope="col">Gäster</th>
        <th scope="col">Förnamn</th>
        <th scope="col">Efternamn</th>
        <th scope="col">E-mail</th>
        <th scope="col">Telefon</th>
        </tr>
      </thead>
      <tbody>{bookingsHtml}</tbody>
    </table>
    </section>
  );
};
