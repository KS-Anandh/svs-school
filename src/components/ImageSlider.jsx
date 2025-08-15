import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useRef,useEffect } from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function ImageSlider({contactUsRef}) {


const slides = [
  {
    image: "https://png.pngtree.com/thumb_back/fh260/background/20240716/pngtree-yellow-robotic-arms-installing-metal-plate-in-industry-image_15909464.jpg",
    title: 'Robotics',
    description: 'Welcome to Robotics for Future',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/mychoice-5eae5.appspot.com/o/images%2F8957993.jpg?alt=media&token=a7d87fdd-cee7-4628-8df2-2a46deb2de12',
    title: 'Programming',
    description: 'Communicate with machine',
  },
  {
    image: 'https://cdn.wallpapersafari.com/48/34/6HFZhw.jpg',
    title: 'IIT-JEE Foundation',
    description: 'Crack Compitative Test With US',
  },
]

     const scrollToContactUs = () => {
    contactUsRef.current.scrollIntoView({ behavior: "smooth" });
  };


  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  })

  // Auto-slide logic
  useEffect(() => {
    if (!slider) return
    timer.current = setInterval(() => {
      slider.current?.next()
    }, 7000)
    return () => {
      clearInterval(timer.current)
    }
  }, [slider])

  return (
 <div ref={sliderRef} className="keen-slider" >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="keen-slider__slide slide"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <div className='buttons'>
                 <button >Learn More <FaArrowAltCircleRight /></button> 
                 <button className='btn2' onClick={(()=>scrollToContactUs())}> Contact Us <FaArrowAltCircleRight /></button>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  )

}
