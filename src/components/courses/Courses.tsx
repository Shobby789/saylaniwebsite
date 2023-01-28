import "./Courses.css";
import course1 from "../images/webdev.jpg";
import course2 from "../images/logo-design.jpg";
import course3 from "../images/AI.jpg";

export default function Courses() {
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
            <button className="btn btn-success">Enroll Now</button>
          </div>

          <div className="courseBox shadow p-3 bg-white rounded text-center">
            <img src={course2} alt="" />
            <h5>Logo Designing</h5>
            <button className="btn btn-success">Enroll Now</button>
          </div>

          <div className="courseBox shadow p-3 bg-white rounded text-center">
            <img src={course3} alt="" />
            <h5>AI Chatbot</h5>
            <button className="btn btn-success">Enroll Now</button>
          </div>
        </div>

        <button id="AllCoursesBtn" className="btn btn-success">
          See All Courses
        </button>
      </div>
    </>
  );
}
