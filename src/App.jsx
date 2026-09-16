import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Footer from "./Components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
            <Footer />

    </BrowserRouter>
  );
}

export default App;