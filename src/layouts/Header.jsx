import React from "react";

import { SubHeading } from "../components";
import images from "../constants/images";
import "../styles/Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="chase the new flavour" />
      <h1 className="app__header-h1"> the key to find dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti
        eligendi nihil. Quis consectetur magni, vel assumenda quo, vero error,
        deleniti quae ut ipsa debitis obcaecati perspiciatis alias quod
        distinctio.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome img" />
    </div>
  </div>
);

export default Header;
