import { useEffect, useState } from "react";
import { IBookingProps } from "../../../models/IBookingProps";
import { ICustomer } from "../../../models/ICustomer";
import { getCustomers } from "../../../services/bookingService";
import { removeBooking } from "./removeBooking";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./Table.scss";

export const Booking = (props: IBookingProps) => {
  const [customer, setCustomer] = useState<ICustomer>();
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      let allCustomers = await getCustomers(props.booking.customerId);
      setCustomer(allCustomers[0]);
      console.log(allCustomers);
      
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
      <Tr>
        <Td className="d-none d-md-table-cell">{props.booking._id}</Td>
        <Td className="d-none d-md-table-cell">{props.booking.customerId}</Td>
        <Td className="d-none d-md-table-cell">{props.booking.date}</Td>
        <Td className="d-none d-md-table-cell">{props.booking.time}</Td>
        <Td className="d-none d-md-table-cell">
          {props.booking.numberOfGuests}
        </Td>
        <Td className="d-none d-md-table-cell">{customer?.name}</Td>
        <Td className="d-none d-md-table-cell">{customer?.lastname}</Td>
        <Td className="d-none d-md-table-cell">{customer?.email}</Td>
        <Td className="d-none d-md-table-cell">{customer?.phone}</Td>
        <Td className="d-none d-md-table-cell">
          <button className="removeButton" onClick={handleDeleteClick}>
            Ta bort
          </button>
        </Td>
      </Tr>
    </>
  );
};
