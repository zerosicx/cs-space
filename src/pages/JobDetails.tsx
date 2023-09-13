import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { redirect, useSearchParams } from 'react-router-dom';
import { jobDetailBaseUrl } from '../utilties/config';

interface JobsProps {
  loggedIn: boolean
}

const JobDetails: React.FC<JobsProps> = ({loggedIn}) => {

    // Check if the user is authenticated. If not, redirect to login page.
    const [searchParams, setSearchParams] = useSearchParams();
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
                <article className="col col-md-8  col-sm-12 description bg-white my-1">
                    <h1 className="mt-4 mb-3 text-primary">{jobData.name}</h1>
                    <h3> {jobData.company.name} </h3>
                    <div dangerouslySetInnerHTML={{ __html: jobData.contents }} />
                </article>
                <article className="col col-md-4 my-5 metadata">
                    <div className="my-3 mx-3 h-auto bg-light p-5 rounded shadow">
                        <h3>Meta Data</h3>
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
                </article>
            </section>
            </>
        }
    </div>
  )
}

export default JobDetails