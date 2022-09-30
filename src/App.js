import Home from "./pages/home";
import {Contact} from "./pages/contact";
import Portfolio from "./pages/portfolio";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  AOS.init();

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
