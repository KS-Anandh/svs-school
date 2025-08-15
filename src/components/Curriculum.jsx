import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Curriculam = () => {

    const { ref, inView } = useInView({
    threshold: 0, 
    triggerOnce: true, 
  });

  return (
    <div className="curriculam">
      <h2>Our Complete Curriculum – Academic Excellence Meets Future Skills</h2>
     <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
      <p>
       <span style={{marginLeft:"100px"}}>At</span>  <strong style={{color:"orangered",fontSize:"18px"}}>SVS EM School </strong>, we believe in nurturing well-rounded individuals by
        providing a curriculum that balances strong academic foundations with essential
        21st-century skills. Our school follows a structured academic program aligned with
        national education standards, while also integrating cutting-edge skill-based learning
        in collaboration with <strong>ExpressSpark</strong> – a pioneer in Robotics, Coding,
        Automation, IoT, and AI education.
      </p>
</motion.div>
     <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
      <p>
        The academic curriculum covers all core subjects including English, Mathematics,
        Science, Social Science, and Languages such as Hindi and Tamil. It is designed to
        encourage conceptual clarity, analytical thinking, and a love for learning. From
        foundational literacy and numeracy in early grades to advanced topics in high school,
        our academic program supports every child’s intellectual growth with a focus on
        real-life understanding and continuous assessment.
      </p>
</motion.div>
  <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
      <p>
        In addition to academic excellence, our school stands out by offering skill-based,
        hands-on learning that empowers students to become creators, innovators, and
        problem-solvers. Through our collaboration with <strong>ExpressSpark</strong>, students
        engage in a structured program of STEM, Robotics, IoT, Drone Technology, Web Design,
        Artificial Intelligence, and AR/VR — taught through fun, project-based sessions.
      </p>
</motion.div>
      <h3>✨ What Makes Our Curriculum Unique</h3>

      <ul>
        <li>
          📚 <strong>Academic Strength:</strong> Strong subject-wise learning as per grade level
          (CBSE/State Board)
        </li>
        <li>
          🔬 <strong>Practical Learning:</strong> Real-world science experiments, group
          activities, and concept labs
        </li>
        <li className="futureTechnology">
          <h3>💡 Future Technology Courses by ExpressSpark:</h3>
          <ul>
            <li>Robotics from basic to advanced levels</li>
            <li>Visual coding (Scratch), Arduino programming, and ESP32 microcontroller usage</li>
            <li>IoT applications and sensor-based projects with mobile control</li>
            <li>AI and ML concepts with Python and computer vision</li>
            <li>Drone assembling, safety, and operation workshops</li>
            <li>Website design with HTML, CSS, and React for senior students</li>
          </ul>
        </li>
        <li>
          🌍 <strong>Project-Based Learning:</strong> Students build devices, apps, and automation
          systems
        </li>
        <li>
          🧠 <strong>Critical Thinking & Innovation:</strong> Encouraged through tech fests,
          competitions, and exhibitions
        </li>
        <li>
          🗣️ <strong>Personality Development:</strong> Communication, spoken English, leadership,
          and confidence-building activities
        </li>
      </ul>

      <p className="lastParaCurriculam">
       <span style={{marginLeft:"60px"}}>From</span>  Grade 1 onwards, students are introduced to creative STEM projects, while middle
        schoolers begin to code, explore electronics, and build basic robotic systems. In higher
        grades, students dive into advanced technologies such as AI, automation, drones, and web
        development — preparing them for future careers in science, engineering, and digital
        industries.
      </p>

      <p>
        We aim to create a learning experience where traditional education meets future
        innovation, helping our students not only score well in academics but also develop the
        skills required in the rapidly evolving world.
      </p>
    </div>
  );
};

export default Curriculam;
