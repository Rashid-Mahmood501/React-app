import Accordian from "./Accordian";
import "./App.css";
import Navbar from "./Navbar";
import Textform from "./Textform";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/About" element={<Accordian />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<div className="container"><Textform /></div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
