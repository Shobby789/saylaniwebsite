import "./Campuses.css";

export default function Campuses() {
  return (
    <>
      <div className="campus">
        <h1>Our Campuses</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          natus eius amet soluta nostrum ullam.
        </p>
        <div className="campuses">
          <div className="box cmps box shadow p-3 rounded" id="cmps1">
            <h4 className="text-white">Gulshan Campus</h4>
          </div>
          <div className="box cmps box shadow p-3 rounded" id="cmps2">
            <h4 className="text-white">Muhammad Ali Society Campus</h4>
          </div>
          <div className="box cmps box shadow p-3 rounded" id="cmps3">
            <h4 className="text-white">Bahadurabad Campus</h4>
          </div>
        </div>
      </div>
    </>
  );
}
