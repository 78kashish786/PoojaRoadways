import React from 'react'

const SliderDiv = ({image, heading, subheading}) => {
  return (
    <div className=' w-full h-[90vh] '>
      <img className='relative w-[100%] h-[100%] object-cover ' src={image} alt="poster"/>
      <div className='absolute bottom-10 md:bottom-20 p-10 md:p-24 space-y-10 bg-black bg-opacity-40 '  >
        <h1 className='font-bold text-3xl md:text-5xl text-white'>{heading}</h1>
        <hr className='border border-red-500 w-[20%]'/>
        <h1 className='font-light text-white text-xl md:text-2xl flex-wrap'>{subheading}</h1>
        <button className='px-6 py-3 bg-red-500 text-white text-2xl'>ReadMore</button>
      </div>
    </div>
  )
}

export default SliderDiv
