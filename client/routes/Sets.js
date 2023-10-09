import React, { useEffect, useState } from 'react';
import SetContainer from '../containers/SetContainer.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';

const Sets = ({ currentUser }) => {
  const [setList, setSetList] = useState([]);

  //useEffect to fetch sets from db on first load
  //should return array of sets: [{_id:, name:, totalCards:}]
  useEffect(() => {
    //separate async function to keep useeffect callback from returning a promise
    const fetchSets = async () => {
      const response = await fetch('/api/sets');
      const list = await response.json();
      setSetList(list);
    };
    //useeffect invokes fetchsets function
    fetchSets().catch(console.error);
  }, []);
  //empty dependency array to run on first load

  return (
    <div id='main'>
      <Navbar currentUser={currentUser} />
      <h1>Public Flashcard Sets</h1>
      <Link to='/createset'>
        <button>Create New Set</button>
      </Link>
      <SetContainer setList={setList} />
    </div>
  );
};

export default Sets;
