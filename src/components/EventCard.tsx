import React from 'react'
import './JobCard.css';
import './EventCard.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

type EventCardProps = {
    title: String,
    date: String,
    description: String,
    id: number
}

const EventCard: React.FC<EventCardProps>= ({title, date, description, id}) => {
  const nav = useNavigate();

  // When the divider is clicked, redirect the user to the job details page.
  const onEventCardClick = () => {
    console.log(`Job with ID ${id} clicked`);
    nav(`/events/event?id=${id}`);
  };

  let colSizeString = "job-card__container col-sm-6 my-2";
  const [searchParams] = useSearchParams();

  if (searchParams.size === 0){
    colSizeString = "job-card__container col-sm-12 my-2";
  }

  return (
    <div className={colSizeString} onClick={onEventCardClick}>
        <div className="card job-card__card">
          <div className="card-body">
            <div className="card-text">
              <h5 className="text-primary">{title}</h5>    
                <p className="line-clamp-text">{date}</p> 
                <hr></hr>
             <p className="line-clamp-text">{description}</p>
            </div>
          </div>
        </div>     
    </div>
  )
}

export default EventCard;