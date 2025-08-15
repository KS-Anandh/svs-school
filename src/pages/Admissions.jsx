import React, { useEffect } from 'react'
import Addmissions from '../components/Addmissions';

const Admissions = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Addmissions/>
    </div>
  )
}

export default Admissions