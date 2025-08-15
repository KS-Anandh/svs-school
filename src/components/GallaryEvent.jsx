import React from "react";
import LongVideoClip from "./LongVideoClip";
import Image from '../assets/images/robotics.png'
import ImageCardClip from "./ImageCardClip";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GallaryEvent = () => {

     const { ref, inView } = useInView({
        threshold: 0.4, // 20% visible triggers animation
        triggerOnce: true, // Animate only once
      });

  return (
    <div className="GallaryEvent" ref={ref}>
         <motion.div
                        className="eventInfo"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration:1 }}
                      >
        <h2>Project Expo By ExpressSpark </h2>
        <p>
          <span style={{marginLeft:"100px"}}> </span>While automation and robotics often go hand in hand, there are key
          differences between them. The main distinction lies in the focus and
          functionality of each one. Robotics focuses on the design,
          construction and programming of specific robots to perform particular
          tasks. Robots can be mobile or static, and their design adapts to the
          needs of the task they intend to execute. For example, a manipulator
          robot is designed to assemble components on a production line, while a
          domestic robot vacuum floors or mows lawns. On the other hand,
          automation refers to the process of automating tasks using technology,
          which can include robots but is not limited to them. Automation can
          involve the programming of computer systems, specific software for the
          control of industrial processes, the implementation of building
          control systems and much more.
        </p>
    </motion.div>
      <motion.div
                         className="evenVideos"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration:1 }}
                      >
      
        <LongVideoClip videoUrl={'https://firebasestorage.googleapis.com/v0/b/mychoice-5eae5.appspot.com/o/videos%2FGestureControlRobot.mp4?alt=media&token=9aad55b2-ee10-42bc-8a45-7286b8ffeae1'} thumbnail={'https://firebasestorage.googleapis.com/v0/b/mychoice-5eae5.appspot.com/o/images%2FRed%20Bold%20Finance%20YouTube%20Thumbnail.png?alt=media&token=69b99d87-9828-4e92-a52b-248542745a0f'}/>
        <LongVideoClip videoUrl={'https://firebasestorage.googleapis.com/v0/b/mychoice-5eae5.appspot.com/o/videos%2FRadar.mp4?alt=media&token=e1013621-f621-4524-8e8d-9b280ea776b4'} thumbnail={'https://firebasestorage.googleapis.com/v0/b/mychoice-5eae5.appspot.com/o/images%2FRed%20Bold%20Finance%20YouTube%20Thumbnail%20(4).png?alt=media&token=25536bb7-f2a8-4308-b359-83dc778c7cb5'}/>
        <ImageCardClip image={Image}/>
        <div className="moreVideos">
            <h3>More Videos</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default GallaryEvent;
