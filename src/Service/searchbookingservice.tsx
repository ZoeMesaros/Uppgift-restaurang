import axios from "axios";
import { ISearchBookings } from "../models/ISearchBookings";
import { ISearch } from "../models/ISearch";

export async function searchBookings(
  searchText: string
): Promise<ISearchBookings[]> {
  let response = await axios.get<ISearch>(
    `https://school-restaurant-api.azurewebsites.net/${searchText}api-doc/customer/:id`
  );

  return response.data.Search;
}
