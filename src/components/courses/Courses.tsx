import "./Courses.css";
import course1 from "../images/webdev.jpg";
import course2 from "../images/logo-design.jpg";
import course3 from "../images/AI.jpg";

export default function Courses() {
  return (
    <>
      <div className="courses-container">
        <h1>Courses We Offer</h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          mollitia.
        </p>
        <div className="courseList border border-dark">
          <div className="courseBox shadow p-3 mb-5 bg-white rounded text-center">
            <img src={course1} alt="" />
            <h5 className="mb-0">
              Web & Mobile <span className="app">App</span>
            </h5>
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
        </div>

        <button>See All Courses</button>
      </div>
    </>
  );
}
