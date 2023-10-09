import React from 'react';
import Navbar from '../components/Navbar.js';

const TestSet = ({ currentUser }) => {
  return (
    <div id='testSet'>
      <Navbar currentUser={currentUser} />
      <h1>Testing Set Page</h1>
    </div>
  );
};

export default TestSet;
