// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import '../style/Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section brand">
                    <h3>Kaki Gamerz Corp.</h3>
                    <p>Leveling up reality since 1969.</p>
                </div>

                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>  <a href="#">Phone</a> </li>
                        <li>  <a href="#">Watch</a> </li>
                        <li>  <a href="#">Tablet</a> </li>
                        <li>  <a href="#">Games</a> </li>

                        <li> <Link to="/about">About Us</Link> </li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <p><i className="fa fa-map-marker"></i> USM, Penang, Malaysia</p>
                    <p><i className="fa fa-phone"></i> +60 19-88579</p>
                    <p><i className="fa fa-envelope"></i> kakigamerz@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Kaki Gamerz Corp. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;