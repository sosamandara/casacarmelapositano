import React, { useState, useEffect } from "react";
import "./header.css";

export const Header = (props) => {
  const [orientation, setOrientation] = useState(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
  const [showRotateMessage, setShowRotateMessage] = useState(true);

  useEffect(() => {
    function handleResize() {
      setOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDismiss = () => {
    setShowRotateMessage(false);
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay"></div>
        <div className="container">
          {orientation === 'portrait' && showRotateMessage && (
            <div className="rotate-device">
              <span className="rotate-icon">🔄</span>
              <p>Rotate your device for the best experience</p>
              <button onClick={handleDismiss} className="dismiss-button">Dismiss</button>
            </div>
          )}
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
