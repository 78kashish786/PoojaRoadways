import React from 'react'
import Main from '../Components/Main'
import { TfiEmail } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import FeatureCardComponent from '../Components/FeatureCardComponent';
import MapComponent from '../Components/MapComponent';

const Contact = () => {
  return (
    <Main>
      {/* <div className='md:w-[70%] mx-auto py-24 text-center space-y-10 px-5'>
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
            
              <div>
              <h1 className='text-xl font-semibold '>Mr Vikas Sharma</h1>
              <a >+91 94161 80825, +91 96713 88111 </a>
              </div>
          </div>
        </div>
      </div> */}
      <div className='md:grid grid-cols-2 bg-gray-100   items-center '>
        <div className='px-5 md:px-24 space-y-10 '>
          <h1 className='font-light text-5xl '>Contact <span className='font-md text-red-600'>us</span></h1>
          {/* <p>cnsdcnksdncknsdcknskdncksdn</p> */}
          <div className='md:grid grid-cols-2 gap-3 '>
            <FeatureCardComponent image={'https://cdn-icons-png.flaticon.com/512/4961/4961733.png'} heading={'Proprietor'} para={"Dhimraj sharma"}/>
            <FeatureCardComponent image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYhMpKgwj1rwEjTKeyLP2UW957jU8yckfEw&s'} heading={'Office Address'} para={"POOJA ROADWAYS, Goddown no 7 , Lucky complex,Naraingarh Road vill mandhor amala city 134007"}/>
            <FeatureCardComponent image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFH-5_P3FEF5xKoBSFRyN-HuKAZZhkgfGug&s'} heading={'Mr Vishal Sharma'} para={"+91 94161 80825, 96713 88111"}/>
            <FeatureCardComponent image={'https://cdn-icons-png.freepik.com/512/8743/8743964.png'} heading={'Email Address'} para={"poojaroadways09@gmail.com"}/>
          </div>
        </div>
        {/* Maps */}
        <div className='w-[100%] h-[100%] z-10'>
          <MapComponent/>
        </div>
      </div>
    </Main>
  )
}

export default Contact
