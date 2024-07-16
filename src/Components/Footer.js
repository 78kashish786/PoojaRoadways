import React from 'react'
import { LuCopyright } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className=''>
      <div className='bg-[#354256] flex flex-wrap  justify-center md:justify-between items-center px-5 md:px-[200px]'>
        <img className='h-[160px] md:h-[105px]'src={require('../Assets/logo-white.jpg')} alt='logo'/>
        <ul className='flex gap-1 '>
            <li className='p-3 bg-[#455168] rounded-sm '><Link to='https://www.facebook.com/people/POOJA-ROADWAYS/100082203461791/?mibextid=ZbWKwL'><FaFacebookF size={25} className='text-gray-400'/></Link></li>

             <li className='p-3 bg-[#455168] rounded-sm '><Link to='/'><FaTwitter size={25} className='text-gray-400'/></Link></li>
            <li className='p-3 bg-[#455168] rounded-sm '><Link to='/'><FaLinkedin size={25} className='text-gray-400'/></Link></li>
            <li className='p-3 bg-[#455168] rounded-sm '><Link to='/'><FaGooglePlusG size={25} className='text-gray-400'/></Link></li>
            <li className='p-3 bg-[#455168] rounded-sm '><Link to='/'><FaVimeoV size={25} className='text-gray-400'/></Link></li> 
        </ul>
      </div>
      {/* Link */}
      <div className='md:flex gap-5 justify-between items-center px-5 space-y-5 md:px-[200px] py-10 bg-[#2B374a] text-white'>
        <div className='space-y-4 ' >
            <h1 className='text-2xl font-semibold'>Transportation Services</h1>
            <hr className='w-[20%] border border-red-600'/>
            <ul className='space-y-5 text-gray-400 text-sm mt-4'>
                <li>All Type of Containers</li>
                <li>Closed Containers</li>
                <li>Single XL</li>
                <li>Multi XL</li>
                <li>32,24 feet</li>
                <li>22,19 feet</li>
            </ul>
        </div>

        <div className='space-y-4 ' >
            <h1 className='text-2xl font-semibold'>Locations</h1>
            <hr className='w-[20%] border border-red-600'/>
            <ul className='space-y-5 text-gray-400 text-sm mt-4'>
                <li>kala Amb</li>
                <li>Ludhiana</li>
                <li>Mumbai</li>
                <li>Vapi</li>
                <li>Surat</li>
                <li>Medak</li>
            </ul>
        </div>

        <div className='space-y-4 ' >
            <h1 className='text-2xl font-semibold'>Contact us </h1>
            <hr className='w-[20%] border border-red-600'/>
            <ul className='space-y-5 text-gray-400 text-sm mt-4'>
                <li>
                  <h1>Deviram Sharma (Proprietor)</h1>
                  <h2>+91 94161 80825</h2>
                </li>
                <li>
                  <h1>Mr Vikas Sharma</h1>
                  <h2>+91 96713 88111</h2>
                </li>
                <li>
                  <h1>Email Address</h1>
                  <h2>poojaroadways9@gmail.com</h2>
                </li>
            </ul>
        </div>
      </div>

{/* Copyright */}
<div className='text-center md:py-10 py-3 px-24 bg-[#263143]'>
    <h1 className='flex gap-1 md:text-[12px] text-[10px] justify-center items-center font-md text-gray-400 text-center'><LuCopyright size={15}/> copyright Pooja Roadways</h1>
</div>

    </div>
  )
}

export default Footer
