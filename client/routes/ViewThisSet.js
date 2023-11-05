import React, { useEffect, useState } from 'react';
import CardContainer from '../containers/CardContainer.js';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import { Link } from 'react-router-dom';

const ViewThisSet = ({ currentUser }) => {
  const { id } = useParams(); //grabbing id from url to do fetch request to set
  const [currentSet, setCurrentSet] = useState([]); //set up state for set

  // Use effect to fetch set and grab card from fetch id
  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(`/api/sets/set${id}`);
      const set = await response.json();
      setCurrentSet(set);
    };
    fetchCards().catch(console.error);
  }, []);

  return (
    <div id='viewSet'>
      <Navbar currentUser={currentUser} />
      <h1>{currentSet.setName}</h1>
      <Link to={`/testSet/${id}`}>
        <button>Learn this Set</button>
      </Link>
      <CardContainer cardList={currentSet.cards} />
    </div>
  );
};

export default ViewThisSet;
