import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { IBooking } from "../../../models/IBooking";
import { getBookings, getCustomers } from "../../../services/bookingService";
import { Booking } from "./ShowBooking";
import "./Table.scss";
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

//
export const Bookings = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [filterbookings, setFilterBookings] = useState<IBooking[]>([]);

  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let filteredBookings = bookings.filter((x) => x.customerId === searchText);

    setFilterBookings(filteredBookings);

    console.log(searchText);
  };

  //

  useEffect(() => {
    const getData = async () => {
      let allBookings = await getBookings();
      setBookings(allBookings);
      setFilterBookings(allBookings);
    };

    if (bookings.length > 0) return;
    getData();
  }, []);

  let bookingsHtml = filterbookings.map((booking) => {
    return <Booking booking={booking} key={booking._id}></Booking>;
  });

  return (
    <section className="tableContainer">
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
