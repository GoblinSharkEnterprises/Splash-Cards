import React from 'react';

const TestingCard = ({ testingCard, cardDisplay, setCardDisplay }) => {
  // might need to use effect this and update on render and change to cardDisplay
  let display = '';
  if (cardDisplay === 'front') {
    display = testingCard.front;
  } else {
    display = testingCard.back;
  }

  // handle card flip
  const flipCard = (e) => {
    if (cardDisplay === 'front') {
      setCardDisplay('back');
    } else {
      setCardDisplay('front');
    }
  };
  
  return (
    <div className='testing-card' onClick={flipCard}>
      <p>{display}</p>
      <br></br>
      <p id='flip'>Click to flip</p>
    </div>
  );
};

export default TestingCard;
