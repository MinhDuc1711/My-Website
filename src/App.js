import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar.js';
import Projects from './Components/Pages/Projects.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
