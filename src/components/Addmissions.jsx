import React from "react";
import AdmissionForm from "./AdmissionForm";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Addmissions = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // 20% visible triggers animation
    triggerOnce: true, // Animate only once
  });

  return (
    <div className="addmissionsComp">
      <motion.div
        ref={ref}
        className="section title"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2>🎓 Welcome to SVS EM School Admissions</h2>
        <p>
          We are delighted you’re considering [School Name] for your child’s
          education. Our admission process is simple and designed to provide
          equal opportunities for every student.
        </p>
      </motion.div>
      <div className="sectionParent">
        <motion.div
          // ref={ref}
          className="section special-sec"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2>📌 Admission Open For</h2>
          <ul>
            <li>Pre-Primary (Nursery,LKG & UKG)</li>
            <li>Primary (Grades 1–5)</li>
            <li>Middle School (Grades 6–8)</li>
            <li>High School (Grades 9–10)</li>
          </ul>
        </motion.div>

        <motion.div
          // ref={ref}
          className="section special-sec"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2>📄 Apply Now</h2>
          <p>You can either</p>
          <ul>
            <li>
              Visit the school during working hours (Mon–Sat, 9:00 AM to 4:30
              PM), or
            </li>
            <li>Submit Your Application Online Below...👇</li>
          </ul>
        </motion.div>
      </div>
      <div className="section">
        <AdmissionForm />
      </div>
    </div>
  );
};

export default Addmissions;
