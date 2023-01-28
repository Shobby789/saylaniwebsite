import "./Facility.css";

export default function Facility() {
  return (
    <>
      <div className="campus" id="facility">
        <h1 className="mb-0">Our Facilities</h1>
        <p className="mt-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, quos?
        </p>
        <div className="facilities">
          <div
            className="box d-flex justify-content-end box shadow p-3 rounded text-white fw-5 fs-4"
            id="library"
          >
            Professional Teachers
          </div>
          <div
            className="box d-flex justify-content-end box shadow p-3 rounded text-white fw-5 fs-4"
            id="ground"
          >
            Projector Classes
          </div>
          <div
            className="box d-flex justify-content-end box shadow p-3 rounded text-white fw-5 fs-4"
            id="food"
          >
            Computer Labs
          </div>
        </div>
      </div>
    </>
  );
}
