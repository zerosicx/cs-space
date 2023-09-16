import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { csSpaceBackendApiUrl } from '../utilties/config';
import loadingImage from '../utilties/loading.gif';
import ScholTable from '../components/ScholTable';
import { sendAuthenticatedGetRequest } from '../utilties/getSecret';


interface ScholarshipsProps {
  loggedIn: boolean
}

const Scholarships: React.FC<ScholarshipsProps> = ({loggedIn}) => {

  const [ scholData, setScholData ] = useState<any[]>([]);
  const [ scholDataLoaded, setScholDataLoaded ] = useState<boolean>(false);
  const nav = useNavigate();

  if (!loggedIn){
    nav('/login');
  }

  const getScholarshipsData = async () => {
    // Define the base URL
    const baseUrl = csSpaceBackendApiUrl;

    // Create the URL with the pageNumber parameter
    const url = `${baseUrl}/scholarships`;
    // Make the fetch request
    const data = await sendAuthenticatedGetRequest(url);
    setScholData(data.Items);
    setScholDataLoaded(true);
  }
  

  useEffect(() => {
    getScholarshipsData();
    }, [] );
    
  return (
    <section className="container">
      {
        loggedIn &&
        <div className="">
        <article className="row py-5 bg-white">
          <h1 className="mt-4 pt-2 text-primary" >Scholarships</h1>
          <p>This page contains data collected by the team regarding scholarships relevant to the Computer Science/Engineering department at the University of Waikato.</p>
        </article>

        { scholDataLoaded &&
        <section>
          <article className="">
            <ScholTable data={scholData}></ScholTable>
          </article>

        </section>
        }

        { !scholDataLoaded &&
          <img className="mx-auto w-100" src={loadingImage} alt="loading gif"></img>
        }
      </div> 
      }
    </section>
  )
}

export default Scholarships;