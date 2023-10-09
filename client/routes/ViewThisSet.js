import React, { useEffect, useState } from 'react';
import CardContainer from '../containers/CardContainer.js';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.js';

const ViewThisSet = () => {
  const { id } = useParams(); //grabbing id from url to do fetch request to set
  const [cardList, setCardList] = useState([]); //set up state for set

  // Use effect to fetch set and grab card from fetch id
  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(`/api/sets/set${id}`);
      const list = await response.json();
      setCardList(list);
    };
    fetchCards().catch(console.error);
  }, []);

  return (
    <div id='viewSet'>
      <Navbar />
      <CardContainer cardList={cardList} />
      {/* <Link to='/testSet'>
                <button>Test this Set</button>
            </Link> */}
    </div>
  );
};

export default ViewThisSet;
