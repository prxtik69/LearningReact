import React, { useState } from "react";

export default function TextForm(props) {
  const [text, useText] = useState("Enter Your Text");
  const Changetext = () => {
    console.log("Change Text");
    let Newtext = text.toUpperCase();
    useText(Newtext);
  };

  const Changed = (event) => {
    useText(event.target.value);
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={Changed}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={Changetext}>
        Convert to Uppercase
      </button>
    </div>
  );
}
