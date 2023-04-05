/*eslint-disable jsx-a11y/anchor-is-valid*/
import React from 'react';
import LeafIcon from '../assets/leaf.png';
import Location from './Location';
import Links from './FooterLinks';

const Footer = () => {
  return (
    <div className="footer">
      <Location locate={'Nigeria'} />

      <div className="footer_links">
        <ul className="first_link">
          <Links link={'About'} />
          <Links link={'Advertising'} />
          <Links link={'Business'} />
          <Links link={'How Search Works'} />
        </ul>
        <div className="carbon">
          <img src={LeafIcon} alt="leaf-icon " />
          <p>Carbon neutral since 2007</p>
        </div>
        <ul className="second_link">
          <Links link={'Privacy'} />
          <Links link={'Terms'} />
          <Links link={'Settings'} />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
