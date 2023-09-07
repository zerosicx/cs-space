import React from 'react'
import JobTable from '../components/JobTable';
import dummyData from '../data/dummyData.json';

type Props = {}

const Jobs = (props: Props) => {


  return (
    <section className="container">
      <div className="">
        <article className="row">
          <h1 className="mt-4" >Job Search</h1>
        </article>
        <article className="">
          <JobTable data={dummyData.results}></JobTable>
        </article>
      </div>  
    </section>
  )
}

export default Jobs;