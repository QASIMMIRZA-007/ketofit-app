import { useState } from 'react';
import './Navbar.scss';
import './Testing.scss'
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>



    {/* <div className='Container'>
    <img src='./Images/reallogo.png' alt='Logo' className='logo-img' />
    <FaBars  className='icon' onClick={toggleButtons} />
   
    <div className='buttons'>
          <div className={`buttons-container ${showButtons ? 'show' : ''}`}>
            <div>  
            <button className='btn1 btn'>Login</button>
            <button className='btn2 btn'>Start my journey</button></div>
          </div>
          </div> */}
      <div className='nav'>
        <div className='logos'>
        <img src='./Images/reallogo.png' alt='Logo' className='logo-img' />
        
          <FaBars  className='icon' onClick={toggleButtons} />
        </div>
       
        <div className='buttons'>
          <div className={`buttons-container ${showButtons ? 'show' : ''}`}>
            <div>  
            <button className='btn1 btn'>Login</button>
            <button className='btn2 btn'>Start my journey</button></div>
          </div>


        </div>
        </div>
     
    </>
  );
}

export default Navbar;
