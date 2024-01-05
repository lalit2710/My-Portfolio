import { Route, Routes } from "react-router-dom";
import "./index.css"

import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Skills from "./routes/Skills";
import Testimonials from "./routes/Testimonials";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/testimonials" element={<Testimonials />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
