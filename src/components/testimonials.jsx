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
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={d.img} alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>

        {/* Buttons to link to external reviews */}
        <div className="text-center" style={{ marginTop: "20px" }}>
          <a
            href="https://www.airbnb.com/rooms/826055515812450770/reviews?guests=1&adults=1&s=67&unique_share_id=a25054a7-646c-4006-885d-65e7c909b629&source_impression_id=p3_1731689319_P3sbI6lNo2-eQupK"
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
            href="https://www.booking.com/hotel/it/casa-carmela-positano.html?label=casa-carmela-positano-QgYM5G95r6MBQFD4Am5FvgS714536859097%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2362856754910%3Alp9210901%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXdX6HrtnYy-Ml68sH-ljtU-Share-VLMM4i4%401731631046-Share-xmoX4W%401731631147&sid=bd564d2c9389324362ac6a6865f29314&aid=311984&ucfs=1&arphpl=1&dest_id=-125592&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=79137632b4b1015f&srepoch=1731689413&from=searchresults#tab-reviews"
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
