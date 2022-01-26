import React from 'react';
import logo from '../assets/shared/logo.svg'
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  return <div>
      <Link to="/" >
        <img src={logo} className='logo' alt='logo'></img>
      </Link>
      <hr className='line' />
      <div className="navbar">
        <ul>
            <li className="nav-item">
                <Link to="/" className='nav-links' >
                  <strong>00</strong>
                  <span>HOME</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/destination" className='nav-links' >
                    <strong>01</strong>
                    <span>DESTINATION</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/crew" className='nav-links'>
                    <strong>02</strong>
                    <span>CREW</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/technology" className='nav-links'>
                    <strong>03</strong>
                    <span>TECHNOLOGY</span>
                </Link>
            </li>
        </ul>
      </div>
  </div>;
};

export default Navbar;
