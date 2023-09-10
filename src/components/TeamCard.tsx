import React from 'react'
import './TeamCard.css';
import img_icon from '../images/img_placeholder.png';

const TeamCard = () => {
  return (
    <section className='section-white'>
        <div className='container'>
            <div className='row'>
                <div className="team-card__container col-md-6 col-lg-6 col-sm-12">
                    <div className="team-card__card px-4 py-4">
                        <div className='info-grid'>
                            <img src={img_icon} alt='member'></img> 
                            <div className='team-info px-4' >    
                                <h4>Team Member One</h4>
                                <p>Title</p>
                            </div>    
                        </div>                   
                    </div>
                </div>
                <div className="team-card__container col-md-6 col-lg-6 col-sm-12">
                    <div className="team-card__card px-4 py-4">
                        <div className='info-grid'>
                            <img src={img_icon} alt='member'></img> 
                            <div className='team-info px-4' >    
                                <h4>Team Member Two</h4>
                                <p>Title</p>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className="team-card__container col-md-6 col-lg-6 col-sm-12">
                    <div className="team-card__card px-4 py-4">
                        <div className='info-grid'>
                            <img src={img_icon} alt='member'></img> 
                            <div className='team-info px-4' >    
                                <h4>Team Member Three</h4>
                                <p>Title</p>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className="team-card__container col-md-6 col-lg-6 col-sm-12">
                    <div className="team-card__card px-4 py-4">
                        <div className='info-grid'>
                            <img src={img_icon} alt='member'></img> 
                            <div className='team-info px-4' >    
                                <h4>Team Member Four</h4>
                                <p>Title</p>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeamCard