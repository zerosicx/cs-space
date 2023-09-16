import React, { useEffect, useState } from 'react'
import './Content.css';
import JobTable from '../components/JobTable';
import { csSpaceBackendApiUrl, nzJobsUrl } from '../utilties/config';
import { getSecretAPIKey, sendAuthenticatedGetRequest } from '../utilties/getSecret';
import loadingImage from '../utilties/loading.gif';
import ScholTable from './ScholTable';
import { redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const HomeContent = () => {

    const [ pageNum ] = useState<number>(1);
    const [ jobsData, setJobsData ] = useState<any[]>([]);
    const [ jobsLoaded, setJobsLoaded ] = useState<boolean>(false);
    const [ scholData, setScholData ] = useState<any[]>([]);
    const [ scholDataLoaded, setScholDataLoaded ] = useState<boolean>(false);
    const [ loggedIn, setLoggedIn ] = useState<boolean>(false);

    useEffect(() => {
        const isAuthenticated = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            if (user){
            setLoggedIn(true);
            } else {
            setLoggedIn(false);
            }
        } catch (error) {
            console.log("Problem getting authenticated user.");
        }
        };

        isAuthenticated();
    }, [])

    const getJobsData = async () => {
        // Define the base URL
        const baseUrl = nzJobsUrl;
        let APIKey = null;
        if (loggedIn){
            APIKey =  await getSecretAPIKey();
        }

        // Create the URL with the pageNumber parameter
        const url = APIKey ? `${baseUrl}&page=${pageNum}&api_key=${APIKey}` : `${baseUrl}&page=${pageNum}` ;

        // Make the fetch request
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Assuming the data returned is an array of jobs
            const results = data.results;
            setJobsData(results);
            setJobsLoaded(true);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }

    const getScholarshipsData = async () => {

        if (!loggedIn){
            return;
        }
        
        const baseUrl = csSpaceBackendApiUrl;
        // Create the URL with the pageNumber parameter
        const url = `${baseUrl}/scholarships`;
        // Make the fetch request
        const data = await sendAuthenticatedGetRequest(url);
        setScholData(data.Items);
        setScholDataLoaded(true);
    }


    useEffect(() => {
        getJobsData();
        getScholarshipsData();
    }, [loggedIn]);

    return (
        <div className='grid-container px-2 py-2'>
            <div className='content1 centred'>   
                <div className="content-card px-3 py-3">
                    <p>A place to search for opportunities in computer science and the IT field</p>
                    <a href='/jobs'>
                        <button className='find-button'>Find a job</button>
                    </a>        
                </div>
            </div>
            <div className='content2 col'>   
                <div className='row'>
                    {/*  TODO: Get data from the public API */}
                    <h3 className="mt-4 px-4">New Job Listings</h3>
                    <section className="container">
                    {
                        <div className="">
                            { jobsLoaded &&
                            <article className="">
                                <JobTable data={jobsData.slice(0,3)} showJobFilter={false}></JobTable>
                            </article>
                            }
                            { !jobsLoaded &&
                                    <img className="w-100" src={loadingImage} alt="loading gif"></img>
                            }
                        </div> 
                    }
                    </section>
                </div>
            </div>
            <div className='content3'>   
                <div className='row'>
                    {/* TODO: Get data from the database (Dynamo DB) */}
                    <h3 className="mt-4 px-4">Scholarships</h3>
                    <div className="listing-card__container col-md-12 col-lg-12 col-sm-12 px-4 my-2">
                        { loggedIn &&
                            <section>
                            <article className="">
                                <ScholTable data={scholData.slice(0,3)}></ScholTable>
                            </article>
                            </section>
                        }
                        {
                            !loggedIn &&
                            <div>
                                <h2>Please sign in to view exclusive content.</h2>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
export default HomeContent