// import Button from "../button/Button";
import "./Enroll.css";

export default function Enroll() {
  return (
    <>
      <div className="enroll w-100 d-flex justify-content-center align-items-center">
        <div className="enrollImage w-75 h-75">
          <h1>
            Subscribe to our news letter <br />
            and get notified
          </h1>
          {/* <Button btnTitle="Subscribe Our News Letter" /> */}
          <button className="btn btn-success">Subscribe Our News Letter</button>
        </div>
      </div>
    </>
  );
}
