import React, { useEffect, useState } from 'react'
import './Content.css';
import JobTable from '../components/JobTable';
import { nzJobsUrl, APIKey } from '../utilties/config';
import { useNavigate } from 'react-router-dom';

interface JobsProps {
    loggedIn: boolean
}

const HomeContent: React.FC<JobsProps> = ({loggedIn}) => {

    const [ pageNum, setPageNumber ] = useState<number>(1);
    const [ jobsData, setJobsData ] = useState<any[]>([]);
    const [ jobsLoaded, setJobsLoaded ] = useState<boolean>(false);

    useEffect(() => {
        // Define the base URL
        const baseUrl = nzJobsUrl;

        // Define the location parameter (you can customize this as needed)

        // Create the URL with the pageNumber parameter
        const url = `${baseUrl}&page=${pageNum}&api_key=${APIKey}`;

        // Make the fetch request
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Assuming the data returned is an array of jobs
            const results = data.results;
            console.log(results[0].publication_date);

            
            // Go through publication dates then sort
            for(var i=0; i<results.length; i++) {
                results[i].publication_date = new Date(Date.parse(results[i].publication_date));
            }
            results.sort((date1: { publication_date: number; }, date2: { publication_date: number; }) => date2.publication_date - date1.publication_date);
            console.log(results);

            setJobsData(results);
            setJobsLoaded(true);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
        }, [pageNum]);

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
            <div className='content2'>   
                <div className='row'>
                    <h3 className="mt-4 px-4">New Job Listings</h3>
                    <section className="container">
                    {
                        <div className="">
                            { jobsLoaded &&
                            <section>
                            <article className="">
                                <JobTable data={jobsData.slice(0,6)}></JobTable>
                            </article>
                            </section>
                            }
                        </div> 
                    }
                    </section>
                </div>
            </div>
            <div className='content3'>   
                <div className='row'>
                    <h3 className="mt-4 px-4">Scholarships</h3>
                    <div className="listing-card__container col-md-12 col-lg-12 col-sm-12 px-4 my-2">
                        <div className="listing-card__card px-4 py-4">
                            <h4>Scholarship One</h4>    
                            <p>Description</p>
                        </div>
                        <div className="listing-card__card px-4 py-4">
                            <h4>Scholarship Two</h4>    
                            <p>Description</p>
                        </div>
                        <div className="listing-card__card px-4 py-4">
                            <h4>Scholarship Three</h4>    
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    // click more.. 
    // check if logged in first, if not redirect to login page
    // if logged in, redirect to job details page
  }
  
export default HomeContent

/*
<section className="container">
    {
        <div className="">

        { jobsLoaded &&
        <section>
        <article className="">
            <JobTable data={jobsData.slice(0,5)}></JobTable>
        </article>
        </section>
        }
    </div> 
    }
</section>

return (
    { jobDataLoaded &&
                <>
                <section className="row">
                    <article className="col col-md-8  col-sm-12 description bg-white my-1">
                        <h1 className="mt-4 mb-3 text-primary">{jobData.name}</h1>
                        <h3> {jobData.company.name} </h3>
                        <p><b>Date:</b> {jobData.publication_date}</p>
                        <p><em>Click for more details</em></p>
                    </article>
                </section>
                </>
            }
    <div className='grid-container px-2 py-2'>
        <div className='content1 centred'>   
            <div className="content-card px-3 py-3">
                <p>A place to search for opportunities in computer science and the IT field</p>
                <a href='/jobs'>
                    <button className='find-button'>Find a job</button>
                </a>        
            </div>
        </div>
        <div className='content2'>   
            <div className='row'>
                <h3 className="mt-4 px-4">New Job Listings</h3>
                <div className="listing-card__container col-md-12 col-lg-12 col-sm-12 px-4 my-2">
                    <div className="listing-card__card px-4 py-4">
                        <h4>Listing One</h4>    
                        <p>Description</p>
                    </div>
                    <div className="listing-card__card px-4 py-4">
                        <h4>Listing Two</h4>    
                        <p>Description</p>
                    </div>
                    <div className="listing-card__card px-4 py-4">
                        <h4>Listing Three</h4>    
                        <p>Description</p>
                    </div> 
                    <div className="listing-card__card px-4 py-4">
                        <h4>Listing Four</h4>    
                        <p>Description</p>
                    </div>     
                </div>
            </div>
        </div>
        <div className='content3'>   
            <div className='row'>
                <h3 className="mt-4 px-4">Scholarships</h3>
                <div className="listing-card__container col-md-12 col-lg-12 col-sm-12 px-4 my-2">
                    <div className="listing-card__card px-4 py-4">
                        <h4>Scholarship One</h4>    
                        <p>Description</p>
                    </div>
                    <div className="listing-card__card px-4 py-4">
                        <h4>Scholarship Two</h4>    
                        <p>Description</p>
                    </div>
                    <div className="listing-card__card px-4 py-4">
                        <h4>Scholarship Three</h4>    
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
*/