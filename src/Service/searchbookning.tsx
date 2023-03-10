import { ISearchBookings } from "../models/ISearchBookings";
import "./searchbooking.scss";
import { searchBookings } from "./searchbookingservice";

export const Admin = () => {
  function handleSearchText(): string {
    let searchInput: HTMLInputElement = document.getElementById(
      "searchText"
    ) as HTMLInputElement;

    let searchText: string = searchInput.value;
    searchInput.value = "";

    return searchText;
  }

  function createHtml(searchbookings: ISearchBookings[]) {
    let container: HTMLDivElement = document.getElementById(
      "bookingContainer"
    ) as HTMLDivElement;

    container.innerHTML = "";
    for (let i = 0; i < searchbookings.length; i++) {
      let name: HTMLHeadingElement = document.createElement("h4");

      name.innerHTML = searchbookings[i].name;

      container.appendChild(name);
    }
  }
  return (
    <>
      <form id="searchForm">
        <p className="searchbookings">Sök bokning</p>
        <div className="btn-input">
          <input type="text" id="searchText" />
          <button id="button" onClick={handleSearchText}>
            Sök
          </button>
        </div>
      </form>
      <div id="bookingContainer"></div>
    </>
  );
};
