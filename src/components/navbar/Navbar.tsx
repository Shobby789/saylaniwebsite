import logo from "../images/kiss-remove.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" />
        <div className="navlinks">
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">course</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
