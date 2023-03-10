import { useNavigate } from "react-router-dom";
import { IBooking } from "../../../models/IBooking";
import { ICustomer } from "../../../models/ICustomer";
import "./Showbooking.scss";

interface IBookingProps {
  booking: IBooking;
}

export const Booking = (props: IBookingProps) => {
  const navigate = useNavigate();
  /* 
  const showMoreClick = () => {
    navigate(`/animal/${props.animal.id}`);
  }; */

  return (
    <>
      <tr>
        <td>{props.booking.id}</td>
        <td>{props.booking.customerId}</td>
        <td>{props.booking.date}</td>
        <td>{props.booking.time}</td>
        <td>{props.booking.numberOfGuests}</td>
      </tr>
    </>
  );
};
