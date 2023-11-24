import React from 'react'
import Producticon1 from  "../../assets/projectdata/Producticon1";
import Producticon2 from  "../../assets/projectdata/Producticon2";
import Producticon3 from  "../../assets/projectdata/Producticon3";
import Producticon4 from  "../../assets/projectdata/Producticon4";
import Producticon5 from  "../../assets/projectdata/Producticon5";
import Producticon6 from  "../../assets/projectdata/Producticon6";
import './Product.scss'
function Product() {
  return (
    <>
      <section id='product'>
      <div className='product-head'>
                <h1>The last diet app you’ll ever need!</h1>
            </div>
        <div className='product-container'>
            <div className='product-left'>
                <img src='./Images/Display.png'/>
            </div>
            <div className='product-right'>
                <div className='product-flex'>
                    <div ><Producticon1/>   </div>
                    <div>
                        <h4>Shopping List</h4>
                        <p>Ingredients you can find at any store.</p>
                    </div>
                </div>
                <div className='product-flex'>
                    <div><Producticon2/>   </div>
                    <div>
                        <h4>Effective Workouts</h4>
                        <p>Lose weight and see results faster.</p>
                    </div>
                </div>
                <div className='product-flex'>
                    <div><Producticon3/>   </div>
                    <div>
                        <h4>Keto Academy</h4>
                        <p>Detailed, expert-crafted guide for keto beginners.</p>
                    </div>
                </div>
                <div className='product-flex'>
                    <div><Producticon4/>   </div>
                    <div>
                        <h4>Meal Planner</h4>
                        <p>10,000 delicious recipes.</p>
                    </div>
                </div>
                <div className='product-flex'>
                    <div><Producticon5/>   </div>
                    <div>
                        <h4>All-In-One Data Tracker</h4>
                        <p>Track your health and progress in one place.</p>
                    </div>
                </div>
                <div className='product-flex'>
                    <div><Producticon6/>   </div>
                    <div>
                        <h4>Nutritionist Support</h4>
                        <p>Get help and advice from a team of keto experts.</p>
                    </div>
                </div>

            </div>
        </div>
      </section>
    </>
  )
}

export default Product
