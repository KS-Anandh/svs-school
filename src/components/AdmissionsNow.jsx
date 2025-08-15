import React from 'react'
import nowImg from '../assets/images/new.gif'
import Marquee from 'react-fast-marquee';
const AdmissionsNow = () => {
  return (
    <div className='AdmissionsNow'>
            
         <Marquee pauseOnHover={true}>
            <div className='admScrolling'>
             <img src={nowImg} alt="" width={70}/>
            <h3>Now Admissons Are Open For 2025</h3>
            </div>
             <span style={{margin:"0px 50px"}}> </span>
             <div className='admScrolling'>
             {/* <img src={nowImg} alt="" width={70}/> */}
            <h3>Limited Seats (Max 30)</h3>
            </div>
            <span style={{margin:"0px 50px"}}> </span>
             <div className='admScrolling'>
             <img src={nowImg} alt="" width={70}/>
            <h3>Implemented Robotics Lab </h3>
            </div>
              <span style={{margin:"0px 50px"}}> </span>
             <div className='admScrolling'>
             {/* <img src={nowImg} alt="" width={70}/> */}
            <h3>21st century Skills</h3>
            </div>
            <span style={{margin:"0px 50px"}}> </span>
             <div className='admScrolling'>
             {/* <img src={nowImg} alt="" width={70}/> */}
            <h3>STEAM Education</h3>
             <span style={{margin:"0px 50px"}}> </span>
            </div>
          </Marquee>

    </div>
  )
}

export default AdmissionsNow