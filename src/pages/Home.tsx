import React, { useEffect } from 'react'
import HomeContent from '../components/HomeContent'
import { Auth } from 'aws-amplify'

interface HomeProps {
  loggedIn: boolean
  setLoggedIn: (loggedIn: boolean) => void
}

const Home: React.FC<HomeProps> = ({loggedIn, setLoggedIn}) => {
  
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
    <div className='container'>
        <h1 className="mt-4 px-3">Welcome to CS Space!</h1>
        <HomeContent loggedIn={loggedIn}></HomeContent>     
    </div>
  )
}

export default Home