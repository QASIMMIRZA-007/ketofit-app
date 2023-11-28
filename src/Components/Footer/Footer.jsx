import React from "react";
import "./Footer.scss";
import Footericon from '../../assets/projectdata/Footericon'
import Footericon2 from '../../assets/projectdata/Footericon2'
import Footericon3 from '../../assets/projectdata/Footericon3'

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="footer">
          <div className="footer-container">
            <div className="footer-left">
              <p>Numbers from people’s trust</p>
              <div className="footer-flex">
                <div className="box">
                  <h2>270 000</h2>
                  <p>Active subscribers</p>
                </div>
                <div className="box">
                  <h2>962 000</h2>
                  <p>App downloads</p>
                </div>
                </div>
                <p>Disclaimer: results may vary from person to person © 2023 ketocycle. All Rights Reserved.</p>
                <div className="footer-image">
                    <img src="./Images/Group 1.png"/>
                      </div>
              </div>
             
              <div className="footer-right">
                <p className="right-para">Keep in touch</p>
                <div className="footer-icons">
                    <Footericon/>
                    <Footericon2/>
                    <Footericon3/>
                </div>
                <div className="input">
                    <input type="email" name="email"  placeholder="Enter email address"/>
                    <button>Get updates</button>
                </div>
                <p className="footer-right-para">By entering your email, you agree to our Terms of Use and Privacy Policy.</p>
                <div className="footer-right-flex">
                  <div>
                    <p className="footer-para ubantu">Help</p>
                    <p><b>Privacy Policy</b></p>
                    <p> <b> Terms & Conditions</b>
                    
                    </p></div>
                    <div className="footer-images-flex">
                        <img src="./Images/footer1.png"/>
                        <img src="./Images/footer2.png"/>
                    </div>
                </div>
              </div>
            </div>
            </div>
   
      </section>
    </>
  );
}

export default Footer;
