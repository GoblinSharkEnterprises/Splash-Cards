import React from 'react';
import { Link, Route } from 'react-router-dom';
import Sets from './Sets.js';
import Navbar from '../components/Navbar.js';

const Home = ({ currentUser }) => {
  return (
    <div id='main'>
      <Navbar currentUser={ currentUser } />
        <h1>Splash Cards</h1>
        <h3>Keep your memory shark</h3>
        {/* link this button to /sets */}
        <Link to='/sets'>
          <button>View Public Sets</button>
        </Link>
    </div>
  );
};

export default Home;
