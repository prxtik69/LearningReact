import React, { useState } from "react";


export default function TextForm(props) {
  const [text, useText] = useState("");
  const ChangeToUpperCase = () => {
    let UpperCaseText = text.toUpperCase();
    useText(UpperCaseText);
  };

  const ChangeToLowerCase = () => {
    let LowerCaseText = text.toLowerCase();
    useText(LowerCaseText);
  }

  const ChangedEvent = (event) => {
    useText(event.target.value);
  };
  return (
    <>
    <div className="container">
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={ChangedEvent}
        ></textarea>
      </div>
      <button className="btn btn-outline-primary" onClick={ChangeToUpperCase}>
        Convert to Uppercase
      </button>
      <button className="btn btn-outline-danger" onClick={ChangeToLowerCase}>
        Convert to Lowercase
      </button>
    </div>

    <div className="container my-5">
      <h1>Your Text Summary</h1>
     
      <p><b>Your Text Has :  <code>{text.split(" ").length - 1} Words and {text.length} Characters</code></b></p>
      <p>Your Text Took {0.008 * text.split(" ").length} minutes to read.</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
