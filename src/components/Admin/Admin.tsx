import { Bookings } from "./Crud/GetBookings";
import "./Admin.scss";

export const Admin = () => {
  return (
    <>
      <h1 className="admin__header">Admin</h1>
      <Bookings />
    </>
  );
};
