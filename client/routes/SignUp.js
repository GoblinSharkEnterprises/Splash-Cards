import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';

const SignUp = ({ currentUser, setCurrentUser }) => {
  //event handler on form submit
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const body = JSON.stringify({
      username: form[0].value,
      password: form[1].value,
    });
    //send post request to '/api/signup' with body {username:, password:}
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: body,
    });
    //save result into currentUser state for later use... stretch features?
    const user = await response.json();
    if (response.status === 200) {
      setCurrentUser(user);
    }
  };

  if (currentUser.hasOwnProperty('userId')) {
    return <Navigate replace to='/mysets' />;
  } else {
    return (
      <div id='main'>
        <Navbar currentUser={currentUser} />
        <div id='signup'>
          <form onSubmit={handleSignUp}>
            <input name='username' type='text' placeholder='Username'></input>
            <input
              name='password'
              type='password'
              placeholder='Password'
            ></input>
            <input className='submit' type='submit' value='Sign Up'></input>
          </form>
        </div>
      </div>
    );
  }
};

export default SignUp;
