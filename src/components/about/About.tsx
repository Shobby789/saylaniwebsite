import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function About() {
  return (
    <div>
      <Header heading="About Us" />
      <Footer />
      <Outlet />
    </div>
  );
}
