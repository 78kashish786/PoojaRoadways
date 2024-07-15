import React from 'react'

const AboutSectionDivComponents = ({image, heading, subheading, para ,}) => {
  return (
    <div className='md:px-24 px-5 md:grid grid-cols-2 gap-5 items-center justify-between py-8 bg-gray-100 '>
        <div className='space-y-5 '>
            <h6 className='text-xl font-semibold text-red-600  '>{heading}</h6>
            <h4 className='text-5xl font-light '>{subheading}</h4>
            <p align='justify' className='text-[16px] text-gray-700'>{para}</p>
        </div>
        <div className='flex justify-center items-center '>
            <img className='rounded-sm' src={image} alt='image'/>
        </div>
    </div>
  )
}

export default AboutSectionDivComponents
