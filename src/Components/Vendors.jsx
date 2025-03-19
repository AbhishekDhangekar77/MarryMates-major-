import React from 'react';
import '../custom.css'


import { alignPropType } from 'react-bootstrap/esm/types';

const vendorsData = [
  {
    id: 1,
    name: 'Elegant Events',
    image: 'images/wed2.jpg',
    bundle: 'Complete Wedding Package',
    description: 'Includes venue, catering, decor,Band,Ghoda,Music and entertainment.',
    location: 'Mumbai',
    price: '₹5,00,000',
  },
  {
    id: 2,
    name: 'Royal Weddings',
    image: 'images/wed3.jpg',
    bundle: 'Luxury Wedding Package',
    description: 'Includes royal venue, luxury decor, catering, Mehandi Artists, Photographers and music',
    location: 'Delhi',
    price: '₹10,00,000',
  },
  {
    id: 3,
    name: 'Dream Day Planners',
    image: 'images/wed4.jpg',
    bundle: 'Destination Wedding Package',
    description: 'Includes weddings with venue, decor,entertainment, Music and photography.',
    location: 'Goa',
    price: '₹7,00,000',
  },

  {
    id: 4,
    name: 'All in One Planners',
    image: 'images/wed5.jpg',
    bundle: 'Customized Wedding Package',
    description: 'Tailor-made weddings with venue, decor, Designer caterors and photography.',
    location: 'Bangalore',
    price: '₹7,00,000',
  },

  {
    id: 5,
    name: 'WeddingWire Events',
    image: 'images/wed6.jpg',
    bundle: 'Royal Wedding Package',
    description: 'includes venue, decor,catering,pandit,Beautician and photography.',
    location: 'Punjab',
    price: '₹4,00,000',
  },

  {
    id: 6,
    name: 'Wed Good Planners',
    image: 'images/wed7.jpg',
    bundle: 'Budget Wedding Package',
    description: 'Tailor-made weddings with venue, decor,catering and photography.',
    location: 'Chennai',
    price: '₹3,00,000',
  },

];


const Vendors = () => {
  return (
    <div>
      <div className="vendors-header" >
        <h1>Our Trusted Vendors</h1>
        <p>Explore our handpicked vendors offering exclusive wedding bundles.</p>
      </div>
      <div className="vendors-container">
        {vendorsData.map((vendor) => (
          <div key={vendor.id} className="vendor-card">
            <img src={vendor.image} alt={vendor.name} className="vendor-img" />
            <div className="vendor-details">
              <h3>{vendor.name}</h3>
              <p className="vendor-bundle">{vendor.bundle}</p>
              <p>{vendor.description}</p>
              <p><strong>Location:</strong> {vendor.location}</p>
              <p><strong>Starting from:</strong> {vendor.price}</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Vendors;
