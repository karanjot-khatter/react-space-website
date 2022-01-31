import React from 'react';
import Navbar from '../component/Navbar';
import '../css/destination.css';
import moonImage from '../assets/destination/image-moon.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Destination = () => {

const location = useLocation();

const appendBodyClass = (event) => {
    document.body.classList = '';
    document.body.classList.add('destination-body');
}
appendBodyClass();

  return <div className='destination'>
    <Navbar/>
    <div className='left-side'>
      <div className="heading-text">
        <span className='number'>01</span>
        <span className='text'>PICK YOUR DESTINATION</span>
      </div>
      <img className="planet-image" src={moonImage} alt="Moon Image" />
    </div>
    <div className='right-side'>
      <ul>
        <li className="nav-item">
            <Link to="/destination" className={location.pathname === '/destination' ? 'nav-links active' : 'nav-links'} >
              <span>MOON</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/destination/mars" className={location.pathname === '/destination/mars' ? 'nav-links active' : 'nav-links'} >
                <span>MARS</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/destination/europa" className={location.pathname === '/destination/europa' ? 'nav-links active' : 'nav-links'}>
                <span>EUROPA</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/destination/titan" className={location.pathname === '/destination/titan' ? 'nav-links active' : 'nav-links'}>
                <span>TITAN</span>
            </Link>
        </li>
      </ul>
      <h1>MOON</h1>
      <p className='planet-description'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
      <div className='distance'>
        <p className='desc'>AVG. DISTANCE</p>
        <h4>384,400 km</h4>
      </div>
      <div className='travel-time'>
      <p className='desc'>EST. TRAVEL TIME</p>
        <h4>3 DAYS</h4>
      </div>

    </div>


  </div>;
};

export default Destination;
