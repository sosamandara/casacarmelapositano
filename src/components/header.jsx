import React from "react";
import "./header.css";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay"></div>
        <div className="container">
          {/* Rotation message with symbol */}
          <div className="rotate-device">
            <span className="rotate-icon">🔄</span> Rotate your device for the best experience
          </div>
          <div className="intro-text">
            <h1 className="Header-title">
              {props.data ? props.data.title : "Welcome to Casa Carmela"}
            </h1>
            <p className="paragraph">
              {props.data
                ? props.data.paragraph
                : "Your serene escape nestled in the heart of Positano, along the stunning Amalfi Coast. From cozy spaces to a fully equipped kitchen, our home is designed to make you feel at ease."}
            </p>
            <a href="#booking" className="btn btn-custom">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
