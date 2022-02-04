import React, { useState } from "react";

export default function TextForm(props) {
  const style = {
    backgroundColor: props.mode === "light" ? "#3d3d3b" : "white",
    color: props.mode === "light" ? "white" : "black",
  };
  const [text, useText] = useState("");
  const ChangeToUpperCase = () => {
    let UpperCaseText = text.toUpperCase();
    useText(UpperCaseText);
    props.showAlert(`Text is now in UPPER CASE`, "success");
  };

  const ChangeToLowerCase = () => {
    let LowerCaseText = text.toLowerCase();
    useText(LowerCaseText);
    props.showAlert(`Text is now in LOWER CASE`, "success");
  };

  const ClearText = () => {
    useText("");
    props.showAlert(`Text is cleared now`, "success");
  };

  const CopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(`Text is copied to clipboard`, "success");
  };

  const CopyTextAndClear = () => {
    navigator.clipboard.writeText(text);
    ClearText();
    props.showAlert(`Text is copied to clipboard and cleared`, "success");
  };

  const ChangedEvent = (event) => {
    useText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            style={style}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={ChangedEvent}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-4 my-2"
          onClick={ChangeToUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-4 my-2"
          onClick={ChangeToLowerCase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-4 my-2"
          onClick={ClearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-4 my-2"
          onClick={CopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-4 my-2"
          onClick={CopyTextAndClear}
        >
          Copy Text & Clear
        </button>
      </div>

      <div className="container my-5">
        <h1>Your Text Summary</h1>

        <p>
          <b>
            Your Text Has :{" "}
            <code>
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              Words and {text.length} Characters
            </code>
          </b>
        </p>
        <p>
          Your Text Took{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          minutes to read.
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the Text Box above to preview it here."}
        </p>
      </div>
    </>
  );
}
