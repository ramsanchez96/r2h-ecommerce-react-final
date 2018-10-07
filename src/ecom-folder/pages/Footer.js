import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="nav__ul--pages">
          <li>
            <NavLink to="/" exact className="ul__link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" exact className="ul__link">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" exact className="ul__link">
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="nav__ul--social">
          <li>
            <a href="http://facebook.com">
            <img
              src="img/facebook.svg"
              alt="This is an icon that links to Facebook"
            />
            </a>
          </li>
          <li>
            <a href="http://twitter.com">    
            <img
              src="img/twitter.svg"
              alt="This is an icon that links to Twitter"
            />
            </a>
          </li>
          <li>
          <a href="http://youtube.com">
            <img
              src="img/youtube.svg"
              alt="This is an icon that links to YouTube"
            />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
