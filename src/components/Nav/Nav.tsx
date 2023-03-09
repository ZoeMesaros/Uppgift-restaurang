import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
  useEffect(() => {
    let menu = document.querySelector(".menu") as HTMLElement;
    let open = document.querySelector("#open") as HTMLElement;
    let close = document.querySelector("#close") as HTMLElement;

    console.log(open);

    if (open) {
      console.log(open);
      open.onclick = () => {
        menu?.classList.add("active");
      };
    }

    if (close) {
      close.onclick = () => {
        menu?.classList.remove("active");
      };
    }
  });

  return (
    <>
      <i className="fa-solid fa-bars" id="open"></i>
      <nav className="menu">
        <i className="fa-solid fa-x" id="close"></i>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/booking">Bokningar</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>

      {/*  */}
      <nav className="bigmenu">
        <ul className="bigmenu-ul">
          <li className="bigmenu-li">
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/booking">Bokningar</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
