import "./Footer.css";
import fb from "../images/facebook-logo.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-success d-flex flex-column align-items-center justify-content-center">
        <h3 className="fw-bold text-white">About Us</h3>
        <p className="mt-3 text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          quae eos! Maiores earum eius tempora minima quasi error.
          <br />
          Impedit eius facilis beatae nostrum vel repudiandae?
        </p>
        <p className="mt-2" id="social-icons">
          <img src={fb} alt="facebook" className="fb" />
          <img src={twitter} alt="twitter" className="fb" />
          <img src={instagram} alt="instagram" className="insta" />
          <img src={linkedin} alt="linkedin" className="fb" />
        </p>
      </footer>
    </>
  );
}
