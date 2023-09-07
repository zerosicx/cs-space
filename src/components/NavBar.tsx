import React from 'react'
type Props = {}

const NavBar = (props: Props) => {
  return (
     <nav className="navbar navbar-expand-sm navbar-light bg-light px-3">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item active'>
                    <a className='nav-link' href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/about'>About</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/jobs'>Jobs</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/hackathons'>Hackathons</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/scholarships'>Scholarships</a>
                </li>
            </ul>
        </div>        
      </nav>
  )
}

export default NavBar