import React from 'react'
import AboutContent from '../components/AboutContent'
import TeamCard from '../components/TeamCard'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='container'>
      <h1 className="mt-4 text-center" >About Us</h1> 
      <AboutContent></AboutContent>
      <h1 className="mt-4 text-center">Our Team</h1>
      <TeamCard></TeamCard>
    </div>
  )
}

export default About;