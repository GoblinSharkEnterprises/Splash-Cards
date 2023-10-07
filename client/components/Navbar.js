import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (<nav className='nav'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/sets'>Sets</Link></li>
    <li><Link to='/createset'>Create Set</Link></li>
  </nav>)
}


export default Navbar;
//creating a nav bar between routes with link
