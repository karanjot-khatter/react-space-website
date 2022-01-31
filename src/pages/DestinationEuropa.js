import React from 'react';
import Navbar from '../component/Navbar';
import '../css/destination.css';
import europaImage from '../assets/destination/image-europa.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DestinationEuropa = () => {

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
      <img className="planet-image" src={europaImage} alt="Europa Image" />
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
      <h1>EUROPA</h1>
      <p className='planet-description'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
      <div className='distance'>
        <p className='desc'>AVG. DISTANCE</p>
        <h4>628 MIL. km</h4>
      </div>
      <div className='travel-time'>
        <p className='desc'>EST. TRAVEL TIME</p>
        <h4>3 YEARS</h4>
      </div>

    </div>


  </div>;
};

export default DestinationEuropa;
