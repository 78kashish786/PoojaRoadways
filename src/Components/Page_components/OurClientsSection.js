import React from 'react'

const OurClientsSection = () => {
  return (
    <div className='text-center py-10'>
          <h1 className='font-md text-5xl'>Our <span className='font-light'>Clients</span></h1>
          <hr className='border-2 border-red-600  w-[5%] flex justify-center mx-auto mt-5'/>
          <div className=' text-center space-y-3 md:grid grid-cols-4 items-center  w-[70%] mx-auto my-10 gap-10'>
            <img src={require('../../Assets/Abott.png')}/>
            <img src={require('../../Assets/Gautam.png')}/>
            <img src={require('../../Assets/Nahar.jpeg')}/>
            <img src={require('../../Assets/RamRatan.png')}/>
            <img src={require('../../Assets/vimal.png')}/>
            <img src={require('../../Assets/Lupin.jpeg')}/>
            <img src={require('../../Assets/US.jpeg')}/>
            <img src={require('../../Assets/relianc3e.png')}/>

          </div>
        </div>
  )
}

export default OurClientsSection
