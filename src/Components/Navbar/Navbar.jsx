


import React, { useState } from 'react';
import './Navbar.css'; 
import './Navbar.scss';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo"> <img src='./Images/reallogo.png' alt='Logo' className='logo-img' /></div>
      <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        {/* <div className="menu-btn-burger"></div> */}
        <FaBars className='menu-btn'/>
      </div>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
      <div className='nav-flex'>  
            <button className='btn1 btn'>Login</button>
           <button className='btn2 btn'>Start my journey</button></div>
      </ul>
    </nav>
  );
};

export default Navbar;