import React from "react";
import { SubHeading } from "../components";
import AwardCard from "../components/AwardCard";
import { data, images } from "../constants";
import "../styles/Laurels.css";

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards &amp; Recognition" />
      <h1 className="headtext__cormorant">Our laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award, index) => (
          <AwardCard key={index} {...award} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels img" />
    </div>
  </div>
);

export default Laurels;
