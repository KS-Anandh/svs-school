import React, { useEffect } from 'react'
import LongVideoClip from '../components/LongVideoClip'
import LongVideoClips from '../components/LongVideoClips'
import GallaryEvent from '../components/GallaryEvent'

const Gallary = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='gallary'>
      <GallaryEvent/>
     
    </div>
  )
}

export default Gallary