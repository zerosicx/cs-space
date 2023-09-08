import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Hackathons from './pages/Hackathons';
import Scholarships from './pages/Scholarships';
import NavBar from './components/NavBar';
import Login from './pages/Login';

function App() {
  const [ loggedIn, setLoggedIn ] = useState<boolean>(false);

  return (
   <BrowserRouter>
   <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
