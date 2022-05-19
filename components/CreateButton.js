//TODO
// Create a modal
// generate button option
//

function CreateButton() {
  return (
    <section
      className="main flex"
      id="donatebutton"
      style={{ backgroundColor: "#fff" }}
    >
      <h2>Create a Donate Via UPI Button.</h2>
      <article
        className="flex js responsive "
        style={{
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container flex column">
          <div className="flex column">
            <label>name</label>
            <input placeholder="your name" />
          </div>
          <div className="flex column">
            <label>upi id</label>
            <input placeholder="your upi id" />
          </div>

          <div className="flex column">
            <label>Chose Ring Color</label>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <label>Choose Amount</label>
          </div>
          <div className="flex center">
            <button>Generate Button</button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default CreateButton;
