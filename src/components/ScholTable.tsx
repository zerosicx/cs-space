import React from 'react'
import ScholCard from './ScholCard';

type Props = {
    data: any
}

const JobTable = (props: Props) => {
    const { data } = props;
    return (
        <div className="row">
            {data.map((schol: any, index: number) => (
                <ScholCard title={schol.Title} id={schol.ScholarshipID} supervisors={schol["Supervisor/s"]} description={schol.Description} key={index}></ScholCard>
            ))}
            
        </div>
            
            
    )
}

export default JobTable;