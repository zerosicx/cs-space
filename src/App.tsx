import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Events from './pages/Events';
import Scholarships from './pages/Scholarships';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import { Auth } from 'aws-amplify';
import JobDetails from './pages/JobDetails';
import ScholDetails from './pages/ScholDetails';
import EventDetails from './pages/EventDetails';

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
        console.log("Problem getting authenticated user.");
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
        <Route path="/events" element={<Events loggedIn={loggedIn}/>} />
        <Route path="/scholarships" element={<Scholarships loggedIn={loggedIn}/>} />
        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/jobs/:id" element={<JobDetails loggedIn={false} />}/>
        <Route path="/scholarships/:id" element={<ScholDetails loggedIn={false} />}/>
        <Route path="/events/:id" element={<EventDetails loggedIn={false} />}/>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
