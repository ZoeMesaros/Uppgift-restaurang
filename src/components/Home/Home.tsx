import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import { Header } from "../Nav/Header";
import { Footer } from "../Nav/Footer";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <main className="mainSection">
        <p className="mainText">
          Välkommen till Yummy buger! Vi serverar gourméthamburgare på
          amerikanskt vis. Boka ett bord via vårt bokningssystem eller{" "}
          <span>
            <Link to="/contact">kontakta oss.</Link>
          </span>
        </p>
        <button>
          <Link to="/booking">Boka</Link>
        </button>
      </main>
    </>
  );
};

export default Home;
