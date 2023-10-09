import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';

const SignOut = ({ currentUser, setCurrentUser }) => {
  //clear current user state
  useEffect(() => {
    setCurrentUser({});
  }, []);

  return <Navigate replace to='/' />;
};

export default SignOut;
