import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <footer>
        <ul className="socialMedia">
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
        </ul>
        <ul className="adress">
          <li>Yummy burger AB</li>
          <li>Burgargatan 77</li>
          <li>123 45</li>
          <li>Stockholm</li>
        </ul>
      </footer>
    </>
  );
};
