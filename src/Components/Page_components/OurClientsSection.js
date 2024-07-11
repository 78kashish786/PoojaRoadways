import React from 'react'

const OurClientsSection = () => {
  return (
    <div className='text-center py-10'>
          <h1 className='font-md text-5xl'>Our <span className='font-light'>Clients</span></h1>
          <hr className='border-2 border-red-600  w-[as5%] flex justify-center mx-auto mt-5'/>
          <div className=' text-center space-y-3 md:grid grid-cols-4 items-center  w-[70%] mx-auto my-10 gap-10'>
            <img src={require('../../Assets/Abott.png')}/>
            <img src={require('../../Assets/Indo.png')}/>
            <img src={require('../../Assets/Nahar.jpeg')}/>
            <img src={require('../../Assets/RamRatan.png')}/>
            <img src={require('../../Assets/vimal.png')}/>
            <img src={require('../../Assets/varuna.webp')}/>
          </div>
        </div>
  )
}

export default OurClientsSection
