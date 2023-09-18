import React from 'react'
import ScholCard from './ScholCard';

interface ScholTableProps{
    data: any[],
    homePage: boolean
}

const ScholTable: React.FC<ScholTableProps>= ({data, homePage}) => {
    return (
        <div className="row">
            {data.map((schol: any, index: number) => (
                <ScholCard title={schol['Title']} supervisors={schol['Supervisor/s'].split(',')} description={schol['Description']} id={schol["ScholarshipID"]} homePage={homePage} key={index}></ScholCard>
            ))}
        </div>
            
            
    )
}

export default ScholTable;