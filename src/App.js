import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="MyApp" aboutName="About My Page" />
      <div className="container my-3">
        <TextForm heading="Enter Your Text Here" />
      </div>
    </>
  );
}

export default App;
