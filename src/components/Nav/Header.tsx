import logo from "../../assets/burger3.png";
import { Nav } from "./Nav";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <header className="header">
        <a href="/">
        <img className="logo" src={logo} alt="" /> 
        </a>
        <Nav />
      </header>
    </>
  );
};
