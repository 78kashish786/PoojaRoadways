import React from 'react'

const Benefit = () => {
  return (
    <div className='md:px-24 px-5 py-3 md:py-10 my-10   mx-auto  md:grid grid-cols-2 justify-center items-center bg-white'>
      <div className='flex flex-col text-left space-y-8 w-[90$] pl-10'>
        <h1 className='text-gray-700 font-semibold  text-3xl  md:text-5xl text-left'>Benefits for using our<br/> services</h1>
        <ul className='list-disc space-y-5 text-xl  font-[400]'>
            
        <li className='text-red-600'><div className='text-gray-500'>NationWide Coverage
                </div></li>
                <li className='text-red-600'><div className='text-gray-500'>Real Time Tracking
                </div></li>
                <li className='text-red-600'><div className='text-gray-500'>Competitive Rates
                </div></li>   
                <li className='text-red-600'><div className='text-gray-500'>Experienced Drivers
                </div></li>
                <li className='text-red-600'><div className='text-gray-500'>Eco-Friendly Options
                </div></li>
                <li className='text-red-600'><div className='text-gray-500'>Safety First 
                </div></li>
            
        </ul>
      </div>
      <div className='flex justify-center items-center'>
        <img className='h-[100%] 'src={'https://img.freepik.com/premium-vector/detailed-map-india_97886-14458.jpg?w=740'} alt='india'/>
      </div>
    </div>
  )
}

export default Benefit
