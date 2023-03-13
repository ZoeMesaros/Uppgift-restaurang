import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { IBooking } from "../../../models/IBooking";
import { getBookings, getCustomers } from "../../../services/bookingService";
import { Booking } from "./ShowBooking";
import "./GetBookings.scss";
import "./searchbooking.scss";
import { ICustomer } from "../../../models/ICustomer";

interface IBookingProps {
  booking: IBooking;
}
const Allinfo = (props: IBookingProps) => {
  const [searchText, setSearchText] = useState<ICustomer>();
  useEffect(() => {
    const getData = async () => {
      let allinfo = await getCustomers(props.booking.customerId);
      setSearchText(allinfo[0]);
    };
    if (searchText) return;
    getData();
  });
  return <>{Allinfo}</>;
};

export const Bookings = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    bookings.filter((x) => x.customerId === searchText);
  };
  //

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
    <>
      <form id="searchForm" onSubmit={handleSubmit}>
        <p className="searchbookings">Sök bokning</p>
        <div className="btn-input">
          <input
            type="text"
            id="searchText"
            value={searchText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearchText(e.target.value);
            }}
          />
          <button id="button">Sök</button>
        </div>
      </form>
      <div id="bookingContainer"></div>
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
    </>
  );
};
