import React, { useState , Fragment} from 'react';
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
      document.title = "Pratik's App | Dark Mode";
      showAlert("Dark Mode Enabled", "success");

      document.body.style.backgroundColor = "#3d3d3b";
      document.body.style.color = "white";
    }
    else {
      setMode("light");
      document.title = "Pratik's App | Light Mode";
      showAlert("Dark Mode Disabled", "success");

      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "black";
    }
  }

  const ChangeColorRed = () => {
    document.title = "Pratik's App | Red Mode";
    document.body.style.backgroundColor = "#5c1b11";
    document.body.style.color = "white";
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
    document.getElementById("exampleFormControlTextarea1").style.color = "black";
    showAlert("Background Color Changed to Red", "success");
  }
  const ChangeColorGreen = () => {
    document.title = "Pratik's App | Green Mode";
    document.body.style.backgroundColor = "#03691e";
    document.body.style.color = "white";
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
    document.getElementById("exampleFormControlTextarea1").style.color = "black";
    showAlert("Background Color Changed to Green", "success");
  }

  const ChangeColorYellow = () => {
    document.title = "Pratik's App | Yellow Mode";
    document.body.style.backgroundColor = "#898f15";
    document.body.style.color = "white";
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
    document.getElementById("exampleFormControlTextarea1").style.color = "black";
    showAlert("Background Color Changed to Yellow", "success");
  }
  return (
    <>


      <Router>
        <Fragment>

        <Navbar title="MyApp" aboutName="About My Page" mode={mode} toggleMode={toggleMode} ChangeColorRed={ChangeColorRed} ChangeColorGreen={ChangeColorGreen} ChangeColorYellow={ChangeColorYellow} />
        <Alert alertMessage={alert} />
        <div className="container my-3">

          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter Your Text to Analyze" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
        </Fragment>
      </Router>



    </>
  );
}

export default App;