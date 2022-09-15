import React from "react";

import "../styles/AwardCard.css";

export default function AwardCard({ ...rest }) {
  const { imgUrl, title, subtitle } = rest;
  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt={title} />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  );
}
