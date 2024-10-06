import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const ContactUs = () => {
  return (
    <div className="container my-5 py-5" id='contact'>
      <h1 className="text-center mb-5  "style={{color:'rgb(74, 227, 176)'}}>Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group mb-4">
              <label htmlFor="name">Name</label>
              <input type="text" name='name' className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email">Email</label>
              <input type="email" name='email' className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn" style={{backgroundColor:'rgb(74, 227, 176)',color:'white'}}>Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4 className="text-muted mb-4">Get in Touch</h4>
          <p>If you have any questions, feel free to reach out to us using the form or the contact information below:</p>
          <p>
            <strong>Email:</strong> contact@traveler.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Traveler St, City, Country
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
