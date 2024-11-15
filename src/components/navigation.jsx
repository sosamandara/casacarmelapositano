import React from "react";

export const Navigation = (props) => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const yOffset = -70; // Adjust this value as needed for the offset
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container" style={{ display: "flex", alignItems: "center" }}>
        <div
          className="navbar-header"
          style={{ display: "flex", alignItems: "center", marginTop: "5px" }} // Adjusted margin-top
        >
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
              color: "#ADD8E6",
              fontWeight: "bold",
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/img/favicon.ico" // Ensure this path is correct
              alt="Casa Carmela Logo"
              style={{
                height: "50px", // Set a consistent size for alignment
                width: "70px",
                marginRight: "10px",
                verticalAlign: "middle",
              }}
            />
            <span style={{ verticalAlign: "middle" }}>Casa Carmela</span>
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul
            className="nav navbar-nav navbar-right"
            style={{
              display: "flex",
              alignItems: "center",
              height: "60px", // Match height for alignment
              lineHeight: "60px",
              marginLeft: "auto", // Push nav items to the right
            }}
          >
            <li>
              <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#where-we-are" onClick={(e) => handleScroll(e, "#where-we-are")} className="page-scroll">
                Where We Are
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={(e) => handleScroll(e, "#testimonials")} className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#booking" onClick={(e) => handleScroll(e, "#booking")} className="page-scroll">
                Book with Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
