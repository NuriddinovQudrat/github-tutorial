import "./App.css";
import React from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Create from "./components/create/Create";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Create/>
      <About/>
    </div>
  );
};
export default App;
