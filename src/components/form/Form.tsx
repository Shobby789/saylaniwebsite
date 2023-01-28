import "./Form.css";

export default function Form() {
  return (
    <>
      <div className="form-container">
        <div className="w-75 border border-dark bg-secondary mt-5 mx-auto rounded">
          <form className="form-style-9">
            <ul>
              <li>
                <input
                  type="text"
                  name="field1"
                  className="field-style field-split align-left"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="field2"
                  className="field-style field-split align-right"
                  placeholder="Email"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="field3"
                  className="field-style field-split align-left"
                  placeholder="Phone"
                />
                <input
                  type="url"
                  name="field4"
                  className="field-style field-split align-right"
                  placeholder="Website"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="field3"
                  className="field-style field-full align-none"
                  placeholder="Subject"
                />
              </li>
              <li>
                <textarea
                  name="field5"
                  className="field-style"
                  placeholder="Message"
                ></textarea>
              </li>
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}
