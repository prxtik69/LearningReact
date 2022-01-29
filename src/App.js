import React, { useState } from 'react';
import "./App.css";
// import DarkMode from "./components/DarkMode";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode Enabled", "success");

      document.body.style.backgroundColor = "#3d3d3b";
      document.body.style.color = "white";
    }
    else {
      setMode("light");
      showAlert("Dark Mode Disabled", "success");

      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "black";
    }
  }
  
  const ChangeColorRed = () => {
    document.body.style.backgroundColor = "#5c1b11";
    document.body.style.color = "white";
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
    showAlert("Background Color Changed to Red", "success");
  }
  const ChangeColorGreen = () => {
    document.body.style.backgroundColor = "#03691e";
    document.body.style.color = "white";
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
    showAlert("Background Color Changed to Green", "success");
  }

  const ChangeColorYellow = () => {
    document.body.style.backgroundColor = "#898f15";
    document.body.style.color = "white";
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
    showAlert("Background Color Changed to Yellow", "success");
  }
  return (
    <>
      <Navbar title="MyApp" aboutName="About My Page" mode={mode} toggleMode={toggleMode} ChangeColorRed={ChangeColorRed} ChangeColorGreen={ChangeColorGreen} ChangeColorYellow={ChangeColorYellow}/>
      <Alert alertMessage={alert} />
      <div className="container">

        <TextForm heading="Enter Your Text to Analyze" mode={mode} showAlert={showAlert} />

      </div>
    </>
  );
}

export default App;
