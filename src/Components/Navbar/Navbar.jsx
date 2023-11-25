// import { useState } from 'react';
// import './Navbar.scss';
// import './Testing.scss'
// import { FaBars } from 'react-icons/fa';

// function Navbar() {
//   const [showButtons, setShowButtons] = useState(false);

//   const toggleButtons = () => {
//     setShowButtons(!showButtons);
//   };

//   return (
//     <>



   
//       <div className='nav'>
//         <div className='logos'>
//         <img src='./Images/reallogo.png' alt='Logo' className='logo-img' />
        
//           <FaBars  className='icon' onClick={toggleButtons} />
//         </div>
       
//         <div className='buttons'>
//           <div className={`buttons-container ${showButtons ? 'show' : ''}`}>
//             <div>  
//             <button className='btn1 btn'>Login</button>
//             <button className='btn2 btn'>Start my journey</button></div>
//           </div>


//         </div>
//         </div>
     
//     </>
//   );
// }

// export default Navbar;



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