import React from 'react';
import weddingImage from '../assets/wedding.jpg'; // Replace with your image path

const ImageCard = () => {
  return (
    <div className="image-card">
      <img src={weddingImage} alt="Wedding arch" />
      <p>
        Wedding planning is the art of weaving dreams into reality, one detail at a time.
      </p>
      
    </div>
  );
};

export default ImageCard;