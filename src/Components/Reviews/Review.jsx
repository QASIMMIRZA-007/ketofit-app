import React from 'react'
import './Review.scss'
import Arrowicon from '../../assets/projectdata/Arrowicon'
import Smallcircle from '../../assets/projectdata/Smallcircle'
import Greencircle from '../../assets/projectdata/Greencircle'
function Review() {
  return (
    <>
      <section id='review'>
        <div className='review-container'>
            <div className='review-left'>
                <div className='images-container'>
                    <img src='./Images/review.png'/>
                    <img src='./Images/review2.png'/>
                </div>
            </div>
            <div className='review-right'>
                <h1>Sandra 27 <span>-</span>   <span className='green'>lost 62lbs</span></h1>
                <p>I looked and felt bloated as I stared at my pictures, and that was when it all began. I vowed to make myself happy by being disciplined, committed, consistent, and happy with the journey. The beauty of this Keto program is that you can make it your own. You can eat whenever you want, snack on delicious treats, and still feel great at the end of the day. That’s how it’s been for me. If I can make it this far, anyone can. Thanks to Keto Cycle for this platform.</p>
                <div className='arrowcircleicons'>
                <span  className="circle"><Smallcircle/></span>
                <a href='#dietfeatures'><Greencircle  className="greencircle"/></a>
                
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Review
