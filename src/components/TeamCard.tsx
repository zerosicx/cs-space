import React from 'react'
import './TeamCard.css';
import img_icon from '../images/img_placeholder.png';
import hc_icon from '../images/hc_icon.png';
import jp_icon from '../images/jp_icon.png';
import bs_icon from '../images/bs_icon.png';
import agc_icon from '../images/agc_icon.png';



const TeamCard = () => {
    // TODO: The information in this page can be turned into a database table and be fetched. Otherwise,
    // it can be stored as a JSON under src/data to have less code. See: array map function
  return (
    <section className='section-white'>
        <div className='container'>
            <div className='row'>
                <div className="team-card__container col-md-6 col-lg-6 col-sm-12">
                    <div className="team-card__card px-4 py-4">
                        <div className='info-grid'>
                            <div>
                                <img src={hc_icon} className='team-img'></img>
                            </div>
                             
                            <div className='team-info px-4' >    
                                <h4>Hannah Carino</h4>
                                <p><i>Software Engineering Student</i></p>
                                <div className='team-icon'>
                                    <a href='https://www.linkedin.com/in/hc243/' className='linkedin'>
                                        <i className='fa fa-linkedin'></i>
                                    </a>
                                </div>
                            </div>    
                        </div>                   
                    </div>
                </div>
                <div className="team-card__container col-md-6 col-lg-6 col-sm-12">
                    <div className="team-card__card px-4 py-4">
                        <div className='info-grid'>
                            <div>
                                <img src={jp_icon} className='team-img'></img> 
                            </div>
                            <div className='team-info px-4' >    
                                <h4>Jascha Penaredondo</h4>
                                <p><i>Software Engineering Student</i></p>
                                <div className='team-icon'>
                                    <a href='https://www.linkedin.com/in/jascha-penaredondo/' className='linkedin'>
                                        <i className='fa fa-linkedin'></i>
                                    </a>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className="team-card__container col-md-6 col-lg-6 col-sm-12">
                    <div className="team-card__card px-4 py-4">
                        <div className='info-grid'>
                            <img src={bs_icon} className='team-img'></img> 
                            <div className='team-info px-4' >    
                                <h4>Bernard Sullivan</h4>
                                <p><i>Cyber Security Administrator</i></p>
                                <div className='team-icon'>
                                    <a href='https://www.linkedin.com/in/bernard-sullivan/' className='linkedin'>
                                        <i className='fa fa-linkedin'></i>
                                    </a>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className="team-card__container col-md-6 col-lg-6 col-sm-12">
                    <div className="team-card__card px-4 py-4">
                        <div className='info-grid'>
                            <img src={agc_icon} className='team-img'></img> 
                            <div className='team-info px-4' >    
                                <h4>Anita Glucina-Young</h4>
                                <p><i>Cyber Security Student</i></p>
                                <div className='team-icon'>
                                    <a href='https://www.linkedin.com/in/anitagy/' className='linkedin'>
                                        <i className='fa fa-linkedin'></i>
                                    </a>
                                </div>
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