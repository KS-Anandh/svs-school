import React from "react";
import profileImg from "../assets/images/profile.png";
import profileImg1 from "../assets/images/profile.jpg";
import Marquee from "react-fast-marquee";

const FacultyProfiles = () => {
  return (
    <div className="facultyProfiles">
      <div className="title">
        <h2>Our Faculty Profiles</h2>
      </div>
      <div className="profiles">
        <Marquee speed={100} pauseOnHover={true}>
          <div className="profile">
            <img src={profileImg} alt="" />
            <h4>Kantha Rao</h4>
            <p>Telugu Teacher</p>
          </div>
          <div className="profile">
            <img src={profileImg} alt="" />
            <h4>Ramana </h4>
            <p>Maths Teacher</p>
          </div>
          <div className="profile">
            <img src={profileImg} alt="" />
            <h4>Sri Devi</h4>
            <p>Maths Teacher</p>
          </div>
          <div className="profile">
            <img src={profileImg} alt="" />
            <h4>Radha</h4>
            <p>English Teacher</p>
          </div>
          <div className="profile">
            <img src={profileImg} alt="" />
            <h4>Latha</h4>
            <p>Telugu Teacher</p>
          </div>
          <div className="profile">
            <img src={profileImg} alt="" />
            <h4>Valli</h4>
            <p>Science Teacher</p>
          </div>
          <div className="profile">
            <img src={profileImg} alt="" />
            <h4>Jyothi</h4>
            <p>Science Teacher</p>
          </div>
          <div className="profile">
            <img src={profileImg} alt="" />
            <h4>KS Anandh</h4>
            <p>Robotics Trainer</p>
          </div>
          <div className="profile">
            <img src={profileImg} alt="" />
            <h4>Seetharam </h4>
            <p>Physics</p>
          </div>
            <div className="profile">
            <img src={profileImg} alt="" />
            <h4>Tamil Mani </h4>
            <p>Spoken English</p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default FacultyProfiles;
