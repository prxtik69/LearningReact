import React, { useState } from 'react';
import "./App.css";
// import DarkMode from "./components/DarkMode";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {

  const [mode , setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#3d3d3b";
      document.body.style.color = "white";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "black";
    }
  }
  return (
    <>
       <Navbar title="MyApp" aboutName="About My Page" mode={mode} toggleMode={toggleMode}/>
       <div className="container">

       <TextForm heading="Enter Your Text to Analyze" mode={mode}/>
       {/* <DarkMode/> */}

       </div>
    </>
  );
}

export default App;
