import React from "react";
import TeamCard from "./TeamCard";

type Props = {
    data: any
}

const TeamTable = (props: Props) => {
    const {data} = props;
    return (
        <div className="row">
            {data.map((team: any, index: number) => (
                <TeamCard name={team.name} title={team.title} linkedin={team.linkedin} img={team.img_link} key={index}></TeamCard>
            ))}
        </div>
    )
}

export default TeamTable;