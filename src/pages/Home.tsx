import React from 'react'
import HomeContent from '../components/HomeContent'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='container'>
        <h1 className="mt-4 px-3">Welcome to CS Space!</h1>
        <HomeContent loggedIn={false}></HomeContent>     
    </div>
  )
}

export default Home