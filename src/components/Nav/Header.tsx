import logo from "../../assets/burger3.png";
import { Nav } from "./Nav";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="" />
        <Nav />
      </header>
    </>
  );
};
