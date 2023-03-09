import axios from "axios";

import { ISearchthebooking } from "../../models/ISearch";
import { ISearchBookings } from "../../models/ISearchBookings";

export const Admin = () => {
  (document.getElementById("searchForm") as HTMLFormElement).addEventListener(
    "submit",
    (e: SubmitEvent) => {
      e.preventDefault();

      let searchText = handleSearchText();

      getData(searchText);
    }
  );

  function handleSearchText(): string {
    let searchInput: HTMLInputElement = document.getElementById(
      "searchText"
    ) as HTMLInputElement;

    let searchText: string = searchInput.value;
    searchInput.value = "";

    return searchText;
  }

  function getData(searchText: string) {
    axios
      .get<ISearchBookings>(
        `https://school-restaurant-api.azurewebsites.net/${searchText}api-doc/custimer/:id`
      )
      .then((response) => {
        createHtml(response.data.search);
      });
  }

  function createHtml(search: ISearchBookings[]) {
    let container: HTMLDivElement = document.getElementById(
      "movieContainer"
    ) as HTMLDivElement;

    container.innerHTML = "";
    for (let i = 0; i < search.length; i++) {
      let info: HTMLHeadingElement = document.createElement("h3");

      info.innerHTML = search[i].name;

      container.appendChild(info);
    }
  }
  return (
    <>
      <form id="searchForm">
        <input type="text" id="searchText" />
        <button>Sök</button>
      </form>
      <div id="movieContainer"></div>
    </>
  );
};
