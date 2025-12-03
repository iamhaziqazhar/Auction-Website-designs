import React from "react";
import "./FeaturedAuctions.css";

const FeaturedAuctions = ({ data = [] }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="auction-slider-container container my-5">
        <h2 className="main-heading" style={{fontWeight:900}}>Featured Auctions</h2>
        <h4 style={{ textAlign: "center", color: "#555" }}>No Auctions Available</h4>
      </div>
    );
  }

  const slides = Math.ceil(data.length / 5);

  return (
    <div className="auction-slider-container container my-5">
      <h2 className="main-heading">Featured Auctions</h2>

      <div id="auctionCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {Array.from({ length: slides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
            >
              <div className="row d-flex justify-content-center">
                {data.slice(slideIndex * 4, slideIndex * 4 + 4).map((card, i) => (
                  <div key={i} className="col-md-3">
                    <div className="auction-card card">
                      <div className="card-image-container">
                        <img src={card.img} alt={card.Title} className="img-fluid" style={{objectFit:"contain"}} />
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">{card.Title}</h5>

                        <div className="auction-details-grid">
                          <div className="detail-group">
                            <span className="detail-label">Current Bid</span>
                            <span className="detail-value bid-value">{card.Bid}</span>
                          </div>

                          <div className="detail-group">
                            <span className="detail-label">Time Remaining</span>
                            <span className="detail-value time-value">
                              {card.TimeRemaining}
                            </span>
                          </div>
                        </div>

                        <a href="/" className="detail-button">View Details</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#auctionCarousel" data-bs-slide="prev">
          <span className="slide-button prev">‹</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#auctionCarousel" data-bs-slide="next">
          <span className="slide-button next">›</span>
        </button>
      </div>
    </div>
  );
};

export default FeaturedAuctions;
