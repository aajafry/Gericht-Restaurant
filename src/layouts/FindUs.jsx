import React from "react";
import { SubHeading } from "../components";
import { images } from "../constants";
import "../styles/FindUs.css";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contract">
    <div className="app__wrapper_info">
      <SubHeading title="contact" />
      <h1 className="headtext__cormorant"> find us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas
          a quia nisi magni autem.
        </p>
        <p
          className="p__cormorant"
          style={{ color: "var(--color-golden)", margin: "2rem 0" }}
        >
          opening hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        {" "}
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
