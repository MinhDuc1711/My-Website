import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar.js';
import Projects from './Components/Pages/Projects.js';
import Footer from './Components/Footer.js';
import About from './Components/Pages/About.js';
import UnityGameProject from './Components/Pages/UnityGameProject.js';
import RealEstateWebsiteProject from './Components/Pages/RealEstateWebsiteProject.js';

function App() {
  return (
    <Router basename="/My-Website">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="projects/unitygameproject" element={<UnityGameProject />} />
        <Route path="projects/realestatewebsiteproject" element={<RealEstateWebsiteProject />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
