import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{
              color: "#ADD8E6", // Light blue color for text
              fontWeight: "bold",
              fontSize: "22px", // Slightly larger font size
              display: "flex", // Flex display to align items horizontally
              alignItems: "center", // Vertically align logo and text
            }}
          >
            <img
              src="/img/favicon.ico" // Ensure this path is correct
              alt="Casa Carmela Logo"
              style={{
                height: "60px", // Larger size for better visibility
                width: "100px",
                marginRight: "10px", // Space between logo and text
              }}
            />
            Casa Carmela
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#where-we-are" className="page-scroll">
                Where We Are
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#booking" className="page-scroll">
                Book with Us
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
