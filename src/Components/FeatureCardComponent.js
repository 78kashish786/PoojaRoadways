import React, { useEffect } from 'react'
import AOS  from 'aos';
import "aos/dist/aos.css";
const FeatureCardComponent = ( {image,heading, para, para2}) => {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div data-aos="fade-down"data-aos-delay='300' className='p-4 bg-white text-left flex flex-col justify-between items-start h-[230px] rounded-sm shadow-sm my-3 md:my-0 '>
      <img className='w-[50px]' src={image} alt='logo images for website'/>
      <div className='space-y-1'>
      <h1 className='text-2xl font-semibold '>{heading}</h1>
      <p className='text-gray-700 font-md text-xl '>{para}</p>
      <p className='text-gray-700 font-md text-xl'>{para2}</p>

      </div>
    </div>
  )
}

export default FeatureCardComponent
