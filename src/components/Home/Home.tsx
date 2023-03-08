import { Nav } from "../Nav/Nav";
import logo from "../../assets/burger3.png";
import "./Home.scss";

export const Home = () => {
  return (
    <>
      <header className="home">
        <img className="logo" src={logo} alt="" />
        <Nav />
      </header>
      <main className="mainSection">
        <p className="mainText">
          Välkommen till Yummy buger! Vi serverar gourméthamburgare på
          amerikanskt vis. Boka ett bord via vårt bokningssystem eller kontakta
          oss.
        </p>
        <button>Boka</button>
      </main>
    </>
  );
};

export default Home;
