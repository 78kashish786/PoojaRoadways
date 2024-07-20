import React, { useEffect } from 'react'
import Main from '../Components/Main'
import { TfiEmail } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import FeatureCardComponent from '../Components/FeatureCardComponent';
import MapComponent from '../Components/MapComponent';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Main>
      <div className=' grid-cols-2 bg-gray-100   items-center '>
        <div className='px-5 md:px-24 space-y-10 py-10 '>
          <h1 className='font-light text-5xl mx-auto text-center '>Contact <span className='font-md text-red-600'>us</span></h1>
          <div className='md:grid grid-cols-4 gap-3 mb-10 '>
            <FeatureCardComponent image={'https://static-00.iconduck.com/assets.00/person-icon-512x512-5lhrcpms.png'} heading={'Proprietor'} para={"Deviram sharma"} para2={"+91 81999 80825"}/>
            <FeatureCardComponent image={'https://indofact.themechampion.com/wp-content/uploads/2021/05/contact-address-icon.png'} heading={'Office Address'} para={"POOJA ROADWAYS, Goddown no 7,Lucky complex,Naraingarh Road vill mandhor amala city 134007"}/>
            <FeatureCardComponent image={'https://indofact.themechampion.com/wp-content/uploads/2021/05/contact-phn-icon.png'} heading={'Mr Vikas Sharma'} para2={"+91 96713 88111"} />
            <FeatureCardComponent image={'https://indofact.themechampion.com/wp-content/uploads/2021/05/contact-msg-icon.png'} heading={'Email Address'} para={"poojaroadways9@gmail.com"}/>
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
