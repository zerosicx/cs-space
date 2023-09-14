import React from 'react'
import './JobCard.css';
import { useNavigate } from 'react-router-dom';
import './ScholCard.css';

type Props = {
    title: String,
    id?: number,
    supervisors: any[],
    description: String
}

const ScholCard = (props: Props) => {
  const { title, id, supervisors, description} = props;

  return (
    <div className="job-card__container col-md-6 col-lg-6 col-sm-12 my-2">
        <div className="bg-light job-card__card px-4 py-4">
            <h5 className="text-primary">{title}</h5>    
            <p>{id}</p>
            <p className="line-clamp-text">{description}</p>
            {
              supervisors.map((loc: any, index: number) => {
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

export default ScholCard;