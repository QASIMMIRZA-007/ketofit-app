import React from "react";
import Abouticon1 from "../../assets/projectdata/Abouticon1";
import Abouticon2 from "../../assets/projectdata/Abouticon2";
import Abouticon3 from "../../assets/projectdata/Abouticon3";
import Abouticon4 from "../../assets/projectdata/Abouticon4";
import Abouticon5 from "../../assets/projectdata/Abouticon5";
import Abouticon6 from "../../assets/projectdata/Abouticon6";
import "./About.scss";
function About() {
  return (
    <>
      <section id="about">
        <div className="aboutcontainer">
          <div className="aboutleft">
            <h1>About the <span className="greenColor">keto</span> Diet</h1>
            <p>
              The ketogenic diet – a revolutionary low-carb, high-fat eating
              program – has the power to change your body in ways no other diet
              can. It puts your body into ketosis – the health-promoting state
              where you burn fat for energy.
              <br />
              <br />
              Combined with a personalised, guided approach, keto will turn your
              body into a fat-burning machine, giving everything you need for a
              healthy future.
            </p>
            <p>
              <b>Keto Your Way to A Healthier Life</b>
            </p>
            <p>Keto isn’t just a diet. It is a recipe for healthy living.</p>

            <div className="abouticonflex">
              <div className="abouticons">
                <Abouticon1 />
                <p>
                  {" "}
                  <b>Fast weight loss</b>
                </p>
                <Abouticon2 />
                <p>
                  {" "}
                  <b>Improved heart health</b>
                </p>
              </div>
              <div className="abouticons">
                <Abouticon3 />
                <p>
                  {" "}
                  <b>Clear and sharp mind</b>
                </p>
                <Abouticon4 />
                <p>
                  {" "}
                  <b>Lower blood sugar</b>
                </p>
              </div>
              <div className="abouticons">
                <Abouticon5 />
                <p>
                  {" "}
                  <b>More energy</b>
                </p>
                <Abouticon6 />
                <p>
                  {" "}
                  <b>Hormone balance</b>
                </p>
              </div>
            </div>
          </div>
          <div className="aboutright">
            <div className="images-container">
              <img src="./Images/avocado.png " className="aboutimg1" />
              <img src="./Images/about2.png" />
            </div>
            <img src="./Images/about1.png" className="aboutimg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
