import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container-left">
        <p>© 2023 Airbnb, Inc.</p>
        <ul className="footer-ul">
          <li>
            <a className="footer-url" href="/#">
              Terms
            </a>
          </li>
          <li>
            <a className="footer-url" href="/#">
              Sitemap
            </a>
          </li>
          <li>
            <a className="footer-url" href="/privacy">
              Privacy
            </a>
          </li>
          <li>
            <a className="footer-url" href="/#">
              Your Privacy Choises
            </a>
          </li>
          <li>
            <a className="footer-url" href="/#">
              Destinations
            </a>
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
