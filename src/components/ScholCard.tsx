import React from 'react'
import './JobCard.css';
import './ScholCard.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

type ScholCardProps = {
    title: String,
    supervisors: any[],
    description: String,
    id: number
}

const ScholCard: React.FC<ScholCardProps>= ({title, supervisors, description, id}) => {
  const nav = useNavigate();

  // When the divider is clicked, redirect the user to the job details page.
  const onScholCardClick = () => {
    console.log(`Job with ID ${id} clicked`);
    nav(`/scholarships/scholarship?id=${id}`);
  };

  let colSizeString = "job-card__container col-sm-6 my-2";
  const [searchParams] = useSearchParams();

  if (searchParams.size === 0){
    colSizeString = "job-card__container col-sm-12 my-2";
  }

  return (
    <div className={colSizeString} onClick={onScholCardClick}>
        <div className="card job-card__card">
          <div className="card-body">
            <div className="card-text">
              <h5 className="text-primary">{title}</h5>    
                {
                  supervisors.map((schol: any, index: number) => {
                    return <span className="badge rounded-pill bg-secondary text-light" key={index}>{schol}</span>
                  })
                }
                <hr></hr>
             <p className="line-clamp-text">{description}</p>
            </div>
          </div>
        </div>     
    </div>
  )
}

export default ScholCard;