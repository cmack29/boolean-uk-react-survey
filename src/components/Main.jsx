import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [duckRadio, setDuckRadio] = useState(false);
  const [duckChecked, setDuckChecked] = useState("");
  // const [duckColour, setDuckColour]

  console.log("Duck: ", duckRadio);

  const handleRadioInput = (event) => {
    // console.log("Inside Radio Input: " event.target.value);

    setDuckRadio(event.target.value);
  };

  const handleCheckboxInput = (event) => {
    setDuckChecked(event.target.value);
  };

  const data = {
    duckRadio,
    duckChecked
  };

  console.log("duck checked", duckChecked);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="from__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <div>
                <li>
                  <input
                    id="color-one"
                    type="radio"
                    name="color"
                    value="1"
                    onChange={(event) => handleRadioInput(event)}
                  />
                  <label for="color-one">1</label>
                </li>
              </div>
              <div>
                <li>
                  <input
                    id="color-two"
                    type="radio"
                    name="color"
                    value="2"
                    onChange={(event) => handleRadioInput(event)}
                  />
                  <label for="color-two">2</label>
                </li>
              </div>
              <div>
                <li>
                  <input
                    id="color-three"
                    type="radio"
                    name="color"
                    value="3"
                    onChange={(event) => handleRadioInput(event)}
                  />
                  <label for="color-three">3</label>
                </li>
              </div>
              <div>
                <li>
                  <input
                    id="color-four"
                    type="radio"
                    name="color"
                    value="4"
                    onChange={(event) => handleRadioInput(event)}
                  />
                  <label for="color-four">4</label>
                </li>
              </div>
            </ul>
          </div>
          <div>
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={(event) => handleCheckboxInput(event)}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onChange={(event) => handleCheckboxInput(event)}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={(event) => handleCheckboxInput(event)}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onChange={(event) => handleCheckboxInput(event)}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>What else have you got to say about your rubber duck?</label>
          <label>Put your name here (if you feel like it):</label>
          <label>Leave us your email pretty please??</label>
        </form>
      </section>
    </main>
  );
}

export default Main;
