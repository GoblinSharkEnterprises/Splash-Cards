import React, { useEffect, useState } from 'react';
import SetContainer from '../containers/SetContainer.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
const MySets = ({currentUser}) => {
  const [setList, setSetList] = useState([]);
  //get userId from currently logged in user
  const id = currentUser.userId;
  //useEffect to fetch curernt user's sets
  //should return array of sets: [{_id:, name:, totalCards:}]
  useEffect(() => {
    //separate async function to keep useeffect callback from returning a promise
    //fetch to /api/sets/user${id}
    const fetchSets = async () => {
      const response = await fetch(`/api/sets/user${id}`);
      const list = await response.json();
      setSetList(list);
      //setlist state to pass to set container
    };
    //useeffect invokes fetchsets function
    fetchSets().catch(console.error);
  }, []);
  //empty dependency array to run on first load

  return (
    <div id='main'>
      <Navbar />
      <h1>My Flashcard Sets</h1>
      <Link to='/createset'>
        <button>Create New Set</button>
      </Link>
      <SetContainer setList={setList} />      
    </div>
  );
};

export default MySets;