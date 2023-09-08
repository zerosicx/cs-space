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
    <div className="job-card__container col-md-6 col-lg-6 col-sm-12 my-2">
        <div className="bg-light job-card__card px-4 py-4">
            <h5 className="text-primary">{name}</h5>    
            <p>{id}</p>
            <h6>{company}</h6>
            {
              locations.map((loc: any, index: number) => {
                return <span className="badge rounded-pill bg-secondary text-light" key={index}>{loc.name}</span>
              })
            }
        </div>
       
    </div>
  )
}

export default JobCard