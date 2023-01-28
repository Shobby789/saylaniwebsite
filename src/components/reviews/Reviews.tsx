import "./Reviews.css";
import star from "../images/star.png";

export default function Reviews() {
  return (
    <>
      <div className="reviews">
        <h1>What Our Students Say</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          assumenda!
        </p>

        <div className="comments w-100">
          <div className="user box shadow p-3 rounded">
            <h6>Shoaib Muhammad</h6>
            <p className="user-review">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              nesciunt accusamus iure maxime tempore voluptatem rerum hic, ab
              veritatis accusantium. Tempora voluptate placeat impedit id.
            </p>
            <p>
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
            </p>
          </div>
          <div className="user box shadow p-3 rounded">
            <h6>Muhammad Haseeb</h6>
            <p className="user-review">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              nesciunt accusamus iure maxime tempore voluptatem rerum hic, ab
              veritatis accusantium. Tempora voluptate placeat impedit id.
            </p>
            <p>
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
