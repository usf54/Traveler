import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlane, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5><FaPlane/>Traveler</h5>
            <p>Your go-to solution for unforgettable travel experiences.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#contact" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: contact@traveler.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <div className="social-icons mt-2">
              <a href="/#" className="text-white me-3"><FaFacebook /></a>
              <a href="/#" className="text-white me-3"><FaTwitter /></a>
              <a href="/#" className="text-white me-3"><FaInstagram /></a>
              <a href="/#" className="text-white"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3 bg-secondary">
        <p className="mb-0">© {new Date().getFullYear()} Traveler. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
