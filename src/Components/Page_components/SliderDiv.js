import React from 'react'
    import Image1 from '../../Assets/website image.jpg'
    import Image2 from '../../Assets/website poster.png'
    import Image3 from '../../Assets/website file photo edit.png'
const SliderDiv = ({image, heading, subheading}) => {
  return (
    <div className="h-screen bg-cover bg-center object-bottom " style={{ backgroundImage: `url('${image}')`, objectPosition:'bottom'}}>
      
          <div className="p-5 flex flex-col items-center text-center justify-center space-y-8 h-full bg-black bg-opacity-20">
          <img src={require('../../Assets/logo-white.jpg')}className='h-[100px] '/>
            <h1 className='font-semibold text-3xl md:text-6xl text-white'>{heading}</h1>
         <hr className='border border-red-500 w-[20%]'/>
         <h1 className='font-light text-white text-xl md:text-3xl flex-wrap'>{subheading}</h1>
          </div>
        </div>
  )
}

export default SliderDiv
