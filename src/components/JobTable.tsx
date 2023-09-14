import React, { useState } from 'react'
import JobCard from './JobCard';
import SearchAndFilter, { Filters } from './SearchFilter';

type JobTableProps = {
    data: any
    showJobFilter: boolean
}

const JobTable: React.FC<JobTableProps> = ({data, showJobFilter}) => {
    const [, setFilterText] = useState<Filters>(); // Add a state for filtering


    // Function to filter jobs based on the filterText
    const filterJobs = (filters: Filters) => {
        // Implement your filtering logic here
        // For example, you can filter jobs whose titles or descriptions contain the given text
        // Update the jobsData state accordingly
        setFilterText(filters);
    };

    return (
        <>
        {/* The filtering currently has no functionality. Can be implemented with a better API */}
        {
            showJobFilter &&
            <div className="row mb-4">
                <SearchAndFilter onFilter={filterJobs} />
            </div>
        }
            <div className="row">
                {data.map((job: any, index: number) => (
                    <JobCard name={job.name} id={job.id} locations={job.locations} company={job.company.name} key={index}></JobCard>
                ))}
            </div>
        </>
    )
}

export default JobTable;