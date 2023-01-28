import "./AllCourses.css";
import course1 from "../images/webdev.jpg";
import course2 from "../images/logo-design.jpg";
import course3 from "../images/AI.jpg";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function AllCourses() {
  return (
    <>
      <Header />
      <div className="courses">
        <h1>Apply for Courses</h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          mollitia.
        </p>
        <div className="courseList">
          <div className="courseBox shadow p-3 mb-5 bg-white rounded text-center">
            <img src={course1} alt="" />
            <h5 className="mb-0">Web & Mobile App</h5>
            <button className="btn btn-success">Enroll Now</button>
          </div>

          <div className="courseBox shadow p-3 mb-5 bg-white rounded text-center">
            <img src={course2} alt="" />
            <h5 className="mb-0">Logo Designing</h5>
            <button className="btn btn-success">Enroll Now</button>
          </div>

          <div className="courseBox shadow p-3 mb-5 bg-white rounded text-center">
            <img src={course3} alt="" />
            <h5 className="mb-0">AI Chatbot</h5>
            <button className="btn btn-success">Enroll Now</button>
          </div>

          <div className="courseBox shadow p-3 mb-5 bg-white rounded text-center">
            <img src={course1} alt="" />
            <h5 className="mb-0">AI & Data Science</h5>
            <button className="btn btn-success">Enroll Now</button>
          </div>

          <div className="courseBox shadow p-3 mb-5 bg-white rounded text-center">
            <img src={course2} alt="" />
            <h5 className="mb-0">Techno Kids Online Course</h5>
            <button className="btn btn-success">Enroll Now</button>
          </div>

          <div className="courseBox shadow p-3 mb-5 bg-white rounded text-center">
            <img src={course3} alt="" />
            <h5 className="mb-0">Mobile Repairing</h5>
            <button className="btn btn-success">Enroll Now</button>
          </div>
        </div>
      </div>
      <Footer />
      <Outlet />
    </>
  );
}
