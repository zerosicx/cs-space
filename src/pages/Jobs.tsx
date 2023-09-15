import React, { useEffect, useState } from 'react'
import JobTable from '../components/JobTable';
import Pagination from '../components/Pagination';
import { nzJobsUrl } from '../utilties/config';
import loadingImage from '../utilties/loading.gif';
import { useNavigate } from 'react-router-dom';
import { getSecretAPIKey } from '../utilties/getSecret';

interface JobsProps {
  loggedIn: boolean
}

interface JobAttributes {
  id: number,
  name: string,
  description: string,
  date: string,
  categories: any[],
  level: string,
  company: string,
  locations: any[]
}

const Jobs: React.FC<JobsProps>= ({loggedIn}) => {

  const [ pageNum, setPageNumber ] = useState<number>(1);
  const [ jobsData, setJobsData ] = useState<JobAttributes[]>([]);
  const [ jobsLoaded, setJobsLoaded ] = useState<boolean>(false);
  const nav = useNavigate();

  if (!loggedIn){
    nav('/login');
  }
  
  const getJobsData = async (pageNum: number) => {
    // Define the base URL
    const baseUrl = nzJobsUrl;

    // Define the location parameter (you can customize this as needed)
    const APIKey =  await getSecretAPIKey();

    // Create the URL with the pageNumber parameter
    const url = APIKey ? `${baseUrl}&page=${pageNum}&api_key=${APIKey}` : `${baseUrl}&page=${pageNum}`;

    // Make the fetch request
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data returned is an array of jobs
        const results: JobAttributes[] = [];
        
        data.results.map((job: any) => {
          const jobItem: JobAttributes = {
            id: job.id,
            name: job.name,
            description: job.content,
            date: job.publication_date,
            categories: job.categories,
            level: job.levels[0].name,
            company: job.company ? job.company : null,
            locations: job.locations
          };

          results.push(jobItem);
          return null;
        })

        setJobsData(results);
        setJobsLoaded(true);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getJobsData(pageNum);
  }, [pageNum]);

  return (
    <section className="container">
      {
        loggedIn &&
        <div className="">
        <article className="row py-3 bg-white">
          <h1 className="mt-4 pt-2 text-primary" >Job Listings</h1>
          <p> <em> This page contains a listing of all entry level websites compiled by The Muse. <br/></em> See more at <a className="text-info" href="https://www.themuse.com/developers/api/v2"><em>The Muse Developer's API</em></a></p>
        </article>

        { jobsLoaded &&
        <section>
          <article className="">
            <JobTable data={jobsData} showJobFilter={true}></JobTable>
          </article>

          <article>
            <Pagination pageNumber={pageNum} setPageNumber={setPageNumber} totalPages={10}></Pagination>
          </article>
        </section>
        }

        { !jobsLoaded &&
          <img className="mx-auto w-100" src={loadingImage} alt="loading gif"></img>
        }
      </div> 
      }
    </section>
  )
}

export default Jobs;