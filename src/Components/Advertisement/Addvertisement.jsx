import React from 'react'
import './Addvertisement.scss'
function Addvertisement() {
  return (
    <>
      <section id='addvertise'>
        <div className='addvertise-container'>
            <div className='addvertise-left'>
                {/* <img src='./Images/addvertise.png'  className='addvertise-img' /> */}
                {/* <img src='./Images/Ellipse 12.png' className='addvertise-img1' /> */}
                <img src='./Images/advertise2.png' className='addvertise-img'/>
            </div>
            <div className='addvertise-right'>
                <h1>Keto is the magic pill that gets your body healthy</h1>
                <p>The ketogenic lifestyle gets to the bottom of almost every chronic disease known to mankind: heart disease, diabetes, cancer, Alzheimer’s, PCOS, metabolic syndrome. Keto does not treat these diseases one by one, as conventional doctors do, but gets to the root of the problem - insulin resistance. When you have insulin levels under control, you reduce inflammation and thus the risk of chronic diseases.</p>
                <p className='addvertise-para'><b>Lauren Weiss, Ph.D., CNS-S, CKNS</b></p>
                <p>Certified Ketogenic Nutrition Specialist</p>
                <img src='./Images/posters.png'/>
            </div>
        </div>

      </section>
    </>
  )
}

export default Addvertisement
