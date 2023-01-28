import img1 from "../images/hero1.jpg";
import img2 from "../images/hero2.jpg";
import img3 from "../images/hero3.jpg";
import img4 from "../images/hero4.jpg";
import { useEffect, useState } from "react";
import "./Slider.css";
import Button from "../button/Button";

export default function Slider() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([img1, img2, img3, img4]);

  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < 3 ? selectedImage + 1 : 0
      );
    }, 6000);
  }, []);

  return (
    <>
      <div className="slider-container">
        <img src={allImages[selectedImage]} alt="" />
        <div className="centered">
          <h1 className="fw-bold fs-1">Saylani Mass Institute of Technology</h1>
          <p className="mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet a
            quos, atque doloremque dolorem illo incidunt iure et vero autem?
          </p>
          {/* <Button btnTitle="Explore More" /> */}
          <button className="btn btn-success py-3 px-4 fs-6">
            Explore More
          </button>
        </div>
      </div>
    </>
  );
}
