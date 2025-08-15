import React from "react";
import topperImg from '../assets/images/toppers.jpg'
import startImg from '../assets/images/starts.gif'
import TopperCard from "./TopperCard";
import TopperCards from "./TopperCards";


const AcademicAchivements = () => {
  return (
    <div className="academicAchivements">
      <div className="title">
        <div className="titleStars">
          <h1>---</h1>
            <img src={startImg} alt="" width={60} />
            <h2> Our Pride ---</h2>
        </div>
      </div>
      <TopperCards/>
    
      {/* <div className="container">
        <img src={topperImg} alt="" style={{width:"100%"}}/>
      </div> */}
    </div>
  );
};

export default AcademicAchivements;
