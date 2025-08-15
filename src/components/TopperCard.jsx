import React from "react";

import std1 from "../assets/images/KS Anandh.jpg";
import std2 from "../assets/images/student2.png";

const TopperCard = ({image}) => {
  return (
    <div className="topperCard">
      <img src={image} alt="" />
    </div>
  );
};

export default TopperCard;
