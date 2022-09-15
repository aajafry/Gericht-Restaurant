import React from "react";
import { MenuItem, SubHeading } from "../components";
import { data, images } from "../constants";

import "../styles/SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">wine &amp; Beer </p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            // <MenuItem key={index}  title={wine.title} price={wine.price} tags={wine.title} />
            <MenuItem key={index} {...wine} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="spacial menu" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading"> cocktel </p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktel, index) => (
            //   <MenuItem key={index}  title={cocktel.title} price={cocktel.price} tags={cocktel.title} />
            <MenuItem key={index} {...cocktel} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "1rem" }}>
      <button type="button" className="custom__button">
        {" "}
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
