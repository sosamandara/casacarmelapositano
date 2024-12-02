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
          For your daily needs, two minimarkets are located just a few steps from Casa Carmela, ensuring all essentials are within easy reach.
        </p>
        
        {/* Google Maps iframe */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.9255986520125!2d14.484310376410413!3d40.63152274253785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b974cef855e4d%3A0xde520780f7602a6b!2sCasa%20Carmela%20Positano!5e0!3m2!1sit!2sit!4v1733153620072!5m2!1sit!2sit"
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