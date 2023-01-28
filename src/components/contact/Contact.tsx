import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <Header heading="Contact us" />
      <Footer />
      <Outlet />
    </div>
  );
}
