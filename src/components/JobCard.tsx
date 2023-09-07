import React from 'react'
import './JobCard.css';

type Props = {
    name: String,
    id: number,
    locations: any[],
    company: String
}



const JobCard = (props: Props) => {
    const { name, id, locations, company} = props;

  return (
    <div className="job-card__container col-3 my-4">
        <div className="job-card__card px-4 py-4">
            <h4>{name}</h4>    
            <p>{id}</p>
            <p>{company}</p>
        </div>
       
    </div>
  )
}

export default JobCard