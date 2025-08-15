import React, { useEffect } from 'react'
import AcademicAchivements from '../components/AcademicAchivements'
import FacultyProfiles from '../components/FacultyProfiles'
import Curriculum from '../components/Curriculum'

const Academics = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='academics'>
      <Curriculum/>
    </div>
  )
}

export default Academics