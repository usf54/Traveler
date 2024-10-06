import React from 'react';
import aboutImg from "../assets/about.jpg";
function About() {
  return (
    <div className="container my-5 about-section" id='about'>
      <div className="row">
        <div className="col-md-6 img-about-section">
          <img src={aboutImg} loading="lazy" alt="about" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-md-6 text-about-section d-flex flex-column justify-content-center">
          <h1 className=" mb-4" style={{color:'rgb(74, 227, 176)'}}>About Us</h1>
          <p className="text-muted">
            At Traveler, we believe in creating exceptional web experiences that connect people and ideas. Our team is passionate about crafting innovative solutions tailored to your unique needs. With a focus on quality and creativity, we strive to help businesses thrive in the digital landscape. Whether you're looking to build a stunning website, enhance your online presence, or develop a custom application, we have the expertise to turn your vision into reality.
          </p>
          <p className="text-muted">
            We understand that every project is unique, and we take the time to listen and collaborate with you to ensure we capture your brand's essence.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
