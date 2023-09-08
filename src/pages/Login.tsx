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

  Hub.listen('auth', (data) => {
      if (data.payload.event === "signIn"){
        setLoggedIn(true);
        nav('/');
      } else {
        setLoggedIn(false);
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