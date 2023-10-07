import React, { useEffect, useState } from 'react';
import SetContainer from '../containers/SetContainer.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
const Sets = () => {
  //useEffect to fetch sets from db on first load
  //should return array of sets: [{_id:, name:, totalCards:}]
  const [setList, setSetList] = useState([]);
  
  useEffect(() => {
    const fetchSets = async () => {
      const response = await fetch('/api/sets');
      const list = await response.json();
      setSetList(list);
    };
    fetchSets().catch(console.error);
  }, []);

  return (
    <div id='main'>
      <Navbar />
      <h1>My Flashcard Sets</h1>
      <SetContainer setList={setList} />
      {/* link this button to /sets/create */}
      <Link to='/createset'>
        <button>Create New Set</button>
      </Link>
    </div>
  );
};

export default Sets;
