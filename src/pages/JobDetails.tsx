import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { redirect, useSearchParams } from 'react-router-dom';
import { jobDetailBaseUrl } from '../utilties/config';

interface JobsProps {
  loggedIn: boolean
}

const JobDetails: React.FC<JobsProps> = ({loggedIn}) => {

    // Check if the user is authenticated. If not, redirect to login page.
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [ jobData, setJobData ] = useState<any>(null);
    const [ jobDataLoaded, setJobDataLoaded ] = useState<boolean>(false);

    if (!loggedIn){
      redirect('/login');
    }

    console.log(`Searching for ${id}`);

    useEffect(() => {
    const isAuthenticated = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (!user){
            redirect('/login');
        }
     } catch (error) {
        console.log(error);
      }
    };

    isAuthenticated();
  })

  useEffect(() => {
    // Move the API call inside this useEffect
    const getJobDetailsData = () => {
      const APIKey = process.env.REACT_APP_theMuseAPIKey;
      console.log(`Searching for ${id}`);
      const baseUrl = jobDetailBaseUrl;
      const url = APIKey ? `${baseUrl}/${id}?api_key=${APIKey}` : `${baseUrl}/${id}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const results = data;
          setJobData(results);
          setJobDataLoaded(true);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          alert(`An error occured. ${error}`);
        });
    };

    getJobDetailsData(); // Call the API when the component mounts
  }, [id]); // Add id as a dependency to trigger the API call when it changes

  return (
    <div className="container">
        { jobDataLoaded &&
            <>
            <section className="row">
                <article className="col col-sm-12 description bg-white my-1">
                   <div className="container-fluid card my-4 h-auto bg-light p-5">
                    <div className="">
                      <h1 className="display-4 mt-4 mb-3 text-primary">{jobData.name}</h1>
                    </div>
                        <h3>Details</h3>
                        <h4 className="text-danger py-2"> {jobData.company.name} </h4>
                        <p><b>Date:</b> {jobData.publication_date}</p>

                        {
                            jobData.categories.length >= 1 && <p><b>Category:</b> {jobData.categories[0].name}</p>
                        }
                        
                        <p><b>Locations: </b>
                        {
                            jobData.locations.map((loc: any, index: number) => {
                                return <span className="badge rounded-pill bg-secondary text-light" key={index}>{loc.name}</span>
                            })
                        }
                        </p>
                    </div>
                    <h1 className="text-primary" >Description</h1>
                    <div dangerouslySetInnerHTML={{ __html: jobData.contents }} />
                </article>
            </section>
            </>
        }
    </div>
  )
}

export default JobDetails