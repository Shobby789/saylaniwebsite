import "./Guide.css";

export default function SaylaniGuideForm() {
  return (
    <div>
      <div className="guide">
        <h2>Saylani Guide</h2>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter E-Mail Address"
        />
        <button className="btn btn-success">Subscribe</button>
      </div>
    </div>
  );
}
