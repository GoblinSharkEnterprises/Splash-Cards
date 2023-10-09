import React from 'react';
import { Link, Route } from 'react-router-dom';
import Sets from './Sets.js';
import Navbar from '../components/Navbar.js';

const Home = () => {
  return (
    <div id='main'>
      <Navbar />
      <h1>Not Quizlet</h1>
      <p>We're a flashcard app that is totally not Quizlet</p>
      {/* link this button to /sets */}
      <Link to='/sets'>
        <button>View Public Sets</button>
      </Link>
    </div>
  );
};

export default Home;
