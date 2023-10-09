import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Home from './routes/Home.js';
import Sets from './routes/Sets.js';
import CreateSet from './routes/CreateSet.js';
import Login from './routes/Login.js';
import SignUp from './routes/SignUp.js';

//setting up route to homepage when access app
const App = () => {
  //setting up state to track currently logged in user
  //for later use for stretch features...
  const [currentUser, setCurrentUser] = useState({});

  return (
    //setting up Routes for multiple page (act like a router)
    //when a link is called, it's linked back to this App Router and then app will route the link to the page needed
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sets' element={<Sets />} />
      <Route path='/createset' element={<CreateSet />} />
      <Route path='/sets/set:id' element={<Sets />} />
      <Route
        path='/login'
        element={
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
        }
      />
      <Route
        path='/signup'
        element={
          <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} />
        }
      />
    </Routes>
  );
};

export default App;
