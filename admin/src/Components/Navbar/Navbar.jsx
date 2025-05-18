import React from 'react';
import './Navbar.css';  
import eblogo from '../../assets/eblogo.png';  
import profile from '../../assets/profile.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={eblogo} alt="Logo" className="eblogo" />  
      <img src={profile} alt="Profile" className="profile" /> 
    </div>
  );
};

export default Navbar;


