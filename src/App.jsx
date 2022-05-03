import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import AOS from "aos";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import NavbarComp from './Components/NavbarComp';
import About from './Components/About';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);
  return (
    <>
      <div className='main'>
        <Router>
          {/* Navbar Component */}
          <NavbarComp />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
          </Routes>
          {/* Footer */}
          <Footer />
        </Router>
      </div>
    </>
  );
}
export default App;
