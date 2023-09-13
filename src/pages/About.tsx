import React from 'react'
import AboutContent from '../components/AboutContent'
import TeamTable from '../components/TeamTable'
import teamInfo from '../data/teamInfo.json'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='container'>
      <h1 className="mt-4 text-center py-2" >About Us</h1> 
      <AboutContent></AboutContent>
      <div className='container'>
        <h1 className="mt-4 text-center">Our Team</h1>
        <TeamTable data={teamInfo.team_info}></TeamTable>
      </div>
    </div>
  )
}

export default About;