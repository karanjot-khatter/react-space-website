import React, { useState } from 'react';
import logo from '../assets/shared/logo.svg'
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { useLocation } from 'react-router-dom';


const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
  
  const location = useLocation();
  return <div>
      <Link to="/" >
        <img src={logo} className='logo' alt='logo'></img>
      </Link>
      <hr className='line' />
      <div className="navbar">
      <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                <Link to="/" className={location.pathname === '/' ? 'nav-links active' : 'nav-links'} >
                  <strong className='nav-item_number'>00</strong>
                  <span>HOME</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/destination" className={location.pathname === '/destination' || location.pathname === '/destination/mars' || location.pathname === '/destination/europa' || location.pathname === '/destination/titan' ? 'nav-links active' : 'nav-links'} >
                    <strong className='nav-item_number'>01</strong>
                    <span>DESTINATION</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/crew" className={location.pathname === '/crew' ? 'nav-links active' : 'nav-links'}>
                    <strong className='nav-item_number'>02</strong>
                    <span>CREW</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/technology" className={location.pathname === '/technology' ? 'nav-links active' : 'nav-links'}>
                    <strong className='nav-item_number'>03</strong>
                    <span>TECHNOLOGY</span>
                </Link>
            </li>
        </ul>
      </div>
  </div>;
};

export default Navbar;
