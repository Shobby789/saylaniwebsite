import "./Courses.css";
import course1 from "../images/webdev.jpg";
import course2 from "../images/logo-design.jpg";
import course3 from "../images/AI.jpg";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();
  // navigate to All Courses page
  const navigateToAllCourses = () => {
    navigate("/AllCourses");
  };
  // navigate to form page
  const navigateToForm = () => {
    navigate("/Form");
  };
  return (
    <>
      <div className="courses-container">
        <h1>Courses We Offer</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          mollitia.
        </p>
        <div className="courseList">
          <div className="courseBox shadow p-3 bg-white rounded text-center">
            <img src={course1} alt="" />
            <h5>
              Web & Mobile <span className="app">App</span>
            </h5>
            <button className="btn btn-success" onClick={navigateToForm}>
              Enroll Now
            </button>
          </div>

          <div className="courseBox shadow p-3 bg-white rounded text-center">
            <img src={course2} alt="" />
            <h5>Logo Designing</h5>
            <button className="btn btn-success" onClick={navigateToForm}>
              Enroll Now
            </button>
          </div>

          <div className="courseBox shadow p-3 bg-white rounded text-center">
            <img src={course3} alt="" />
            <h5>AI Chatbot</h5>
            <button className="btn btn-success" onClick={navigateToForm}>
              Enroll Now
            </button>
          </div>
          {/*CourseList ends here  */}
        </div>

        <button
          id="AllCoursesBtn"
          className="btn btn-success"
          onClick={navigateToAllCourses}
        >
          See All Courses
        </button>
      </div>
    </>
  );
}
