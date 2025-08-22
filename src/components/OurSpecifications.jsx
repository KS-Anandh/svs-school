import React from "react";
import { FaMedal, FaRobot } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { MdOutlineSportsHandball } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { GiDiscussion } from "react-icons/gi";
import { GiDeliveryDrone } from "react-icons/gi";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurSpecifications = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // 20% visible triggers animation
    triggerOnce: true, // Animate only once
  });

  return (
    <div className="ourSpecifications"  ref={ref}>
      <div className="title" style={{textAlign:"center"}}>
        <h2>
          Discover{" "}
          <span
            style={{ color: "rgba(212, 0, 219, 0.81)", fontWeight: "bolder" }}
          >
            Child Benefits
          </span>{" "}
          of Our School
        </h2>
      </div>
      <div className="specifications">
        <motion.div
       
          className="specification"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration:1 }}
        >
          <div className="img" style={{ background: "green" }}>
            <FaMedal size={60} color="white" />
          </div>
          <div className="info">
            <h4>IIT-JEE Foundation Cource</h4>
            <p>
              Master the logic, crack the code your mind is the real machine.
              IIT-JEE and Olympiads are just your launchpads.
            </p>
          </div>
        </motion.div>

        <motion.div

          className="specification"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="img" style={{ background: "blue" }}>
            <FaRobot size={60} color="white" />
          </div>
          <div className="info">
            <h4>Robotics & AI</h4>
            <p>
              Let’s build robots that shape a smarter tomorrow. Every idea you
              create brings the future closer
            </p>
          </div>
        </motion.div>
        <motion.div
        
          className="specification"
          initial={{ opacity: 0, x:50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="img" style={{ background: "red" }}>
            <SlChemistry size={60} color="white" />
          </div>
          <div className="info">
            <h4>STEAM Learning</h4>
            <p>
              In a world of black and white, STEAM adds color. Create, connect,
              and construct your own future.
            </p>
          </div>
        </motion.div>
        <motion.div
          
          className="specification"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="img" style={{ background: "rgba(100,40,100,150)" }}>
            <GiDiscussion size={60} color="white" />
          </div>
          <div className="info">
            <h4>Spoken English</h4>
            <p>
              Speak with confidence, not perfection. Every word you say takes
              you one step closer.
            </p>
          </div>
        </motion.div>
        <motion.div
          // ref={ref}
          className="specification"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="img" style={{ background: "orange" }}>
            <FaComputer size={60} color="white" />
          </div>
          <div className="info">
            <h4>Computer LAB</h4>
            <p>
              Smart minds need smart tools. Digital learning brings the future
              into today’s classroom
            </p>
          </div>
        </motion.div>
        <motion.div
         
          className="specification"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="img" style={{ background: "rgba(1,190,200,10)" }}>
            <GiDeliveryDrone size={60} color="white" />
          </div>
          <div className="info">
            <h4>Future Skills</h4>
            <p>
              Programming is today’s superpower. Drones, AI, and VR are your
              tools to build tomorrow.
            </p>
          </div>
        </motion.div>
        <motion.div
          
          className="specification"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="img" style={{ background: "black" }}>
            <MdOutlineSportsHandball size={60} color="white" />
          </div>
          <div className="info">
            <h4>Sports</h4>
            <p>
              Champions are made from effort, not excuses. Train hard, play
              harder, win with honor.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurSpecifications;
