import "./ContactForm.css";
import logo from "./image/saylani-logo-1.png";

export default function ContactForm() {
  return (
    <>
      <div className="contact-container mb-5">
        <img src={logo} alt="" />
        <div className="form-container">
          <form action="/action_page.php">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label htmlFor="country">City</label>
            <select id="city" name="city">
              <option value="karachi">Karachi</option>
              <option value="hyderbad">Hyderbad</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: 200 }}
              defaultValue={""}
            />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
