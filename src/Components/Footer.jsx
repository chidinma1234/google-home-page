/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LeafIcon from '../assets/leaf.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="country">
        <p>Nigeria</p>
      </div>
      <div className="footer_links">
        <ul className="first_link">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Advertising</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">How Search Works</a>
          </li>
        </ul>
        <div className="carbon">
          <img src={LeafIcon} alt="leaf-icon " />
          <p>Carbon neutral since 2007</p>
        </div>
        <ul className="second_link">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
