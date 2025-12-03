import React from 'react'
import "./NavbarSignuppage.css"
function NavbarSignuppage(props) {
  return (
    <>
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
     

        <form className="d-flex align-items-center ms-1 px-1">
            <p className='Already'>Already have an account?</p>

          <button className="Loginbtn">
            Login/Register
          </button>
        </form>

    </nav>
    </>
  )
}

export default NavbarSignuppage
