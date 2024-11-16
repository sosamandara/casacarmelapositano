import React, { useState } from "react";
import "./navigation.css";

export const Navigation = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const yOffset = -70; // Adjust this value as needed for the offset
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsSidebarOpen(false); // Close sidebar after clicking a link
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        {/* Navbar Header */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a
            className="navbar-brand"
            href="#page-top"
            style={{
              color: "#ADD8E6",
              fontWeight: "bold",
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/img/favicon.ico"
              alt="Casa Carmela Logo"
              style={{
                height: "50px",
                width: "70px",
                marginRight: "10px",
                verticalAlign: "middle",
              }}
            />
            <span style={{ verticalAlign: "middle" }}>Casa Carmela</span>
          </a>
        </div>

        {/* Sidebar for Small Screens */}
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <ul className="sidebar-menu">
            <li>
              <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#where-we-are" onClick={(e) => handleScroll(e, "#where-we-are")}>
                Where We Are
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScroll(e, "#services")}>
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={(e) => handleScroll(e, "#testimonials")}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#booking" onClick={(e) => handleScroll(e, "#booking")}>
                Book with Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Horizontal Navbar for Larger Screens */}
        <div className="collapse navbar-collapse" id="navbar-main">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#where-we-are" onClick={(e) => handleScroll(e, "#where-we-are")}>
                Where We Are
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScroll(e, "#services")}>
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={(e) => handleScroll(e, "#testimonials")}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#booking" onClick={(e) => handleScroll(e, "#booking")}>
                Book with Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
