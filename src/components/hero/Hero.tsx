import "./Hero.css";
import Navbar from "../navbar/Navbar";
import Button from "../button/Button";

export default function Hero() {
  return (
    <div>
      <div className="bg-primary head">
        <Navbar />
        <div className="content m-auto">
          <h1 className="mb-5">World's Best University</h1>
          <p className="w-75 mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur, nemo omnis. Eos animi voluptatum eum earum tenetur
            reprehenderit minima alias!
          </p>
          <Button btnTitle="Visit us to Know More" />
        </div>
      </div>
    </div>
  );
}
