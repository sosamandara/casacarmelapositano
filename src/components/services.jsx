import React from "react";
import './services.css';  // Import the CSS

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Enjoy a comfortable stay at Casa Carmela, with all the amenities you need for a memorable vacation. Here are the key features:
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-icon">
              <img
                src="img/portfolio/7.jpg" // Change to your image path
                alt="BedRoom"
                className="service-icon-img"
              />
            </div>
            <div className="service-desc">
              <h3>3 Bedrooms</h3>
              <p>
                Spacious accommodation for up to 6 people, ideal for families, groups of friends, or even smaller parties seeking a cozy and relaxing stay.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-icon">
              <img
                src="img/portfolio/10.jpg" // Change to your image path
                alt="Bathroom"
                className="service-icon-img"
              />
            </div>
            <div className="service-desc">
              <h3>2.5 Bathrooms</h3>
              <p>
                Convenient bathroom facilities with modern fittings for a comfortable stay.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-icon">
              <img
                src="img/portfolio/42.jpg" // Change to your image path
                alt="Modern Appliances"
                className="service-icon-img"
              />
            </div>
            <div className="service-desc">
              <h3>Modern Appliances</h3>
              <p>
              Fully equipped with modern conveniences, including air conditioning, heating, a fully stocked kitchen (with an oven, microwave, dishwasher, refrigerator, and coffee makers), a washing machine, a water refill station, TVs, and everything you need for a comfortable and relaxing stay.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
              <div className="service-icon">
                <img
                  src="img/portfolio/wifi.jpg" // Change to your image path
                  alt="High-Speed Wi-Fi"
                  className="service-icon-img"
                />
              </div>
              <div className="service-desc">
                <h3>High-Speed Wi-Fi</h3>
                <p>
                  Enjoy reliable, high-speed Wi-Fi throughout the property, perfect for staying connected whether you're working remotely or streaming your favorite shows.
                </p>
              </div>
            </div>


          <div className="col-md-4">
            <div className="service-icon">
              <img
                src="img/portfolio/4.jpg" // Change to your image path
                alt="Prime Location"
                className="service-icon-img"
              />
            </div>
            <div className="service-desc">
              <h3>Prime Location</h3>
              <p>
                Conveniently located near two minimarkets, bus stops to Sorrento and Amalfi, and just a short walk to Piazza dei Mulini and Spiaggia Grande.
              </p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="service-icon">
              <img
                src="img/portfolio/servizi.jpg" // Change to your image path
                alt="Your Dedicated Host"
                className="service-icon-img"
              />
            </div>
            <div className="service-desc">
              <h3>Your Dedicated Host</h3>
              <p>
                Our host will provide personalized recommendations and assistance to ensure you have a wonderful and stress-free stay.
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
