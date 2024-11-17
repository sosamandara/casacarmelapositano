import React from "react";
import "./header.css";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="Header-title">
                  {props.data ? props.data.title : "Loading..."}
                </h1>
                <p className="paragraph">
                  {props.data ? props.data.paragraph : "Loading..."}
                </p>
                <a
                  href="#BookWithUs" /* Updated link to target the "BookWithUs" section */
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Book Now {/* Updated button text */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
