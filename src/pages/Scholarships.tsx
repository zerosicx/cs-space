import React from 'react'
import { useNavigate } from 'react-router-dom';

interface ScholarshipsProps {
  loggedIn: boolean
}

const Scholarships: React.FC<ScholarshipsProps> = ({loggedIn}) => {

  const nav = useNavigate();
  
  if (!loggedIn){
    nav('/login');
  }
    
  return (
    <div>Scholarships</div>
  )
}

export default Scholarships;