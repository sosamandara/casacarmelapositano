// src/components/Features.js
import React from 'react';
import './whereweare.css';

export const WhereWeAre = (props) => {
  return (
    <div id="where-we-are" className="text-center">
      <div className="container">
        <h2 className="section-title">Where We Are</h2>
        <p>
        Casa Carmela is situated in Liparlati, one of Positano’s oldest districts, offering a peaceful retreat while remaining just minutes away from the town’s vibrant center.
        </p>
        <p>
        From our convenient location, it’s very easy to catch both the local bus and the SITA bus that connects to Sorrento and Amalfi, with stops just 50 meters away. Additionally, a short walk down nearby steps will take you to Piazza dei Mulini and Spiaggia Grande.
        </p>
        <p>
          For your daily needs, a minimarket is located just a few steps from Casa Carmela, ensuring all essentials are within easy reach.
        </p>
        
        {/* Google Maps iframe */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6055.840341447551!2d14.484437576435694!3d40.63164244253039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b976effa7c9dd%3A0x2bc9d3db4dab1205!2sV.%20G.%20Marconi%2C%20196%2C%2084017%20Positano%20SA!5e0!3m2!1sit!2sit!4v1731610105876!5m2!1sit!2sit"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};