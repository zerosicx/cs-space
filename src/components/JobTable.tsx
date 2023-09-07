import React from 'react'
import JobCard from './JobCard';

type Props = {
    data: any
}

const JobTable = (props: Props) => {
    const { data } = props;
    return (
        <div className="row">
            {data.map((job: any, index: number) => (
                <JobCard name={job.name} id={job.id} locations={job.locations} company={job.company.name} key={index}></JobCard>
            ))}
        </div>
            
            
    )
}

export default JobTable;