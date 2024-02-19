import React from 'react';
import './../Styles/Footer.css'; // Make sure to adjust the import path based on your project structure

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com/in/roopa-p-13238a29a" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/roopap12" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        {/* Add more social media links as needed */}
      </div>
      <p className="footer-text">© 2024 Roopa Patel. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
