import React from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import "./App.scss";

function App() {
  // Make a request for a user with a given ID
  axios
    .get(
      "https://school-restaurant-api.azurewebsites.net/restaurant/6408978376187b915f68e168"
    )
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return (
    <>
      <main className="App">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
