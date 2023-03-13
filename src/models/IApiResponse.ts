import { IBooking } from "./IBooking";
import { ICustomer } from "./ICustomer";

export interface IApiResponse {
  booking?: IBooking;
  error: string;
}
