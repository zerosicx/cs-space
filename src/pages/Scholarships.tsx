import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { csSpaceBackendApiUrl } from '../utilties/config';
import loadingImage from '../utilties/loading.gif';
import ScholTable from '../components/ScholTable';


interface ScholarshipsProps {
  loggedIn: boolean
}

const Scholarships: React.FC<ScholarshipsProps> = ({loggedIn}) => {

  const [ scholData, setScholData ] = useState<any[]>([]);
  const [ jobsLoaded, setJobsLoaded ] = useState<boolean>(false);
  const nav = useNavigate();

  if (!loggedIn){
    nav('/login');
  }
  

  useEffect(() => {
    // Define the base URL
    const baseUrl = csSpaceBackendApiUrl;

    // Create the URL with the pageNumber parameter
    const url = `${baseUrl}/scholarships`;
    // Make the fetch request
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const results = data.items;
        setScholData(results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    } );
    
  return (
    <section className="container">
      {
        loggedIn &&
        <div className="">
        <article className="row py-5 bg-white">
          <h1 className="mt-4 pt-2 text-primary" >Scholarships</h1>
          <p>This page contains data collected by the team regarding scholarships relevant to the Computer Science/Engineering department at the University of Waikato.</p>
        </article>

        { jobsLoaded &&
        <section>
          <article className="">
            <ScholTable data={scholData}></ScholTable>
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

export default Scholarships;