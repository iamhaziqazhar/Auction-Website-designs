import React from 'react'
import "./HeroSection.css"
function HeroSection() {
  return (
    <div className="hero-container d-flex align-items-center justify-content-start px-5 text-white">
      <div>
        <h1 className="fw-bold display-5" style={{color:"white"}}>Premier Online Auctions.<br/>Unbeatable Value.</h1>
        <p className="fs-5 mt-2"style={{color:"White"}}>Discover exclusive deals on vehicles, real estate, art, and more. Your next prized possession awaits.</p>
        <button className="ViewBtn">
          View All Auctions
        </button>
      </div>
    </div>
  )
}

export default HeroSection
