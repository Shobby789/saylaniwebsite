import React from "react";
import { Outlet } from "react-router-dom";
import SaylaniGuideForm from "../about/saylani-guide/SaylaniGuideForm";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Contact.css";
import logo from "../images/saylani-logo-1.png";

export default function Contact() {
  return (
    <div>
      <Header heading="Contact us" />
      <div className="contact-container">
        <img src={logo} alt="" />
        <div className="form-container">
          <form action="/action_page.php">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label htmlFor="country">City</label>
            <select id="city" name="city">
              <option value="karachi">Karachi</option>
              <option value="hyderbad">Hyderbad</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: 200 }}
              defaultValue={""}
            />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </div>
      <Footer />
      <Outlet />
    </div>
  );
}
