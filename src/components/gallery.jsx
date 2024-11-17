import React, { useState } from "react";
import Image from "./image";
import "./gallery.css";

export const Gallery = (props) => {
  const [currentSet, setCurrentSet] = useState(1);

  const imagesPerPage = 12;

  const handleSetChange = (set) => {
    setCurrentSet(set);
  };

  const getImagesForCurrentSet = () => {
    const images = props.data || [];
    const startIndex = (currentSet - 1) * imagesPerPage;
    return images.slice(startIndex, startIndex + imagesPerPage);
  };

  const totalSets = Math.ceil((props.data?.length || 0) / imagesPerPage);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Discover the beauty of Casa Carmela through our gallery. </p>

          <p>Get a glimpse of our spacious rooms named after beloved family members, cozy living areas, and the terracethat showcase the magical Positano sunsets.</p>

        </div>

        {/* Pagination Buttons */}
        {totalSets > 1 && (
          <div className="gallery-panel">
            {[...Array(totalSets)].map((_, index) => (
              <button
                key={index + 1}
                className={`btn ${currentSet === index + 1 ? "btn-primary" : "btn-default"}`}
                onClick={() => handleSetChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Images */}
        <div className="row portfolio-items">
          {getImagesForCurrentSet().map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
              {d.image ? (
                <Image title={d.title} image={d.image} />
              ) : (
                <div className="image-placeholder">No Image Available</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
