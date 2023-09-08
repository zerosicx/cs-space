import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Hackathons from './pages/Hackathons';
import Scholarships from './pages/Scholarships';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import { Auth } from 'aws-amplify';

function App() {
  const [ loggedIn, setLoggedIn ] = useState<boolean>(false);

  useEffect(() => {
    const isAuthenticated = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (user){
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    isAuthenticated();
  })

  return (
   <BrowserRouter>
   <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs loggedIn={loggedIn}/>} />
        <Route path="/hackathons" element={<Hackathons loggedIn={loggedIn}/>} />
        <Route path="/scholarships" element={<Scholarships loggedIn={loggedIn}/>} />
        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
