import React from 'react'

const Benefit = () => {
  return (
    <div className='md:px-24 px-5 py-3 md:py-10   mx-auto  md:grid grid-cols-2 justify-center items-center bg-gray-100'>
      <div className='flex flex-col text-left space-y-8 w-[90$] pl-10'>
        <h1 className='text-gray-700 font-semibold  text-2xl  md:text-4xl text-left'>Benefits for using our services</h1>
        <ul className='list-disc space-y-5 text-sm  font-[400]'>
            
        <li className='text-red-600'><div className='text-gray-500'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt.
                </div></li>
                <li className='text-red-600'><div className='text-gray-500'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt.
                </div></li>
                <li className='text-red-600'><div className='text-gray-500'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt.
                </div></li>
            
        </ul>
      </div>
      <div className='flex justify-center items-center'>
        <img className='h-[100%] 'src={require('../../Assets/group.png')} alt='india'/>
      </div>
    </div>
  )
}

export default Benefit
