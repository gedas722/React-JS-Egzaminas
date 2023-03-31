import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container-left">
        <p>© 2023 Airbnb, Inc.</p>
        <ul className="footer-ul">
          <li>
            <Link className="footer-url" to="#">
              Terms
            </Link>
          </li>
          <li>
            <Link className="footer-url" to="#">
              Sitemap
            </Link>
          </li>
          <li>
            <Link className="footer-url" to="/privacy">
              Privacy
            </Link>
          </li>
          <li>
            <Link className="footer-url" to="#">
              Your Privacy Choises
            </Link>
          </li>
          <li>
            <Link className="footer-url" to="#">
              Destinations
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-container-right">
        <ul className="lang-list">
          <li>English(US)</li>
          <li>EUR</li>
          <li>Support & resources </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
