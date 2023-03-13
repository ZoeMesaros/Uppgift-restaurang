import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IBooking } from "../../../models/IBooking";
import { ICustomer } from "../../../models/ICustomer";
import { getCustomers } from "../../../services/bookingService";
import "./Showbooking.scss";

interface IBookingProps {
  booking: IBooking;
}

export const Booking = (props: IBookingProps) => {
  const [customer, setCustomer] = useState<ICustomer>();
  useEffect(() => {
    const getData = async () => {
      let allCustomers = await getCustomers(props.booking.customerId);
      setCustomer(allCustomers[0]);
    };
    if (customer) return;
    getData();
  });
  return (
    <>
      <tr>
        <td>{props.booking._id}</td>
        <td>{props.booking.customerId}</td>
        <td>{props.booking.date}</td>
        <td>{props.booking.time}</td>
        <td>{props.booking.numberOfGuests}</td>
        <td>{customer?.name}</td>
        <td>{customer?.lastname}</td>
        <td>{customer?.email}</td>
        <td>{customer?.phone}</td>
        <td>{customer?.id}</td>
      </tr>
    </>
  );
};