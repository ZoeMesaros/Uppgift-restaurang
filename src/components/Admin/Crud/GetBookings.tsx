import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { IBooking } from "../../../models/IBooking";
import { getBookings } from "../../../services/bookingService";
import { Booking } from "./ShowBooking";
import { getCustomers } from "../../../services/bookingService";
import "./Table.scss";
import "./searchbooking.scss";
import { ICustomer } from "../../../models/ICustomer";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

interface IBookingProps {
  booking: IBooking;
}

const Allinfo = (props: IBookingProps) => {
  const [searchText, setSearchText] = useState<ICustomer>();
  useEffect(() => {
    const getData = async () => {
      let allinfo = await getCustomers(props.booking.date);
      setSearchText(allinfo[0]);
    };
    if (searchText) return;
    getData();
  });
  return <>{Allinfo}</>;
};

export const Bookings = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [filterbookings, setFilterBookings] = useState<IBooking[]>([]);

  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let filteredBookings = bookings.filter((x) => x.date === searchText);

    setFilterBookings(filteredBookings);

    console.log(searchText);
  };

  useEffect(() => {
    const getData = async () => {
      let allBookings = await getBookings();
      setBookings(allBookings);
      setFilterBookings(allBookings);
    };

    if (bookings.length > 0) return;
    getData();
  }, []);
  const handleclick = () => {
    setFilterBookings(bookings);
    setSearchText("");
  };

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
          <button className="button">Sök</button>
        </div>
      </form>
      <button onClick={handleclick} className="btn">
        Back
      </button>
      <div id="bookingContainer"></div>
      <Table className="table">
        <Thead className="d-none d-md-table-header-group">
          <Tr>
            <Th className="d-sm-none d-md-table-cell">Bokning ID</Th>
            <Th className="d-sm-none d-md-table-cell">Kund ID</Th>
            <Th className="d-sm-none d-md-table-cell">Datum</Th>
            <Th className="d-sm-none d-md-table-cell">Tid</Th>
            <Th className="d-sm-none d-md-table-cell">Gäster</Th>
            <Th className="d-sm-none d-md-table-cell">Förnamn</Th>
            <Th className="d-sm-none d-md-table-cell">Efternamn</Th>
            <Th className="d-sm-none d-md-table-cell">E-mail</Th>
            <Th className="d-sm-none d-md-table-cell">Telefon</Th>
          </Tr>
        </Thead>
        <Tbody>{bookingsHtml}</Tbody>
      </Table>
    </section>
  );
};
