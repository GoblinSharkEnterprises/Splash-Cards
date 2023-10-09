import React from 'react';
import Navbar from '../components/Navbar.js';

const Login = ({ currentUser, setCurrentUser }) => {
  //event handler on form submit
  //send post request to '/login' with body {username:, password:}
  //save result into currentUser state for later use... stretch features?
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const body = JSON.stringify({
      username: form[0].value,
      password: form[1].value,
    });
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: body,
    });
    const user = await response.json();
    if (response.status === 200) {
      setCurrentUser(user);
    }
  };

  return (
    <div id='main'>
      <Navbar />
      <div id='login'>
        <form onSubmit={handleLogin}>
          <input name='username' type='text' placeholder='Username'></input>
          <input name='password' type='password' placeholder='Password'></input>
          <input className='submit' type='submit' value='Login'></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
