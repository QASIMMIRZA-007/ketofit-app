  import React from "react";
import "./Homepage.scss";
import Ketofit from "../../assets/projectdata/Ketofit";

function Homepage() {
  return (
    <>
    {/* <span className="keto">keto</span> */}
      <section id="homepage">
        <div className="homepage">
          <div className="left">
            <h1>
              Smarter way to <Ketofit/> {" "}
            </h1>
            <p>
              A ketogenic diet app designed to make keto easy. From the start.
            </p>
            <button className="homepage-btn">Get Started</button>
            <div className="circles">
              <div className="images">
                <img src="./Images/Ellipse 1.png"  />
                <img src="./Images/Ellipse 2.png" className="img1" />
                <img src="./Images/Ellipse 3.png" className="img2"/>
              </div>
              <p className="homepara" >
                380,000 people trust us around the globe.
              </p>
            </div>
          </div>

          <div className="right">
            <div className="rightimages">
              <div className="leftside">
                <img src="./Images/Rectangle9.png" className="first-img" />

                <img src="./Images/Rectangle10.png" />
                <img src="./Images/Rectangle11.png" className="thirdimg" />
              </div>
              <div className="rightside">
                <div className="dflex">
                  <img src="./Images/Rectangle12.png" />
                  <img src="./Images/Rectangle13.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
