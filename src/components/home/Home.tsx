import Campuses from "../campuses/Campuses";
import Facility from "../facility/Facility";
import Footer from "../footer/Footer";
import Slider from "../slider/Slider";
import News from "../news/News";
import Courses from "../courses/Courses";
import { Outlet } from "react-router-dom";
import Enroll from "../enroll/Enroll";

export default function Home() {
  return (
    <div>
      <Slider />
      <Courses />
      {/* <Campuses />
      <News />
      <Facility />
      <Enroll /> */}
      <Footer />
      <Outlet />
    </div>
  );
}
