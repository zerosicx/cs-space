import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface HackathonsProps {
  loggedIn: boolean
}

const Hackathons: React.FC<HackathonsProps>= ({loggedIn}) => {

  const nav = useNavigate();

   useEffect(() => {
    if (!loggedIn){
      nav('/login');
    }
  })
  
  return (
    <div>Hackathons</div>
  )
}

export default Hackathons;