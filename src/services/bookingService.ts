import axios from "axios";
import { IApiResponse } from "../models/IApiResponse";
import { IBooking } from "../models/IBooking";
// import { IBooking } from "../models/IBookingSide";
import { ICustomer } from "../models/ICustomer";

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
