import React, { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  from_name: "",
  from_email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ from_name, from_email, message }, setState] = useState(initialState);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", from_name, from_email, message);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatus("Message sent successfully!");
          clearState();
        },
        (error) => {
          console.log("Error sending email:", error.text);
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Please fill out the form below to send us an email, and we will get back to you as soon as possible.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="from_name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={from_name}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="from_email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={from_email}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
              {status && <p>{status}</p>}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a
                      href={props.data ? props.data.instagram : "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-instagram"
                      style={{
                        backgroundColor: "#E4405F", // Instagram pink color
                        color: "white",
                        display: "inline-flex",
                        alignItems: "center",
                        borderRadius: "8px",
                        padding: "10px 20px",
                        fontSize: "16px",
                      }}
                    >
                      <i className="fa fa-instagram" style={{ marginRight: "10px" }}></i>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.airbnb : "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-airbnb"
                      style={{
                        backgroundColor: "#FF5A5F", // Airbnb red color
                        color: "white",
                        display: "inline-flex",
                        alignItems: "center",
                        borderRadius: "8px",
                        padding: "10px 20px",
                        fontSize: "16px",
                      }}
                    >
                      <i className="fa fa-home" style={{ marginRight: "10px" }}></i>
                      Airbnb
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.booking : "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-booking"
                      style={{
                        backgroundColor: "#003580", // Booking.com blue color
                        color: "white",
                        display: "inline-flex",
                        alignItems: "center",
                        borderRadius: "8px",
                        padding: "10px 20px",
                        fontSize: "16px",
                      }}
                    >
                      <i className="fa fa-book" style={{ marginRight: "10px" }}></i>
                      Booking
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Casa Carmela Positano. Design by{" "}
            <a href="https://www.linkedin.com/in/angelo-mandara-6aa4b4232/" rel="nofollow">
              Angelo Mandara
            </a>
            , credits to{" "}
            <a href="https://github.com/issaafalkattan/React-Landing-Page-Template" rel="nofollow">
              Issaaf Kattan
            </a>{" "}
            and to{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
