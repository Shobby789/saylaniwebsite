import React from "react";
import { Outlet } from "react-router-dom";
import SaylaniGuideForm from "../about/saylani-guide/SaylaniGuideForm";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <Header heading="Contact us" />
      <div className="contact-container"></div>
      <SaylaniGuideForm />
      <Footer />
      <Outlet />
    </div>
  );
}
