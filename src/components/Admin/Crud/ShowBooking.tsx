import { useEffect, useState } from "react";
import { IBookingProps } from "../../../models/IBookingProps";
import { ICustomer } from "../../../models/ICustomer";
import { getCustomers } from "../../../services/bookingService";
import { removeBooking } from "./removeBooking";
import "./Showbooking.scss";
import './GetBookings.scss'
import './Table.scss'

export const Booking = (props: IBookingProps) => {
  const [customer, setCustomer] = useState<ICustomer>();
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      let allCustomers = await getCustomers(props.booking.customerId);
      setCustomer(allCustomers[0]);
    };
    if (customer) return;
    getData();
  }, [customer, props.booking.customerId]);

  const handleDeleteClick = () => {
    removeBooking(props.booking._id);
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null; 
  }

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
        <td>
          <button onClick={handleDeleteClick}>Ta bort</button>
        </td>
      </tr>
    </>
  );
};
