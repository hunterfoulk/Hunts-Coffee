import React from "react";
import { useStateValue } from "../state.js";
import CoffeeOne from "../img/coffee1.jpg";
import CoffeeTwo from "../img/coffee2.jpg";
import CoffeeThree from "../img/coffee3.jpg";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import SectionOne from "../img/sec1.jpeg";
import SectionTwo from "../img/sec2.jpeg";
import SectionThree from "../img/sec3.jpeg";
import SectionFour from "../img/sec4.jpeg";
import SectionFive from "../img/sec5.jpeg";
import SectionSeven from "../img/sec7.jpeg";
import CoffeeSvg from "../img/drink-coffee.png";
import Button from "@material-ui/core/Button";

export default function Intro() {
  const [{ icedCoffees, hotCoffees }] = useStateValue();

  return (
    <>
      <div id="intro-section" className="intro-section">
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
      <div id="menu-section" className="section-two">
        <div className="menu-container-one">
          <span className="menu-title">Iced Coffee</span>
          {icedCoffees.map(item => (
            <li className="coffee-tags">
              <li>{item.name}</li>
            </li>
          ))}
        </div>
        <div className="menu-container-two">
          <span className="menu-title">Hot Coffee</span>
          {hotCoffees.map(item => (
            <li className="coffee-tags">
              <li>{item.name}</li>
            </li>
          ))}
        </div>
      </div>

      <div className="section-three">
        <div className="section-three-images">
          <p>Gallery</p>
          <img className="section-images" src={SectionOne} alt="" />
          <img className="section-images" src={SectionTwo} alt="" />
          <img className="section-images" src={SectionThree} alt="" />
          <img className="section-images" src={SectionFour} alt="" />
          <img className="section-images" src={SectionFive} alt="" />
          <img className="section-images" src={SectionSeven} alt="" />
        </div>
      </div>
      <div className="section-four">
        <div className="cup-container">
          <img className="cup-image" src={CoffeeSvg} alt="" />
        </div>
        <div className="feedback-container">
          <h1>Give us your feedback!</h1>
          <p>
            Celebrate the love for coffee with us by sharing your feedback! We
            always love to hear reviews from our supporters on our coffee brewed
            with heart and soul!
          </p>
          <Button
            className="feedback-button"
            variant="contained"
            color="primary"
          >
            Contact us
          </Button>
        </div>
      </div>
    </>
  );
}
