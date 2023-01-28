import "./News.css";
import microsoft2 from "../images/microsoft2.jpg";

export default function News() {
  return (
    <>
      <div className="divThree">
        <h2 className="text-center d-block pt-3 mb-5">Upcoming Events</h2>
        <div className="eventsDiv">
          {/* card 1 */}
          <div className="newsCard">
            <img src={microsoft2} alt="" />
            <button className="btn btn-success mt-4 ms-3 date">
              JAN 01 2023
            </button>
            <p className="mt-2 ms-3">
              Saylani Welfare International Trust | Laptop Scheme
            </p>
            <div className="btn btn-light ms-3 arrowDiv">
              <a href="https://www.readmore.com">Read More</a>
            </div>
          </div>

          {/* card 2 */}
          <div className="newsCard">
            <img src={microsoft2} alt="" />
            <button className="btn btn-success mt-4 ms-3 date">
              JAN 03 2023
            </button>
            <p className="mt-2 ms-3">
              Saylani Welfare International Trust | Hospital
            </p>
            <div className="btn btn-light ms-3 arrowDiv">
              <a href="https://www.readmore.com">Read More</a>
            </div>
          </div>

          {/* card 3 */}
          <div className="newsCard">
            <img src={microsoft2} alt="" />
            <button className="btn btn-success mt-4 ms-3 date">
              JAN 08 2023
            </button>
            <p className="mt-2 ms-3">
              Saylani Welfare International Trust | Food Distribution
            </p>
            <div className="btn btn-light ms-3 arrowDiv">
              <a href="https://www.readmore.com">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
