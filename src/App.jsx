import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Lession from "./components/Lession/Lession";
import Package from "./components/Package/Package";
import Application from "./components/Application/Application";
import Teacher from "./Teacher list/Teacher";
import Student from "./components/Student/Student";
import Fotter from "./components/Footer/Fotter";
import Toggole from "./components/Student/Toggle Switch/Toggole";

function App() {
  return (
    <>
      <Navbar />
      <Toggole/>
      <Hero />
      <About />
      
      <Lession />
      <Package />
      < Teacher/>
      
      <Application />
      <Student/>
      <Fotter/>
      
    </>
  );
}

export default App;
