import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Import social media icons
import '../style/footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      {/* Left Side */}
      <div className="footer-left">
        <div className="footer-left-inner">
          <div className="contact-info">
            <h4>Ethiopia, Addis Ababa</h4>
            <h4>+251 912 247 734</h4>
            <h4>
              <a href="mailto:info@ethiomitmita.com" className="contact-link">
                info@ethiomitmita.com
              </a>
            </h4>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="footer-right">
        <h2>About Company</h2>
        <p>
          Organic Ethiopian chili producer and distributor, serving customers worldwide from our
          base in Ethiopia.
        </p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebook className="social-icon" /> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram className="social-icon" /> Instagram
          </a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
