import React from 'react';
import Navbar from '../components/Navbar.js';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import TestingCard from '../components/TestingCard.js';

const TestSet = (props) => {
  const { id } = useParams();
  const [testingSet, setTestingSet] = useState([]); //set up state for set
  const [testingCard, setTestingCard] = useState({}); //set up state for the current card
  const [cardIdx, setCardIdx] = useState(0); //set up state for the current card index
  const [cardDisplay, setCardDisplay] = useState('front'); //set up state for showing fron or back
  // Use effect to fetch set and grab card from fetch id
  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(`/api/sets/set${id}`);
      const set = await response.json();
      setTestingSet(set.cards);
      setTestingCard(set.cards[cardIdx]);
    };
    fetchCards().catch(console.error);
  }, [cardIdx]);

  // handle click functions event listener
  const cardIndexChanger = (e) => {
    let newCardIdx;
    if (e.target.value === 'back') {
      if (cardIdx <= 0) {
        newCardIdx = testingSet.length - 1;
        setCardIdx(newCardIdx);
        setCardDisplay('front');
      } else {
        newCardIdx = cardIdx - 1;
        setCardIdx(newCardIdx);
        setCardDisplay('front');
      }
    } else if (e.target.value === 'next') {
      if (cardIdx >= testingSet.length - 1) setCardIdx(0);
      else {
        newCardIdx = cardIdx + 1;
        setCardIdx(newCardIdx);
        setCardDisplay('front');
      }
    }
  };

  return (
    <div id='testSet'>
      <Navbar currentUser={props.currentUser}/>
      <h1>Testing Set</h1>
      <p>Current Card: {cardIdx + 1}</p>
      <TestingCard
        testingCard={testingCard}
        cardDisplay={cardDisplay}
        setCardDisplay={setCardDisplay}
      />
      <br></br>
      <div id='button-container'>
        <button onClick={cardIndexChanger} value='back'>
        Back
        </button>
        <button onClick={cardIndexChanger} value='next'>
          Next
        </button>
        
      </div>
    </div>
  );
};

export default TestSet;
