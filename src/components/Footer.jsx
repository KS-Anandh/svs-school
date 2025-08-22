import React from 'react'
import { FaFacebook,FaTwitter ,FaYoutube ,FaHeadphones,FaSearch   } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import startImg from '../assets/images/starts.gif'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='details'>
            <div className="svsSchoolStart">
            <img src={startImg} alt="" />
            <h3 ><span style={{color:"yellow",fontWeight:"bold",fontSize:"25px"}}> SVS School </span>Recognized By AP </h3>
            </div>
            <h4><span style={{color:"orangered",fontWeight:"bolder"}}> Education</span> is the most powerful tool to shape the future.</h4>
            <h3>REGISTERED ADDRESS</h3>
            <h4>Amadalavalasa, Srikakulam, Andhra Pradesh, 532001</h4>
            <ul>
                <li><FaFacebook size={20} /></li>
                <li><FaTwitter size={20} /></li>
                <li><FaYoutube size={20} /></li>
                <li><RiInstagramFill size={20} /></li>
            </ul>
        </div>
        <div className='products'>
            <h3>OUR PROGRAMS</h3>
            <p>SVS PRE-SCHOOL</p>
            <p>SVS PRIMARY SCHOOL</p>
            <p>SVS HIGH SCHOOL</p>
        </div>
        <div className='company'>
            <h3>SCHOOL</h3>
            <p>About</p>
            <p>Careers <span style={{background:"rgba(20,150,80,100)",color:"white",padding:"5px 0px 5px 10px",fontSize:"12px",borderRadius:"7px",marginLeft:"10px"}}> We are Hiring<img src={startImg} width={15} alt="" />  </span></p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Disclaimer</p>
        </div>
        <div className='contact'>
             <h3>SUPPORT</h3>
             <p>SVS Support</p>
             <p>svsschool@gmail.com</p>
             <p>+91 9440162221</p>
        </div>
    </div>
  )
}

export default Footer