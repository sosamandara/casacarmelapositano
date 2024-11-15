import React from "react";
import './services.css';  // Adjust the path if the CSS file is in a different folder

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Enjoy a comfortable stay at Casa Carmela, with all the amenities
            you need for a great vacation. Here are the key features:
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-icon">
              <img
                src="img/portfolio/1.jpg" // Change to your image path
                alt="Living Room"
                className="service-icon-img"
              />
            </div>
            <div className="service-desc">
              <h3>3 Bedrooms</h3>
              <p>
                Spacious accommodation for up to 6 people, perfect for families
                or groups of friends.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-icon">
              <img
                src="img/portfolio/2.jpg" // Change to your image path
                alt="Bathroom"
                className="service-icon-img"
              />
            </div>
            <div className="service-desc">
              <h3>2.5 Bathrooms</h3>
              <p>Convenient bathroom facilities with modern fittings.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-icon">
              <img
                src="img/portfolio/3.jpg" // Change to your image path
                alt="Recent Appliances"
                className="service-icon-img"
              />
            </div>
            <div className="service-desc">
              <h3>Recent Appliances</h3>
              <p>
                Enjoy modern appliances, including a coffee machine, kettle,
                microwave, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="service-icon">
              <img
                src="img/portfolio/4.jpg" // Change to your image path
                alt="Convenient Location"
                className="service-icon-img"
              />
            </div>
            <div className="service-desc">
              <h3>Convenient Location</h3>
              <p>
                The apartment is very near to a minimarket, bus stops, and a few
                steps from Piazza Mulini.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-icon">
              <img
                src="img/portfolio/5.jpg" // Change to your image path
                alt="Prime Location"
                className="service-icon-img"
              />
            </div>
            <div className="service-desc">
              <h3>Prime Location</h3>
              <p>
                The apartment is located in the heart of Positano, very close to
                the center, for easy access to local attractions.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-icon">
              <img
                src="img/portfolio/6.jpg" // Change to your image path
                alt="Your Dedicated Host"
                className="service-icon-img"
              />
            </div>
            <div className="service-desc">
              <h3>Your Dedicated Host</h3>
              <p>
                Our host will take care of you and provide helpful suggestions
                to organize a memorable stay, ensuring you create lifelong
                memories.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p>
              For more detailed information about the services and amenities
              offered, visit our{" "}
              <a
                href="https://www.airbnb.com/rooms/826055515812450770/amenities?guests=1&adults=1&s=67&unique_share_id=a25054a7-646c-4006-885d-65e7c909b629&source_impression_id=p3_1731689319_P3sbI6lNo2-eQupK"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "underline",
                  color: "#FF5A5F", // Instagram pink color
                }}
              >
                Airbnb page
              </a>{" "}
              for more details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
