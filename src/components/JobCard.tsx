import React from 'react'
import './JobCard.css';
import { useNavigate } from 'react-router-dom';

type Props = {
    name: String,
    id: number,
    locations: any[],
    company: String
}



const JobCard = (props: Props) => {
  const { name, id, locations, company} = props;
  const nav = useNavigate();

  // When the divider is clicked, redirect the user to the job details page.
  const onJobCardClick = () => {
    console.log(`Job with ID ${id} clicked`);
    nav(`/jobs/job?id=${id}`);
  };

  return (
    <div className="job-card__container col-md-6 col-lg-6 col-sm-12 my-2">
        <div className="bg-light job-card__card px-4 py-4" onClick={onJobCardClick}>
            <h5 className="text-primary">{name}</h5>    
            <p>{id}</p>
            <h6>{company}</h6>
            {
              locations.map((loc: any, index: number) => {
                if (index < 3){
                  return <span className="badge rounded-pill bg-secondary text-light" key={index}>{loc.name}</span>
                } else if (index === 3){
                  return <span data-bs-toggle="tooltip" data-bs-placement="top" title="More locations" key={index}> +</span>
                } else return null;
              })
            }
        </div>     
    </div>
  )
}

export default JobCard