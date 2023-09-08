import React from 'react'
import './NavBar.css';
import waikatoLogo from '../utilties/University_of_Waikato_logo.png'
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

interface NavBarProps {
    loggedIn: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ loggedIn  }) => {

    const nav = useNavigate();

    const handleSignOut = () => {
        Auth.signOut();
        nav('/');
    }

  return (
     <nav className="navbar navbar-expand-sm navbar-dark px-3 sticky-top waikato-nav">
        <a className="navbar-brand text-white" href="/">
            <img className="me-2" src={waikatoLogo} alt="" width="30" ></img>
            CS Space</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon color-white"></span>
        </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item active'>
                    <a className='nav-link text-white' href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link text-white' href='/about'>About</a>
                </li>
                { loggedIn &&
                    <section>
                    <li className='nav-item'>
                    <a className='nav-link text-white' href='/jobs'>Jobs</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-white' href='/hackathons'>Hackathons</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-white' href='/scholarships'>Scholarships</a>
                    </li>
                    <li className='nav-item'>
                        <button onClick={handleSignOut}className="btn btn-light">Logout</button>
                    </li>
                </section>
                }
                { !loggedIn && 
                    <li className='nav-item'>
                        <button onClick={() => {nav('/login')}} className="btn btn-light">Login</button>
                    </li>
                }
            </ul>
        </div>        
      </nav>
  )
}

export default NavBar