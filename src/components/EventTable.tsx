import React from 'react'
import EventCard from './EventCard';

type Props = {
    data: any[]
}

const EventTable = (props: Props) => {
    const { data } = props;
    return (
        <div className="row">
            {data.map((event: any, index: number) => (
                <EventCard title={event['Title']} date={event['Date']} description={event['Description']} id={event["EventID"]} key={index}></EventCard>
            ))}
        </div>
            
            
    )
}

export default EventTable;