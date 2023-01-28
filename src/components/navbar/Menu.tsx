import "./Menu.css";
import { Outlet, Link } from "react-router-dom";
import smitlogo from "../images/saylani-logo-1.png";

export default function Menu() {
  return (
    <div>
      <nav className="bg-success">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <span className="material-symbols-outlined">menu</span>
        </label>
        {/* <label className="logo fw-bold fs-2 text-white">SMIT</label> */}
        <img src={smitlogo} alt="smit" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/certification">Certification</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
