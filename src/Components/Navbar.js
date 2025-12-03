import React from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 d-flex align-items-center">

      <div className="logoTitle d-flex align-items-center">
        <img 
          src={props.img} 
          alt={props.title} 
          style={{width:60, height:60, marginLeft:5}}
        />
      </div>

      <div className="title ms-3">
        <h4 className="m-0 text-white">Hammers & Tongues</h4>
      </div>

      <button 
        className="navbar-toggler ms-auto" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto d-flex align-items-center gap-4">

          <li className="nav-item">
            <a className="nav-link text-white fs-6" href="/">Auctions</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white fs-6" href="/">About Us</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white fs-6" href="/">Contact</a>
          </li>

        </ul>

       <div className="d-flex align-items-center ms-4">
  <Link to="/signup">
    <button type="button" className="Loginbtn">
      Login/Register
    </button>
  </Link>
</div>

      </div>
    </nav>
  )
}

export default Navbar
