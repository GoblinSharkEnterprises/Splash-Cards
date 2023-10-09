import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import CardContainer from '../containers/CardContainer.js';
import Navbar from '../components/Navbar.js';

const CreateSet = ({ currentUser }) => {
  // need to use state to track form inputs
  const [setName, setSetName] = useState('Untitled'); //Set Name
  const [cardList, setCardList] = useState([]); // List of Cards
  const [submitted, setSubmitted] = useState(false); //if form submitted
  const [frontInput, setFrontInput] = useState('');
  const [backInput, setBackInput] = useState('');
  //Create add card to state's cardList
  const addCard = (e) => {
    //prevent page from refreshing
    e.preventDefault();
    const form = e.target;
    const newCard = { front: frontInput, back: backInput };
    //avoid mutating state directly with slice
    const newCardList = [...cardList, newCard];
    setCardList(newCardList);
    //cardlist state to pass to card container
    setFrontInput('');
    setBackInput('');
  };

  //submit post request to /api/sets to send set name and card list to server
  const submitSet = async (e) => {
    e.preventDefault();
    //converting the body to Json format
    const body = JSON.stringify({
      setName: setName,
      cardList: cardList,
      setOwner: currentUser.userId,
    });
    //do a fetch request with post method to the server passing in the body for post
    const response = await fetch('/api/sets', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: body,
    });
    setSubmitted(true);
  };

  if (submitted) {
    if (currentUser.hasOwnProperty('userId')) {
      return <Navigate replace to='/mysets' />;
    } else {
      return <Navigate replace to='/sets' />;
    }
  } else {
    return (
      <div id='main'>
        <Navbar currentUser={currentUser} />
        <h1>Create a New Set</h1>
        <div id='add-set'>
          {/* save text input for set name into state onChange */}
          <input
            id='set-name'
            type='text'
            onChange={(e) => setSetName(e.target.value)}
            placeholder='New Set Name'
          />
          <form id='add-card' onSubmit={addCard}>
            <textarea
              id='front'
              type='text'
              placeholder='Front'
              rows='5'
              cols='20'
              value={frontInput}
              onChange={(e) => setFrontInput(e.target.value)}
            />
            <textarea
              id='back'
              type='text'
              placeholder='Back'
              rows='5'
              cols='20'
              value={backInput}
              onChange={(e) => setBackInput(e.target.value)}
            />
            <input type='submit' value='Add Card' className='submit' />
          </form>
        </div>
        <CardContainer cardList={cardList} />
        {/* on click, sends post request with all of state information */}
        <button onClick={submitSet}>Create Set</button>
      </div>
    );
  }
};

export default CreateSet;
