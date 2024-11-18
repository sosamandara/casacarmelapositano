import React from "react";

export const Testimonials = (props) => {
    return (
        <div id="testimonials">
            <div className="container">
                <div className="section-title text-center">
                    <h2>What our clients say</h2>
                </div>
                <div className="row">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-md-6 col-sm-12">
                                <div className="testimonial">
                                    <div className="testimonial-wrapper">
                                        <div className="testimonial-image">
                                            <img src={d.img} alt={`Photo of ${d.name}`} />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>"{d.text}"</p>
                                            <div className="testimonial-meta">
                                                - {d.name}
                                                {d.where_and_platform && (
                                                    <span className="testimonial-platform">
                                                        {" "}({d.where_and_platform})
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>

                {/* Buttons to link to external reviews */}
                <div className="text-center" style={{ marginTop: "20px" }}>
                    <a
                        href="https://www.airbnb.com/rooms/826055515812450770/reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-airbnb"
                        style={{
                            backgroundColor: "#FF5A5F", // Airbnb color
                            color: "white",
                            padding: "10px 20px",
                            fontSize: "16px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            marginRight: "10px",
                            display: "inline-block",
                        }}
                    >
                        Read More on Airbnb
                    </a>
                    <a
                        href="https://www.booking.com/hotel/it/casa-carmela-positano.html#tab-reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-booking"
                        style={{
                            backgroundColor: "#003580", // Booking.com color
                            color: "white",
                            padding: "10px 20px",
                            fontSize: "16px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            marginLeft: "10px",
                            display: "inline-block",
                        }}
                    >
                        Read More on Booking.com
                    </a>
                </div>
            </div>
        </div>
    );
};
