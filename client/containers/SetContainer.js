import React from 'react';
import Set from '../components/Set.js';

const SetContainer = ({ setList }) => {
  //setlist from db query: [{name:, totalCards:, _id:}]
  const sets = [];

  if(setList){
    for (let set of setList) {
      sets.push(<Set name={set.name} totalCards={set.totalCards} id={set._id} key={set._id} />);
    }
  }

  return <div className='set-container'>{sets}</div>;
};

export default SetContainer;
