import { Outlet } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import { Header } from "./components/Nav/Header";
import { Footer } from "./components/Nav/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}

export default App;
