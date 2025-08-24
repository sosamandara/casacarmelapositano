import React from "react";
import "./Booking.css";

export const Booking = (props) => {
  return (
    <div id="booking" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Book Your Stay</h2>
          <p>
          Don’t wait to secure your dream vacation at Casa Carmela. Whether planning a romantic getaway or a family adventure, our cozy yet elegant accommodations provide the perfect base for exploring Positano and the Amalfi Coast.
          </p>
          <p>
          Booking directly with us ensures the best rates and personalized service. Let us help you create memories that last a lifetime.
          </p>
        </div>
        <div id="booking-options" style={{ marginTop: "30px" }}>
          {props.data ? (
            <>
              {/* Airbnb Booking Option */}
              <div className="col-md-6 col-sm-12 booking-option">
                <a
                  href={props.data.airbnbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="rating-badge"
                    style={{
                      marginBottom: "10px",
                      backgroundColor: "#FF5A5F",
                      color: "white",
                      borderRadius: "8px",
                      padding: "10px",
                    }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>Guest favorite</span>
                    <p style={{ margin: "5px 0" }}>
                      One of the most loved homes on Airbnb, according to guests
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          marginRight: "10px",
                        }}
                      >
                        4.98
                      </span>
                      <span>⭐⭐⭐⭐⭐</span>
                      <span style={{ marginLeft: "10px", color: "#eee" }}>55 Reviews</span>
                    </div>
                  </div>
                </a>
                <a
                  href={props.data.airbnbLink}
                  className="btn btn-airbnb"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textDecoration: "none",
                    backgroundColor: "#FF5A5F", // Airbnb color
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src="/img/airbnb-logo.png"
                    alt="Airbnb Logo"
                    style={{
                      height: "40px",
                      width: "100px",
                      marginRight: "2px",
                    }}
                  />
                  Book on Airbnb
                </a>
              </div>
              {/* Booking.com Booking Option */}
              <div className="col-md-6 col-sm-12 booking-option">
                <a
                  href={props.data.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="rating-badge"
                    style={{
                      marginBottom: "10px",
                      backgroundColor: "#003580",
                      color: "white",
                      borderRadius: "8px",
                      padding: "10px",
                    }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>Exceptional</span>
                    <p style={{ margin: "3px 0" }}>30 Reviews</p>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        backgroundColor: "white",
                        color: "#003B95",
                        padding: "3px",
                        borderRadius: "4px",
                        display: "inline-block",
                        marginTop: "10px",
                      }}
                    >
                      9.7
                    </div>
                  </div>
                </a>
                <a
                  href={props.data.bookingLink}
                  className="btn btn-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%",
                    padding: "13px",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textDecoration: "none",
                    backgroundColor: "#003B95", // Booking.com color
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src="/img/booking-logo.png"
                    alt="Booking.com Logo"
                    style={{
                      height: "45px",
                      width: "70px",
                      marginLeft: "1px",
                    }}
                  />
                  Book on Booking.com
                </a>
              </div>
            </>
          ) : (
            "Loading booking options..."
          )}
        </div>
      </div>
    </div>
  );
};
