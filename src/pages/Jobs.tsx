import React, { useEffect, useState } from 'react'
import JobTable from '../components/JobTable';
import Pagination from '../components/Pagination';
import { nzJobsUrl } from '../utilties/config';
import loadingImage from '../utilties/loading.gif';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Jobs = (props: Props) => {

  const [ pageNum, setPageNumber ] = useState<number>(1);
  const [ jobsData, setJobsData ] = useState<any[]>([]);
  const [ jobsLoaded, setJobsLoaded ] = useState<boolean>(false);
  const [ authenticated, setAuthenticated ] = useState<boolean>(false);
  const nav = useNavigate();

  useEffect(() => {
    async function checkAuthState() {
      try {
        await Auth.currentAuthenticatedUser();
        // if user is logged in, show the page.
        setAuthenticated(true);
      } catch (error) {
        console.log(error);
        nav('/login');
      }
    }

    checkAuthState();
  });

  useEffect(() => {
    // Define the base URL
    const baseUrl = nzJobsUrl;

    // Define the location parameter (you can customize this as needed)

    // Create the URL with the pageNumber parameter
    const url = `${baseUrl}&page=${pageNum}`;

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
    }, [pageNum]);

  return (
    <section className="container">
      {
        authenticated &&
        <div className="">
        <article className="row py-5 bg-white">
          <h1 className="mt-4 pt-2 text-primary" >Job Listings</h1>
          <p> <em> This page contains a listing of all entry level websites compiled by The Muse. <br/></em> See more at <a className="text-info" href="https://www.themuse.com/developers/api/v2"><em>The Muse Developer's API</em></a></p>
        </article>

        { jobsLoaded &&
        <section>
          <article className="">
            <JobTable data={jobsData}></JobTable>
          </article>

          <article>
            <Pagination pageNumber={pageNum} setPageNumber={setPageNumber} totalPages={10}></Pagination>
          </article>
        </section>
        }

        { !jobsLoaded &&
        <div className="d-flex align-items-center">
          <img className="mx-auto" src={loadingImage} alt="loading gif"></img>
        </div>
        }
      </div> 
      }
    </section>
  )
}

export default Jobs;