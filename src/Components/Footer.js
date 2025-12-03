import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 app-footer"> 
     
     
      <div className="container-fluid"> 
        
        <div className="row mb-5">
            
            <div className="col-md-3 col-sm-6 mb-4">
                <h5 className="text-uppercase mb-4">H&T Auctions</h5>
                <ul className="list-unstyled">
                    <li><a href="/" className="text-light text-decoration-none">About Us</a></li>
                    <li><a href="/" className="text-light text-decoration-none">Careers</a></li>
                    <li><a href="/" className="text-light text-decoration-none">Press</a></li>
                </ul>
            </div>
            
            <div className="col-md-3 col-sm-6 mb-4">
                <h5 className="text-uppercase mb-4">Support</h5>
                <ul className="list-unstyled">
                    <li><a href="/" className="text-light text-decoration-none">Contact Us</a></li>
                    <li><a href="/" className="text-light text-decoration-none">FAQ</a></li>
                    <li><a href="/" className="text-light text-decoration-none">Help Center</a></li>
                </ul>
            </div>
            
            <div className="col-md-3 col-sm-6 mb-4">
                <h5 className="text-uppercase mb-4">Legal</h5>
                <ul className="list-unstyled">
                    <li><a href="/" className="text-light text-decoration-none">Terms of Service</a></li>
                    <li><a href="/" className="text-light text-decoration-none">Privacy Policy</a></li>
                    <li><a href="/" className="text-light text-decoration-none">Cookie Policy</a></li>
                </ul>
            </div>
            
            <div className="col-md-3 col-sm-6 mb-4">
                <h5 className="text-uppercase mb-4">Follow Us</h5>
                <div style={{marginLeft:80}}>
                    <a href="www.facebook.com/itzhaziq" className="text-light me-3"><i className="bi bi-twitter fs-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEFw8V8RB5Kz8AlTFBLVFIwT5hIyePW1-Vw&s" alt="Facebook Logo" width="40" height="40"/></i></a>
                    <a href="www.instagram.com/hazick_" className="text-light"><i className="bi bi-facebook fs-4"><img src="https://img.freepik.com/premium-vector/twitter-vector-logo-logotype-vector-social-media_901408-401.jpg?semt=ais_hybrid&w=740&q=80" alt="Facebook Logo" width="40" height="40"/></i></a> 
                </div>
            </div>

        </div>
        
        <hr className="text-light my-3"/>
        
        <div className="row">
            <div className="col-12 text-center pt-3">
                <p className="mb-0 small">&copy; 2024 Hammers & Tongues. All rights reserved.</p>
            </div>
        </div>
        
      </div>
    </footer>

  )
}

export default Footer