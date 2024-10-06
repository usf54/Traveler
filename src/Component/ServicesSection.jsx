import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const services = [
  {
    id: 1,
    title: 'Travel Planning',
    description: 'We help you plan your dream vacation with personalized itineraries tailored to your preferences.',
  },
  {
    id: 2,
    title: 'Guided Tours',
    description: 'Join our guided tours to explore the best destinations with knowledgeable guides.',
  },
  {
    id: 3,
    title: 'Accommodations',
    description: 'Find the best places to stay that suit your style and budget, from luxury hotels to cozy hostels.',
  },
  {
    id: 4,
    title: 'Travel Insurance',
    description: 'Protect yourself and your trip with our comprehensive travel insurance options.',
  },
];
const ServicesSection = () => {
  return (
    <div className="container  my-5 py-5" id='services'>
      <h1 className="text-center mb-4 " style={{color:'rgb(74, 227, 176)'}}>Our Services</h1>
      <div className="row">
        {services.map(service => (
          <div key={service.id} className="col-md-6 col-lg-3 mb-4 text-center mb-5 my-5">
            <div className="card shadow-sm d-flex flex-column h-100">
              <div className="card-body d-flex flex-grow-1 flex-column">
                <h5 className="card-title mb-5" style={{color:'rgb(74, 227, 176)'}}>{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServicesSection;
