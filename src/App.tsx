import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Hackathons from './pages/Hackathons';
import Scholarships from './pages/Scholarships';
import NavBar from './components/NavBar';

function App() {
  return (
   <BrowserRouter>
   <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/scholarships" element={<Scholarships />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
