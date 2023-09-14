import React from 'react'
import ScholCard from './ScholCard';

type Props = {
    data: any[]
}

const ScholTable = (props: Props) => {
    const { data } = props;
    return (
        <div className="row">
            {data.map((schol: any, index: number) => (
                <ScholCard title={schol['Title']} supervisors={schol['Supervisor/s'].split(',')} description={schol['Description']} key={index}></ScholCard>
            ))}
            
        </div>
            
            
    )
}

export default ScholTable;