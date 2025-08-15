import React, { useState } from "react";
import schoolLogo from "../assets/images/schoolLogo.png";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaHeadphones,
  FaSearch,
} from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import { RiInstagramFill } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";
import { MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";

const Navigation = ({
  navigationLocation,
  setNavigationLocation,
  aboutRef,
}) => {
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [openNav, setOpenNav] = useState(false);

  console.log(navigationLocation);
  return (
    <div className="nav">
      <div className="navigation-section-a">
        <div className="location">
          <FaLocationDot />
          <p>Amadalavalasa, Srikakulam, AP</p>
        </div>
        <div className="social-media-icons">
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <RiInstagramFill />
            </li>
          </ul>
        </div>
      </div>
      <div className="navivation-section-b">
        <div className="logo-part">
          <img src={schoolLogo} alt="svs school amadalavalasa logo" />
          <div className="logo-info">
            <h2>SVS EM School</h2>
            <p>Amadalavalasa</p>
          </div>
        </div>
        <div className="info-section">
          <div className="phone-part child">
            <FaHeadphones size={27} color="rgba(0, 83, 69, 1)" />
            <div>
              <h3>Call For Enquiry</h3>
              <p>+91 9440162221</p>
            </div>
          </div>
          <div className="mail-part child">
            <IoIosMailOpen size={27} color="rgba(0, 83, 69, 1)" />
            <div>
              <h3>Connect with Us</h3>
              <p>svsschool@gmail.com</p>
            </div>
          </div>

          <div className="timings-part child">
            <MdTimer size={27} color="rgba(0, 83, 69, 1)" />
            <div>
              <h3>Opening hour</h3>
              <p>Mon-Sun:09:00-16:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-navigation">
        <p>Menu</p>
        <div
          onClick={() => {
            setOpenNav(!openNav);
          }}
        >
          {openNav ? (
            <IoCloseCircleSharp size={35} />
          ) : (
            <CgDetailsMore size={35} />
          )}
        </div>
      </div>
      <div
        className="drop-down"
        style={{ display: openNav ? "block" : "none" }}
      >
        <ul>
         <Link to={'/'} onClick={()=>setOpenNav(false)}><li>Home</li></Link> 
          <Link to={'aboutUs'} onClick={()=>setOpenNav(false)}><li>About Us</li></Link>
          <Link to={'academics'} onClick={()=>setOpenNav(false)}><li>Academics</li></Link>
          <Link to={'events'} onClick={()=>setOpenNav(false)}><li>Events</li></Link>
          <Link to={'admisions'} onClick={()=>setOpenNav(false)}><li>Admisions</li></Link>
        </ul>
      </div>
      <div className="navication-section-c">
        <ul className="mainNav">
          <Link to={"/"}>
            <li
              onClick={() => setNavigationLocation(0)}
              style={{
                borderBottom:
                  navigationLocation == 0 ? "5px solid rgb(255, 255, 255)" : "",
              }}
            >
              Home
            </li>
          </Link>
        
            <Link to={"/aboutUs"}>
              <li
                onClick={() => {
                  setNavigationLocation(2);
                }}
                style={{
                  borderBottom:
                    navigationLocation == 2
                      ? "5px solid rgb(255, 255, 255)"
                      : "",
                }}
              >
                {" "}
                About Us{" "}
              </li>
            </Link>
         
          <Link to={"/academics"}>
            <li
              onClick={() => setNavigationLocation(1)}
              style={{
                borderBottom:
                  navigationLocation == 1 ? "5px solid rgb(255, 255, 255)" : "",
              }}
            >
              Curriculam
            </li>
          </Link>
          <Link to={"/events"}>
            <li
              onClick={() => setNavigationLocation(3)}
              style={{
                borderBottom:
                  navigationLocation == 3 ? "5px solid rgb(255, 255, 255)" : "",
              }}
            >
              Events
            </li>
          </Link>
          <Link to={"/admisions"}>
            {" "}
            <li
              onClick={() => setNavigationLocation(4)}
              style={{
                borderBottom:
                  navigationLocation == 4 ? "5px solid rgb(255, 255, 255)" : "",
              }}
            >
              Admisions
            </li>
          </Link>
        </ul>
        <div className="search">
          <input type="input" placeholder="Search here..." />
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
