import "./About.css";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
// import SaylaniGuideForm from "./saylani-guide/SaylaniGuideForm";

export default function About() {
  return (
    <div>
      <Header heading="About Us" />
      <div className="about-container">
        <div className="about-header">
          <div className="introduction">
            <h2>Introduction</h2>
            <p>
              Saylani Welfare Internation Trust has been serving humanity for 22
              years. Saylani has spent around 7 billion rupees in the service of
              humanity in 2021 and our place is to spend about 11 billion rupees
              for this cause in 2022.
            </p>
          </div>
          <div className="img-box"></div>
        </div>
        <div className="more">
          <h2>More</h2>
          <p>
            Saylani Welfare International Trust has been working for the last 22
            years to improve the conditions of the less privileged, helpless,
            and handicapped individuals. The organization is working day and
            night to make life happier, especially for the middle class, lower
            middle class and even lower class. At time of establishing the
            organization, the founder of Saylani Welfare International Trust and
            a few of his associates had made a commitment to serve the
            distressed people living in Pakistan and abroad in all stages of
            life. It is a blessing in disguise that today the organization is
            serving humanity in more than 63 areas of life without any
            discrimination.
          </p>
          <p>
            The soul, founder and patron of this organization is Hazrat Allama
            Maulana Muhammad Bashir Farooqi. He is also a well-known spiritual
            person and Islamic scholar in the Islamic world. It is the result of
            his efforts that today Saylani Welfare International Trust is
            serving humanity all over the world.
          </p>
          <p>
            The organization started out as a rented house and today has at
            least 630 branches worldwide. The organization also has more than
            630 Dastarkhwan, where thousands of employees are employed. Today,
            the organization spends more than 7 billion annually on the service
            and welfare of humanity. Not only this, but more than 63 spheres of
            life from birth to death (including food, health, education, social
            welfare, clean water, marriage, mass I.T training, vocational
            training, assistance to Syrian and Burmese refugees, pilgrim
            services, school services fees, easy loans, easy employment,
            hairdressing, medical & diagnostic center, laboratory tests, x-ray,
            ultrasound, ECG, consultant clinic, mobile dining, mobile clinic,
            mobile air care clinic & operation theater, and in case of natural
            disasters aid) our organization is serving humanity.
          </p>
          <p className="mb-5">
            More than 300,000 people are benefited daily by the Saylani. The
            organization provides vocational training to unskilled people in
            various fields, renting of poor people houses, school fees and
            annual expenses of their children, assistance in marriage of their
            daughters, loan facility for running small scale business, rickshaws
            and motorbikes for employment, stalls, shop delivery, finger chips
            machine, sewing machines for women and other items are provided.
          </p>
        </div>
      </div>
      {/* <SaylaniGuideForm /> */}
      <Footer />
      <Outlet />
    </div>
  );
}
