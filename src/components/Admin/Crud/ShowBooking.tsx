import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IBooking } from "../../../models/IBooking";
import { ICustomer } from "../../../models/ICustomer";
import { getCustomers } from "../../../services/bookingService";
import "./Showbooking.scss";

interface IBookingProps {
  booking: IBooking;
}

export const Booking = (props: IBookingProps) => {
  useEffect(() => {
    getCustomers(props.booking.customerId);
  });
  /* 
  const showMoreClick = () => {
    navigate(`/animal/${props.animal.id}`);
  }; */
  return (
    <>
      <tr>
        <td>{props.booking._id}</td>
        <td>{props.booking.customerId}</td>
        <td>{props.booking.date}</td>
        <td>{props.booking.time}</td>
        <td>{props.booking.numberOfGuests}</td>
        <td>{props.booking.customerId}</td>
      </tr>
    </>
  );
};
