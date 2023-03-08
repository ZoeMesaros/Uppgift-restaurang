import React from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import { Nav } from "./components/Nav/Nav";

function App() {
// Make a request for a user with a given ID
axios.get('https://school-restaurant-api.azurewebsites.net/restaurant/6408978376187b915f68e168')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  return (
    <>
      <Nav />
      <header className="home">
        <h1>Restaurang</h1>
      </header>
      <main className="App">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
