import React, { useEffect } from 'react';
import SetContainer from '../containers/SetContainer.js';
import { Link } from 'react-router-dom';
const Sets = () => {
  //useEffect to fetch sets from db on first load
  //should return array of sets: [{_id:, name:, totalCards:}]
  let setList;
  useEffect(() => {
    const fetchSets = async () => {
      const response = await fetch('api/sets'); // do /api/set or api/set?
      setList = response.json();
    };
    fetchSets().catch(console.error);
  }, []);

  return (
    <div id='main'>
      <h1>My Flashcard Sets</h1>
      <SetContainer setList={setList} />
      {/* link this button to /sets/create */}
      <Link to='/CreateSet'>
        <button>Create New Set</button>
      </Link>
    </div>
  );
};

export default Sets;
