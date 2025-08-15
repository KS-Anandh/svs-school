import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AdmissionForm = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, 
    triggerOnce: true, 
  });

  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    grade: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    alert("Application submitted successfully!");
    setFormData({
      studentName: "",
      dob: "",
      grade: "",
      parentName: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="admission-form">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2>Admission Application Form</h2>
      </motion.div>
      <div className="container">
        <motion.div
          ref={ref}
          className="section"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <label>Student Name*</label>
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
          />

          <label>Date of Birth*</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          <label>Grade Applying For*</label>
          <select
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value="">Select Grade</option>
            <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="1">Grade 6</option>
            <option value="2">Grade 7</option>
            <option value="3">Grade 8</option>
            <option value="4">Grade 9</option>
            <option value="5">Grade 10</option>
            {/* Add more as needed */}
          </select>

          <label>Parent Name*</label>
          <input
            type="text"
            placeholder="Date of Birth"
            name="Parent Name"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.div
          ref={ref}
          className="section"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <label>Contact Number*</label>
          <input
            placeholder="Contact Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Email Address</label>
          <input
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Address*</label>
          <textarea
            placeholder="Complete Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>

          <button type="submit">Submit Application</button>
        </motion.div>
      </div>
    </form>
  );
};

export default AdmissionForm;
