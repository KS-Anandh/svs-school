import React, { useEffect } from 'react'
import ChairmanMessage from '../components/ChairmanMessage'
import ContactUs from '../components/ContactUs'
import FacultyProfiles from '../components/FacultyProfiles';

const AboutUs = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <ChairmanMessage/>
         <FacultyProfiles/>
        <ContactUs/>
        
    </div>
  )
}

export default AboutUs