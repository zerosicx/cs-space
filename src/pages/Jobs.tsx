import React, { useEffect, useState } from 'react'
import JobTable from '../components/JobTable';
import dummyData from '../data/dummyData.json';
import Pagination from '../components/Pagination';
import { nzJobsUrl } from '../utilties/config';

type Props = {}

const Jobs = (props: Props) => {

  const [ pageNum, setPageNumber ] = useState(1);
  const [jobsData, setJobsData] = useState<any[]>([]);

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
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, [pageNum]);

  return (
    <section className="container">
      <div className="">
        <article className="row">
          <h1 className="mt-4" >Job Search</h1>
        </article>
        <article className="">
          <JobTable data={jobsData}></JobTable>
        </article>
        <article>
          <Pagination pageNumber={pageNum} setPageNumber={setPageNumber} totalPages={10}></Pagination>
        </article>
      </div> 
    </section>
  )
}

export default Jobs;