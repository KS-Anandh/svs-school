import React from "react";
import photo from "../assets/images/XC1A9953aa.JPG";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { div } from "framer-motion/client";
const ChairmanMessage = ({aboutRef}) => {

 const { ref, inView } = useInView({
    threshold: 0.3, // 20% visible triggers animation
    triggerOnce: true, // Animate only once
  });

  return (
    <div ref={ref}>
    <div className="ChairmanMessage" ref={aboutRef} >
        <motion.div
                className="photo"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration:1 }}
              >
        <img
          src={photo}
          alt=""
          width={500}
          height={500}
          style={{ borderRadius: "10px" }}
        />
      </motion.div>
       <motion.div
                className="message"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration:1 }}
              >
     
        <h1>Our Chairman Message</h1>
        <h3>Welcome to SVS School !</h3>
        <p>
          <span style={{color:"orangered",fontWeight:"bolder",marginLeft:"100px",fontSize:"18px"}}> At SVS School</span> , we believe that education is the most powerful tool to
          shape the future. Our mission is to nurture young minds with a strong
          foundation in knowledge, values, and creativity, preparing them to
          meet the challenges of a dynamic world.
        </p>
        <p>
          In today’s digital age, the classroom is no longer confined to four
          walls. Through innovative teaching, digital integration, and
          real-world learning, we are committed to creating a generation of
          thinkers, problem-solvers, and leaders. Our curriculum blends
          academics with life skills, sports, personality development, coding,
          robotics, and future-ready technologies like AI and drones.
        </p>
        <p>
          As Chairman, I am proud to lead a dedicated team of educators and
          visionaries who share a passion for shaping the leaders of tomorrow.
          Let us work together to empower every child to dream, discover, and
          achieve.
        </p>
        <h3>Warm regards,</h3>
        <h4>P.V Prathap Kumar</h4>
        <p>Chairman, SVS School</p>
      </motion.div>
    </div>
    </div>
  );
};

export default ChairmanMessage;
