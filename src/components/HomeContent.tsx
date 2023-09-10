import React from 'react'
import './Content.css';

const HomeContent = () => {
    return (
        <div className='grid-container px-2 py-2'>
            <div className='content1 centred'>   
                <div className="content-card px-3 py-3">
                    <p>A place to search for opportunities in computer science and the IT field</p>
                    <a href='/jobs'>
                        <button className='find-button'>Find a job</button>
                    </a>        
                </div>
            </div>
            <div className='content2'>   
                <div className='row'>
                    {/*  TODO: Get data from the public API */}
                    <h3 className="mt-4 px-4">New Job Listings</h3>
                    <div className="listing-card__container col-md-12 col-lg-12 col-sm-12 px-4 my-2">
                        <div className="listing-card__card px-4 py-4">
                            <h4>Listing One</h4>    
                            <p>Description</p>
                        </div>
                        <div className="listing-card__card px-4 py-4">
                            <h4>Listing Two</h4>    
                            <p>Description</p>
                        </div>
                        <div className="listing-card__card px-4 py-4">
                            <h4>Listing Three</h4>    
                            <p>Description</p>
                        </div> 
                        <div className="listing-card__card px-4 py-4">
                            <h4>Listing Four</h4>    
                            <p>Description</p>
                        </div>     
                    </div>
                </div>
            </div>
            <div className='content3'>   
                <div className='row'>
                    {/* TODO: Get data from the database (Dynamo DB) */}
                    <h3 className="mt-4 px-4">Scholarships</h3>
                    <div className="listing-card__container col-md-12 col-lg-12 col-sm-12 px-4 my-2">
                        <div className="listing-card__card px-4 py-4">
                            <h4>Scholarship One</h4>    
                            <p>Description</p>
                        </div>
                        <div className="listing-card__card px-4 py-4">
                            <h4>Scholarship Two</h4>    
                            <p>Description</p>
                        </div>
                        <div className="listing-card__card px-4 py-4">
                            <h4>Scholarship Three</h4>    
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
export default HomeContent