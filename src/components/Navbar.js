import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const Style1 = {
    background: "none",
    color: "red",
    border: "none",
    paddingRight: 25,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  };
  const Style2 = {
    background: "none",
    color: "#04ff00",
    border: "none",
    paddingRight: 25,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  };
  const Style3 = {
    background: "none",
    color: "yellow",
    border: "none",
    paddingRight: 25,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  };
  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutName}
              </Link>
            </li>
          </ul>

          <button
            id="redButton"
            className="text-decoration-none"
            style={Style1}
            onClick={props.ChangeColorRed}
          >
            Red
          </button>
          <button
            className="text-decoration-none"
            style={Style2}
            onClick={props.ChangeColorGreen}
          >
            Green
          </button>
          <button
            className="text-decoration-none"
            style={Style3}
            onClick={props.ChangeColorYellow}
          >
            Yellow
          </button>
          <div
            className={`form-check form-switch ${
              props.mode === "light" ? "text-dark" : "text-light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutName: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "This is Title",
  aboutName: "This is About Name",
};
