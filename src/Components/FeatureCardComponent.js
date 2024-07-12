import React from 'react'

const FeatureCardComponent = ( {image,heading, para}) => {
  return (
    <div className='p-4 bg-white text-left flex flex-col justify-between items-start h-[200px] rounded-sm shadow-sm my-3 md:my-0 '>
      <img className='w-[50px]' src={image} alt='logo images for website'/>
      <div className='space-y-1'>
      <h1 className='text-xl font-semibold '>{heading}</h1>
      <p className='text-gray-700 font-md '>{para}</p>
      </div>
    </div>
  )
}

export default FeatureCardComponent
