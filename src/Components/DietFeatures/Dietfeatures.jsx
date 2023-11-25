import React from "react";
import "./Dietfeatures.scss";
import WeightlossIcon from "../../assets/projectdata/WeightlossIcon";
import Arrowicon from "../../assets/projectdata/Arrowicon";
import Bolckicon1 from "../../assets/projectdata/Blockicon1";
import Block2 from "../../assets/projectdata/Block2";
import Checkboxicon from "../../assets/projectdata/Checkboxicon";
import Smallcircle from "../../assets/projectdata/Smallcircle";
import Greencircle from "../../assets/projectdata/Greencircle";

function Dietfeatures() {
  return (
    <>
      <section id="dietfeatures">
        <div className="container">
          <div className="left-container">
            <div className="images">
              <img src="./Images/diet1.png.png" />
              <img src="./Images/diet2.png.png" />
            </div>
          </div>
          <div className="right-container">
            <h1>The <span>Diet</span>  That Works When Nothing Else Does!</h1>
            <p>
              For years we have been told that diets do not work. That fat is
              bad, and carbs are good. That lack of success is our own fault. We
              are here to prove that’s not true. We are going to show you the
              diet that ends all diets. Together, we will change the way you
              look at food.
            </p>
          </div>
        </div>
        <div className="seccontainer">
          <div className="weightloss">
            <div>
              <WeightlossIcon />
            </div>
            <div>
              <h5>Lose weight</h5>
              <p>
                Keto is an extremely effective way to lose weight. Create the
                body that makes you happy.
              </p>
            </div>
          </div>
          <div className="arrowiconcon">
            <div className="arrowicon">
              <p>What else we do?</p>
              <a href="#homepage">
                <Arrowicon />
              </a>
            </div>
          </div>
        </div>
        <div className="container-fulid">
          <div className="smartwork">
            <h1>Start keto the smart way!</h1>
            <p>
              It's hard work to become your healthiest self, but it's much
              easier when you have the right tools and support. Leave the
              science and planning to us while you focus on what matters most –
              changing your life for the better.
            </p>
          </div>
          <div className="block">
            <div className="blockleft">
              <div className="flex">
                <Bolckicon1 />
                <h2>Personalised</h2>
                <Block2 />
              </div>
              <p>
                Other diets do not work because they are not built with people’s
                behaviours in mind. That’s why people are at the heart of Keto
                Cycle’s innovation. We customise your plan based on your
                lifestyle, health, and nutritional needs to get the fastest
                results. Your needs, your body, your keto.
              </p>
              <div className="blockpoints">
                <div className="points">
                  <Checkboxicon />
                  <p>Only the foods you love</p>
                  <Checkboxicon />
                  <p>Only the foods you love</p>
                </div>
                <div className="points">
                  <Checkboxicon />
                  <p>Only the foods you love</p>
                </div>
              </div>
            </div>

            <div className="blockright">
              <div className="blockimage">
                <img src="./Images/block.png" />
              </div>
            </div>
          </div>
          <div className="quizblock">
            <div className="quizblockhead">
              <h1>Designed for keto beginners</h1>
              <p>
                Where others feel lost, we show you the way. Here you'll find
                everything you need to get started with keto. Finally! Keto made
                easy.
              </p>
            </div>
            <div className="quizflex">
              <div className="quizblockleft">
                <div className="quizblockimg">
                  <img src="./Images/quizimg.png" className="quizimg" />
                </div>
              </div>
              <div className="doflex">
                <div className="quizblockcenter">
                  <h2>1</h2>
                  <span className="quizicon">
                    {" "}
                    <Smallcircle />
                  </span>
                </div>
                <div className="quizblockright">
                  <h1>Take a quiz</h1>
                  <p>
                    Tell us what your goals are, what and how you like to eat.
                  </p>
                  <span className="quizicon">
                    {" "}
                    <a href="#product">
                      <Greencircle />
                    </a>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dietfeatures;
