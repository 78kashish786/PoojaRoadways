import React from 'react'

const SliderDiv = ({image, heading, subheading}) => {
  return (
    <div className="h-screen bg-cover bg-center " style={{ backgroundImage: `url(${image})` }}>
      
          <div className="p-5 flex flex-col items-center text-center justify-center space-y-8 h-full bg-black bg-opacity-20">
          <img src={require('../../Assets/logo-white.jpg')}className='h-[100px] '/>
            <h1 className='font-semibold text-3xl md:text-6xl text-white'>{heading}</h1>
         <hr className='border border-red-500 w-[20%]'/>
         <h1 className='font-light text-white text-xl md:text-3xl flex-wrap'>{subheading}</h1>
          </div>
        </div>
    // <div className=' w-full h-[90vh] '>
    //   <img className='relative w-[100%] h-[100%] object-cover ' src={image} alt="poster"/>
    //   <div className='absolute bottom-10 md:bottom-20 p-10 md:p-24 space-y-10 bg-black bg-opacity-20 '  >
    //     <h1 className='font-bold text-3xl md:text-5xl text-white'>{heading}</h1>
    //     <hr className='border border-red-500 w-[20%]'/>
    //     <h1 className='font-light text-white text-xl md:text-2xl flex-wrap'>{subheading}</h1>
    //     <button className='px-6 py-3 bg-red-500 text-white text-2xl'>ReadMore</button>
    //   </div>
    // </div>
    // <>
    // <div>
    //   <div className='w-full h-[95%]'>
    //     <img className='object-cover  w-[100%]' src={require('../../Assets/website poster.png')}/>
    //   </div>
    // </div> 
    // </>
  )
}

export default SliderDiv
