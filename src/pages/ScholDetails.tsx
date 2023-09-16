import React, { useEffect, useState } from 'react'
import { redirect, useSearchParams } from 'react-router-dom';
import { csSpaceBackendApiUrl } from '../utilties/config';
import { sendAuthenticatedGetRequest } from '../utilties/getSecret';

interface ScholsProps {
  loggedIn: boolean
}

const ScholDetails: React.FC<ScholsProps> = ({loggedIn}) => {

    // Check if the user is authenticated. If not, redirect to login page.
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [ scholData, setScholData ] = useState<any>(null);
    const [ scholDataLoaded, setScholDataLoaded ] = useState<boolean>(false);

    if (!loggedIn){
      redirect('/login');
    }

  const getScholDetailsData = async () => {
    const baseUrl = csSpaceBackendApiUrl;
    const url = `${baseUrl}/scholarships/${id}`;

    // Make the fetch request
    const data = await sendAuthenticatedGetRequest(url);
    setScholData(data.Item);
    setScholDataLoaded(true); 
  };

  useEffect(() => {
    // Move the API call inside this useEffect
    

    getScholDetailsData(); // Call the API when the component mounts
  }, [id]); // Add id as a dependency to trigger the API call when it changes

  return (
    <div className="container mb-5">
        { scholDataLoaded &&
            <>
            <section className="row">
                <article className="col col-sm-12 description bg-white my-1">
                   <div className="container-fluid card my-4 h-auto bg-light p-5">
                    <div className="">
                      <h1 className="display-4 mt-4 mb-3 text-primary">{scholData["Title"]}</h1>
                    </div>
                        <h3>Details</h3>
                        <h4 className="text-danger py-2"> University of Waikato </h4>
                        <p><a className="card-link" href={scholData["Link"]}>Read more here</a></p>
                        
                        <p><b>Supervisor(s):</b></p>
                        <br/>
                        {
                            scholData["Supervisor/s"].split(",").map((sup: any, index: number) => {
                                return <span className=" w-25 badge rounded-pill bg-secondary text-light" key={index}>{sup}</span>
                            })
                        }
                        
                    </div>
                    <h1 className="text-primary" >Description</h1>
                    <div>
                      {scholData["Description"]}
                    </div>
                </article>
            </section>
            </>
        }
    </div>
  )
}

export default ScholDetails