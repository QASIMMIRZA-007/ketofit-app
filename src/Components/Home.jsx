import React from 'react'
import Navbar from './Navbar/Navbar'
import Homepage from './Homepage/Homepage'
import Dietfeatures from './DietFeatures/Dietfeatures'
import About from './About/About'
import Addvertisement from './Advertisement/Addvertisement'
import Product from './Product/Product'
import Ketotaste from './Ketotaste/Ketotaste'
import Review from './Reviews/Review'
import Footer from './Footer/Footer'


function Home() {
  return (
    <>
    <div className='home'>
    
     <Navbar/> 
      <Homepage/> 
    <Dietfeatures/>
    <About/>
   <Addvertisement/>
    <Product/>
    <Ketotaste/>
    <Review/>
    <Footer/>

    </div>
   
    </>
  )
}

export default Home

