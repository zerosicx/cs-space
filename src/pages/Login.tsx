import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './Login.css';
import { Hub } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
interface LoginProps {
    loggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
}

const Login: React.FC<LoginProps>= ({loggedIn, setLoggedIn}) => {

  const nav = useNavigate();

  const closeNavbar = () => {
  const navbar = document.querySelector('.navbar-collapse');
    if (navbar?.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  Hub.listen('auth', (data) => {
      if (data.payload.event === "signIn"){
        setLoggedIn(true);
        nav('/');
        closeNavbar();
      } else {
        setLoggedIn(false);
        closeNavbar();
      }
  })

  return (
    <div className="container-fluid login-container__modal">
        <Authenticator>
        </Authenticator>
    </div>
  )
}

export default Login