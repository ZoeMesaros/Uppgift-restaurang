import { SearchAdmin } from "../../Service/searchbookning";
import { Bookings } from "./Crud/GetBookings";

export const Admin = () => {
  return (
    <>
      <h1>Admin</h1>
      <SearchAdmin />
      <Bookings />
    </>
  );
};
