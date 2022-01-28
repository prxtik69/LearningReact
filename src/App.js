import "./App.css";
import DarkMode from "./components/DarkMode";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
       <Navbar title="MyApp" aboutName="About My Page" />
       <div className="container">

       <TextForm />
       <DarkMode/>

       </div>
    </>
  );
}

export default App;
