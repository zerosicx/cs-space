import React, { useEffect, useState } from 'react'
import { redirect, useSearchParams } from 'react-router-dom';
import { csSpaceEventApiUrl } from '../utilties/config';
import { sendAuthenticatedGetRequest } from '../utilties/getSecret';

interface EventsProps {
  loggedIn: boolean
}

const EventDetails: React.FC<EventsProps> = ({loggedIn}) => {

    // Check if the user is authenticated. If not, redirect to login page.
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [ eventData, setEventData ] = useState<any>(null);
    const [ eventDataLoaded, setEventDataLoaded ] = useState<boolean>(false);

    if (!loggedIn){
      redirect('/login');
    }

  const getEventDetailsData = async () => {
    const baseUrl = csSpaceEventApiUrl;
    const url = `${baseUrl}/events/${id}`;

    // Make the fetch request
    const data = await sendAuthenticatedGetRequest(url);
    setEventData(data.Item);
    setEventDataLoaded(true); 
  };

  useEffect(() => {
    getEventDetailsData(); // Call the API when the component mounts
  }, [id]); // Add id as a dependency to trigger the API call when it changes

  return (
    <div className="container mb-5">
        { eventDataLoaded &&
            <>
            <section className="row">
                <article className="col col-sm-12 description bg-white my-1">
                   <div className="container-fluid card my-4 h-auto bg-light p-5">
                    <div className="">
                      <h1 className="display-4 mt-4 mb-3 text-primary">{eventData["Title"]}</h1>
                    </div>
                        <h3>Date</h3>
                        <p>{eventData["Date"]}</p>
                        <p><a className="card-link" href={eventData["Link"]}>Read more here</a></p> 
                    </div>
                    <h1 className="text-primary" >Description</h1>
                    <div>
                      {eventData["Description"]}
                    </div>
                </article>
            </section>
            </>
        }
    </div>
  )
}

export default EventDetails;