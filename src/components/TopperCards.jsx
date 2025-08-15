import React from "react";
import TopperCard from "./TopperCard";
import std1 from "../assets/topperImages/1.jpg";
import std2 from "../assets/topperImages/2.jpg";
import std3 from "../assets/topperImages/3.jpg";
import std4 from "../assets/topperImages/4.jpg";
import std5 from "../assets/topperImages/5.jpg";
import std6 from "../assets/topperImages/6.jpg";
import std7 from "../assets/topperImages/7.jpg";
import std8 from "../assets/topperImages/8.jpg";
import std9 from "../assets/topperImages/9.jpg";
import std10 from "../assets/topperImages/10.jpg";
import std11 from "../assets/topperImages/11.jpg";
import std12 from "../assets/topperImages/12.jpg";
import std13 from "../assets/topperImages/13.jpg";



const TopperCards = () => {
  return (
    <div className="topperCards">
      <TopperCard image={std1} />
      <TopperCard image={std2} />
      <TopperCard image={std3} />
      <TopperCard image={std4} />
      <TopperCard image={std5} />
      <TopperCard image={std6} />
      <TopperCard image={std7} />
      <TopperCard image={std8} />
      <TopperCard image={std9} />
      <TopperCard image={std10} />
      <TopperCard image={std11} />
      <TopperCard image={std12} />
      <TopperCard image={std13} />

     
    
      
    </div>
  );
};

export default TopperCards;
