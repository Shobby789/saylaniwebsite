import "./Form.css";
import logo from "../images/saylani-logo-1.png";
import { useState } from "react";

export default function Form() {
  return (
    <>
      <div className="contact-container">
        <img src={logo} alt="" />
        <h2>Registration Form</h2>
        <div className="form-container">
          <form action="/action_page.php">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
            />
            <label htmlFor="lname">Father Name</label>
            <input
              type="text"
              id="fathername"
              name="lastname"
              placeholder="Father Name.."
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder=" Your Email.."
            />
            <label htmlFor="CNIC">CNIC</label>
            <input
              type="number"
              id="cnic"
              name="cnic"
              placeholder="Your CNIC.."
            />
            <label htmlFor="lname">Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Your Phone Number.."
            />
            <label htmlFor="country">Course</label>
            <select id="course" name="course">
              <option value="webDev">Web & MObile App</option>
              <option value="chatbot">AI Chatbot</option>
              <option value="logodesigning">Logo Designing</option>
              <option value="data-science">AI & Data Science</option>
              <option value="technokids">Techno Kids</option>
              <option value="mobile-repairing">Mobile Repairing</option>
            </select>
            <label htmlFor="education">Education</label>
            <select id="education" name="ecudation">
              <option value="matric">Matric</option>
              <option value="intermediate">Indermediate</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="masters">Masters</option>
            </select>
            <label htmlFor="country">City</label>
            <select id="city" name="city">
              <option value="karachi">Karachi</option>
              <option value="hyderbad">Hyderbad</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
            </select>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Your Address.."
            />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
