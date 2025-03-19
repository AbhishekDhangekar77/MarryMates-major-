import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p>&copy; 2024 MarryMates. All rights reserved.</p>
      <p>
          Follow us on: 
          <a href="https://facebook.com" className="text-white mx-2">Facebook</a> | 
          <a href="https://instagram.com" className="text-white mx-2">Instagram</a> | 
          <a href="https://twitter.com" className="text-white mx-2">Twitter</a>
        </p>
       <p>Contact: +22 0123456789 | Email: info@marrymates.com</p>
      <p>Designed with ❤ in Mumbai.</p>

    </footer>
  );
};

export default Footer;