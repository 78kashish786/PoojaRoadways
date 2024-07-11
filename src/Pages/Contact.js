import React from 'react'
import Main from '../Components/Main'
import { TfiEmail } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Main>
      <div className='md:w-[70%] mx-auto py-24 text-center space-y-10 px-5'>
        <h1 className='font-semibold text-6xl '>Contact us </h1>
        <p>Conatct us for more information</p>
        <div className='flex flex-col  md:grid grid-cols-3 gap-5'>
          <div className=' bg-red-400 text-white border border-gray-100 shadow-sm p-5 rounded-xl h-[200px]  flex flex-col justify-between items-start'>
            <TfiEmail size={35}/>
            <div className='text-left'>
              <h1 className='text-xl font-semibold '>Email</h1>
              <a href="mailto:poojaroadways9@gmail.com">Poojaroadways9@gmail.com</a>
            </div>
          </div>

          <div className=' bg-red-400 text-white border border-gray-100 shadow-sm p-5 rounded-xl h-[200px]  flex flex-col justify-between items-start'>
            <FaUserAlt size={35}/>
            <div className='text-left'>
              <h1 className='text-xl font-semibold '>Proprieter</h1>
              <a >Mr Deviram Sharma</a>
            </div>
          </div>

          <div className=' bg-red-400 text-white border border-gray-100 shadow-sm p-5 rounded-xl h-[200px]  flex flex-col justify-between items-start'>
            <FaPhoneAlt size={35}/>
            <div className='text-left flex  gap-3'>
              <div>
              <h1 className='text-xl font-semibold '>Mr Vikas Sharma</h1>
              <a >+91 94161 80825, </a>
              </div>
              <div>
                <h1 className='text-xl font-semibold '>Mr Vishnu</h1>
              <a >+91 96713 88111</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Contact
