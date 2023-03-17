import axios from "axios";
import { IBooking } from "../models/IBooking";
import { ICustomer } from "../models/ICustomer";
import Swal from "sweetalert2";


export const getBookings = async (): Promise<IBooking[]> => {
  let response = await axios.get<IBooking[]>(
    "https://school-restaurant-api.azurewebsites.net/booking/restaurant/6408978376187b915f68e168"
  );
  console.log(response);
  return response.data;
};

export const getCustomers = async (id: string): Promise<ICustomer[]> => {
  let response = await axios.get<ICustomer[]>(
    "https://school-restaurant-api.azurewebsites.net/customer/" + id
  );
  console.log(response);
  return response.data;
};

export const removeBooking = (id: string) => {
  axios
    .delete(
      `https://school-restaurant-api.azurewebsites.net/booking/delete/` + id
    )
    .then((response) => {
      console.log("Borttagen:", response.data);
    })
    .catch((error) => {
      console.error("Något gick fel:", error);
    });

  Swal.fire("Bokning borttagen");
};
