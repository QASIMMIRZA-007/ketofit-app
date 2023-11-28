
// import React, { useState } from 'react';
// import './Navbar.css';
// import './Navbar.scss';
// import { FaBars } from 'react-icons/fa';
// // import SimpleLogin from './SimpleLogin';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   // const toggleLoginForm = () => {
//   //   setShowLoginForm(!showLoginForm);
//   // };

//   return (
//     <nav className={`navbar ${isOpen ? 'open' : ''}`}>
//       <div className="logo">
//         <img src='./Images/reallogo.png' alt='Logo' className='logo-img' />
//       </div>
//       <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
//         <FaBars className='menu-btn' />
//       </div>
//       <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
//         <div className='nav-flex'>
//           <button className='btn1 btn'>
//             Login
//           </button>
//           <button className='btn2 btn'>Start my journey</button>
//         </div>
//       </ul>
//       {/* {showLoginForm && <SimpleLogin onClose={toggleLoginForm} />} */}
//     </nav>
//   );
// };

// export default Navbar;


// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import './Navbar.scss';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Adjust the threshold as needed
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''} ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src='./Images/reallogo.png' alt='Logo' className='logo-img' />
      </div>
      <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <FaBars className='menu-btn' />
      </div>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <div className='nav-flex'>
          <button className='btn1 btn'>
            Login
          </button>
          <button className='btn2 btn'>Start my journey</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
