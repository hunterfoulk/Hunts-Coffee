import React, { useState } from "react";
export default function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-resources-container">
            <h1 className="footer-resources">Resources</h1>
            <ul>
              <li>Growth Opportunities</li>
              <li>Employment</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className="footer-news-container">
            <h1 className="footer-news">News & Events</h1>
            <ul>
              <li>Question, comments, concerns?</li>
              <li>
                We LOVE to hear from our customers. Let us know what you are
                thinking.
              </li>
              <button className="footer-contact-button">Contact us</button>
            </ul>
          </div>
          <div className="footer-locations-container">
            <h1 className="footer-locations">Locations</h1>
            <ul>
              <li>Find us at a location near you!</li>
              <li>Originally located out of Tucson, Arizona</li>
            </ul>
            <button className="locations-button">Locations</button>
          </div>
        </div>
        <div className="copyright-box">
          <div className="copyright">© HUNTS COFFEE - ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </>
  );
}
