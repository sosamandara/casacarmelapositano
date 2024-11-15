import React, { useState } from "react";
import { Image } from "./image";
import "./gallery.css";

export const Gallery = (props) => {
  const [currentSet, setCurrentSet] = useState(1);

  // Debugging: Log the data being received
  console.log("Gallery Props Data: ", props.data);

  const handleSetChange = (set) => {
    setCurrentSet(set);
  };

  const getImagesForCurrentSet = () => {
    const images = props.data || []; // Fallback if no data is passed
    const startIndex = (currentSet - 1) * 9;
    return images.slice(startIndex, startIndex + 9);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Explore the beautiful views and spaces at Casa Carmela through our
            gallery.
          </p>
        </div>

        <div className="gallery-panel">
          <button
            className={`btn ${currentSet === 1 ? "btn-primary" : "btn-default"}`}
            onClick={() => handleSetChange(1)}
          >
            1
          </button>
          <button
            className={`btn ${currentSet === 2 ? "btn-primary" : "btn-default"}`}
            onClick={() => handleSetChange(2)}
          >
            2
          </button>
        </div>

        <div className="row">
          <div className="portfolio-items">
            {getImagesForCurrentSet().map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className="col-sm-6 col-md-4 col-lg-4"
              >
                <Image
                  title={d.title}
                  image={`img/portfolio/${(currentSet - 1) * 9 + i + 1}.jpg`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
