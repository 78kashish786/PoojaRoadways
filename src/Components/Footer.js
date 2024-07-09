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
        <img className='h-[160px] md:h-[105px]'src={require('../Assets/logo.png')} alt='logo'/>
        <ul className='flex gap-1 '>
            <li className='p-3 bg-[#455168] rounded-sm '><Link to='/'><FaFacebookF size={25} className='text-gray-400'/></Link></li>
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
                <li>Shipping Customer Tools</li>
                <li>Member Directory</li>
                <li>Shipping Calculator</li>
                <li>Resource Center</li>
                <li>Shipping API</li>
                <li>Shipping Tools Provider</li>
            </ul>
        </div>

        <div className='space-y-4 ' >
            <h1 className='text-2xl font-semibold'>Locations</h1>
            <hr className='w-[20%] border border-red-600'/>
            <ul className='space-y-5 text-gray-400 text-sm mt-4'>
                <li>New Delhi</li>
                <li>Pune</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Banglore</li>
                <li>Shipping Tools Provider</li>
            </ul>
        </div>

        <div className='space-y-4 ' >
            <h1 className='text-2xl font-semibold'>Transportation Services</h1>
            <hr className='w-[20%] border border-red-600'/>
            <ul className='space-y-5 text-gray-400 text-sm mt-4'>
                <li>Shipping Customer Tools</li>
                <li>Member Directory</li>
                <li>Shipping Calculator</li>
                <li>Resource Center</li>
                <li>Shipping API</li>
                <li>Shipping Tools Provider</li>
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
