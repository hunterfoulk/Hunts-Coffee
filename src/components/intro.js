import React from "react";
import CoffeeOne from "../img/coffee1.jpg";
import CoffeeTwo from "../img/coffee2.jpg";
import CoffeeThree from "../img/coffee3.jpg";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";

export default function Intro() {
  return (
    <>
      <div id="#intro-section" className="intro-section">
        <div className="intro-container">
          <span className="text-line-holder1"></span>
          <h1>Brewed Fresh Daily.</h1>
          <span className="text-line-holder2"></span>
        </div>
        <div className="images-container">
          <img className="coffee-images" src={CoffeeTwo} alt="" />
          <img className="coffee-images" src={CoffeeOne} alt="" />
          <img className="coffee-images" src={CoffeeThree} alt="" />
        </div>

        <div className="social-links-container">
          <div className="social-links">
            <h2>Follow us on social media!</h2>
            <div className="socialimages">
              <img className="social-images" src={Facebook} alt="" />
              <img className="social-images" src={Instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-two"></div>
    </>
  );
}
