import "./App.css";
import React from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Create from "./components/create/Create";
import Contact from "./components/contact/Contact";
import Map from "./components/map/Map";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Create/>
      <About/>
      <Contact/>
      <Map/>
      <Footer/>
    </div>
  );
};
export default App;
