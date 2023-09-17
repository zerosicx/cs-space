import React, { useEffect } from 'react'
import HomeContent from '../components/HomeContent'
import { Auth } from 'aws-amplify'

interface HomeProps {
  loggedIn: boolean
}

const Home = () => {
  return (
    <div className='container'>
        <h1 className="mt-4 px-3">Welcome to CS Space!</h1>
        <HomeContent></HomeContent>     
    </div>
  )
}

export default Home