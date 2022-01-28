import React from 'react';
import Navbar from '../component/Navbar';
import '../css/home.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return <div className='not-found'>
      <Navbar/>
      <div className='description'>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to="/">
            <button>Back to home</button>
        </Link>
      </div>
  </div>;
};

export default NotFound;
