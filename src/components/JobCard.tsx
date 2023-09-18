import React from 'react'
import './JobCard.css';
import { useNavigate } from 'react-router-dom';

interface JobCardProps {
    name: String,
    id: number,
    locations: any[],
    company: String,
    homePage: boolean
}

const JobCard: React.FC<JobCardProps> = ({ name, id, locations, company, homePage}) => {
  const nav = useNavigate();
  let colSizeString = "job-card__container col-sm-6 my-2";

  // When the divider is clicked, redirect the user to the job details page.
  const onJobCardClick = () => {
    console.log(`Job with ID ${id} clicked`);
    nav(`/jobs/job?id=${id}`);
  };

  if (homePage){
    colSizeString = "job-card__container col-sm-12 my-2";
  }

  return (
    <div className={colSizeString}>
            <div className="card job-card__card" onClick={onJobCardClick}>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{company}</h6>
                <p className="card-text">
                  {
                    locations.map((loc: any, index: number) => {
                      if (index < 3){
                        return <span className="badge rounded-pill bg-secondary text-light" key={index}>{loc.name}</span>
                      } else if (index === 3){
                        return <span data-bs-toggle="tooltip" data-bs-placement="top" title="More locations" key={index}> +</span>
                      } else return null;
                    })
                  }
                </p>
                <a href={`/jobs/job?id=${id}`} className="card-link" onClick={onJobCardClick}>Read more</a>
              </div>
          </div>
    </div>
  )
}

export default JobCard