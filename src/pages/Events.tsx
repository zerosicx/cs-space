import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { csSpaceEventApiUrl } from '../utilties/config';
import loadingImage from '../utilties/loading.gif';
import EventTable from '../components/EventTable';
import { sendAuthenticatedGetRequest } from '../utilties/getSecret';


interface EventsProps {
  loggedIn: boolean
}

const Events: React.FC<EventsProps> = ({loggedIn}) => {

  const [ eventData, setEventData ] = useState<any[]>([]);
  const [ eventDataLoaded, setEventDataLoaded ] = useState<boolean>(false);
  const nav = useNavigate();

  if (!loggedIn){
    nav('/login');
  }

  const getEventsData = async () => {
    // Define the base URL
    const baseUrl = csSpaceEventApiUrl;

    // Create the URL with the pageNumber parameter
    const url = `${baseUrl}/events`;
    // Make the fetch request
    const data = await sendAuthenticatedGetRequest(url);
    setEventData(data.Items);
    setEventDataLoaded(true);
  }
  

  useEffect(() => {
    getEventsData();
    }, [] );
    
  return (
    <section className="container">
      {
        loggedIn &&
        <div className="">
        <article className="row py-5 bg-white">
          <h1 className="mt-4 pt-2 text-primary" >Events</h1>
          <p>This page contains data collected by the team regarding events relevant to the Computer Science/Engineering department at the University of Waikato.</p>
        </article>

        { eventDataLoaded &&
        <section>
          <article className="">
            <EventTable data={eventData}></EventTable>
          </article>

        </section>
        }

        { !eventDataLoaded &&
          <img className="mx-auto w-100" src={loadingImage} alt="loading gif"></img>
        }
      </div> 
      }
    </section>
  )
}

export default Events;