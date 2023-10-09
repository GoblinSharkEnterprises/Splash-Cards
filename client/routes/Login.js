import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';

const Login = ({ currentUser, setCurrentUser }) => {
  //event handler on form submit
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const body = JSON.stringify({
      username: form[0].value,
      password: form[1].value,
    });
    //send post request to '/api/login' with body {username:, password:}
    const response = await fetch('/api/login', {
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
      console.log('current user', currentUser);
    }
  };

  if (currentUser.hasOwnProperty('userId')) {
    return <Navigate replace to='/mysets' />;
  } else {
    return (
      <div id='main'>
        <Navbar />
        <div id='login'>
          <form onSubmit={handleLogin}>
            <input name='username' type='text' placeholder='Username'></input>
            <input
              name='password'
              type='password'
              placeholder='Password'
            ></input>
            <input className='submit' type='submit' value='Login'></input>
          </form>
        </div>
      </div>
    );
  }
};

export default Login;
