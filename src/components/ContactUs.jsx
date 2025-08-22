import React from "react";
import GoogleMap from "./GoogleMap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUs = ({ contactUsRef }) => {
  const { ref, inView } = useInView({
    threshold: 0.3, 
    triggerOnce: true, 
  });

  return (
    <div className="contactUs" ref={contactUsRef}>
      <motion.div
        className="map"
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <GoogleMap />
      </motion.div>
      <div className="contactAddress">
        <h1>Contact Us</h1>

        <motion.div
          className="SchoolAddress"
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2>School Address</h2>
          <h3>SVS EM School Amadalavalasa</h3>
          <h3>Boddepalli peta, Srikakulam</h3>
          <h3>Andhra Pradesh, 517401</h3>
          <h3>India</h3>
        </motion.div>

        <motion.div
          className="phoneAndMail"
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2>Contact Details</h2>
          <h3> Admissions :+91 9440162221</h3>
          <h3>General Inquiries : info@svsamadalavalasa.com</h3>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
