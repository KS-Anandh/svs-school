import React from 'react'
import LongVideoClip from './LongVideoClip'

const LongVideoClips = () => {
  return (
    <div className='LongVideoClips'>
         <LongVideoClip videoUrl={'https://firebasestorage.googleapis.com/v0/b/mychoice-5eae5.appspot.com/o/videos%2FAlcohalDetection_01.mp4?alt=media&token=5cd9f4d7-fbe6-47cf-a9d5-f05c3c7632cd'} thumbnail={'https://firebasestorage.googleapis.com/v0/b/mychoice-5eae5.appspot.com/o/images%2FRed%20Bold%20Finance%20YouTube%20Thumbnail%20(3).png?alt=media&token=e37d8900-c8a2-43b2-bdca-b452a70fab40'}/>
        <LongVideoClip videoUrl={'https://firebasestorage.googleapis.com/v0/b/mychoice-5eae5.appspot.com/o/videos%2FGestureControlRobot.mp4?alt=media&token=9aad55b2-ee10-42bc-8a45-7286b8ffeae1'} thumbnail={'https://firebasestorage.googleapis.com/v0/b/mychoice-5eae5.appspot.com/o/images%2FRed%20Bold%20Finance%20YouTube%20Thumbnail.png?alt=media&token=69b99d87-9828-4e92-a52b-248542745a0f'}/>
        <LongVideoClip videoUrl={'https://firebasestorage.googleapis.com/v0/b/mychoice-5eae5.appspot.com/o/videos%2FRadar.mp4?alt=media&token=e1013621-f621-4524-8e8d-9b280ea776b4'} thumbnail={'https://firebasestorage.googleapis.com/v0/b/mychoice-5eae5.appspot.com/o/images%2FRed%20Bold%20Finance%20YouTube%20Thumbnail%20(4).png?alt=media&token=25536bb7-f2a8-4308-b359-83dc778c7cb5'}/>
    </div>
  )
}

export default LongVideoClips