import React from 'react'
import Image from '../assets/images/robotics.png'
const ImageCardClip = ({image}) => {
  return (
    <div className='imageCardClip'>
        <img src={image} alt="" />
    </div>
  )
}

export default ImageCardClip