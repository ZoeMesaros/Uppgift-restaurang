import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Modal from "./Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen((localStorage.getItem("checkbox") || "false") === "false");
  }, []);
  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      <main className="mainSection">
        <p className="mainText">
          Välkommen till Yummy Burger! Vi serverar gourméthamburgare på
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
