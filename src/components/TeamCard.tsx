import React from 'react'
import './TeamCard.css';

type Props = {
    name: String,
    title: String,
    linkedin: String,
    img: String
}

const TeamCard = (props: Props) => {
    const {name, title, linkedin, img} = props;
    
    return (
        <div className="team-card__container col-md-6 col-lg-6 col-sm-12">
            <div className="team-card__card px-4 py-4">
                <div className='info-grid'>
                    <img src={require('../images/' + img)} className='team-img' alt='img'></img>
                    <div className='team-info px-4' >    
                        <h4>{name}</h4>
                        <p><i>{title}</i></p>
                        <div className='team-icon'>
                            <a href={`${linkedin}`} className='linkedin'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>
                    </div>    
                </div>                   
            </div>
        </div>
    )
}

export default TeamCard