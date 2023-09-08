import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './Login.css';


type Props = {}

const Login = (props: Props) => {
  return (
    <div className="container-fluid login-container__modal">
        <Authenticator>
        </Authenticator>
    </div>
  )
}

export default Login