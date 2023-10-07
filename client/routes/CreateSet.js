import React, { useState } from 'react';
import CardContainer from '../containers/CardContainer.js';

const CreateSet = () => {
  // need to use state to track form inputs
  const [setName, setSetName] = useState(''); //Set Name
  const [cardList, setCardList] = useState([]); // List of Cards

  //Create add card to state's cardList
  const addCard = (e) => {
    //prevent page from refreshing
    e.preventDefault();
    const form = e.target;
    const newCard = { front: form[0].value, back: form[1].value };
    //avoid mutating state directly with slice
    const newCardList = cardList.slice();
    newCardList.push(newCard);
    setCardList(newCardList);
  };

  //submit post request to /api/sets to send set name and card list to server
  const submitSet = async (e) => {
    e.preventDefault();
    //converting the body to Json format
    const body = JSON.stringify({
      setName: setName,
      cardList: cardList,
    });
    //do a fetch request with post method to the server passing in the body for post
    const response = await fetch('api/sets', {
      //do /api/sets or api/sets?
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: body,
    });
  };

  return (
    <div id='main'>
      <Navbar />
      <input
        id='set-name'
        type='text'
        onChange={(e) => setSetName(e.target.value)}
        placeholder='New Set Name'
      />
      <form id='add-card' onClick={addCard}>
        <input type='text' placeholder='front' />
        <input type='text' placeholder='back' />
        <input type='submit' value='Add Card' /> {/* Submit button for form */}
      </form>
      <CardContainer cardList={cardList} />
      {/* on click, sends post request with all of state information */}
      <button onClick={submitSet}>Create Set</button>
    </div>
  );
};

export default CreateSet;