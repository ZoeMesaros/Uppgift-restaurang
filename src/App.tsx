import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import { Nav } from "./components/Nav/Nav";

function App() {
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
