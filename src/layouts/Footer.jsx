import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../components";
import { images } from "../constants";

import "../styles/Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contant">
        <h1 className="app__footer-headtext headtext__cormorant">Contact Us</h1>
        <p className="p__opensans">1515 N Main St, Monticello, IN 47960-1528</p>
        <p className="p__opensans">+1 574-583-8179</p>
        <p className="p__opensans">+1 574-583-8180</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="gericht" />
        <p className="p__opensans">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iusto
          culpa quam autem natus vel."
        </p>
        <img src={images.spoon} alt="spoon" style={{ marginTop: "1rem" }} />
        <div className="app__footer-links_icon">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext headtext__cormorant">
          Working Hours
        </h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">8:00am - 12:00am</p>
        <p className="p__opensans">Satday-Sunday:</p>
        <p className="p__opensans">7:00am - 11:00am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans"> 2022 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
