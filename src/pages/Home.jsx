import React, { useEffect } from 'react'
import Navigation from '../components/Navigation'
import ImageSlider from '../components/ImageSlider'
import OurSpecifications from '../components/OurSpecifications'
import ChairmanMessage from '../components/ChairmanMessage'
import Footer from '../components/Footer'
import AdmissionsNow from '../components/AdmissionsNow'
import GoogleMap from '../components/GoogleMap'
import ContactUs from '../components/ContactUs'
import FacultyProfiles from '../components/FacultyProfiles'
import AcademicAchivements from '../components/AcademicAchivements'

const Home = ({aboutRef,contactUsRef}) => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='homePage'>
      <AdmissionsNow/>
        <ImageSlider contactUsRef={contactUsRef}/>
         
        <OurSpecifications/>
      
        <AcademicAchivements/>
          <ChairmanMessage aboutRef={aboutRef}/>  
         <ContactUs contactUsRef={contactUsRef}/>   
    </div>
  )
}

export default Home