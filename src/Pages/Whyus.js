import React from 'react'
import Main from '../Components/Main'
import FeatureCardComponent from '../Components/FeatureCardComponent'
import { FaAnglesDown } from "react-icons/fa6";
const Whyus = () => {

  const data = [
    {image:'https://www.iconpacks.net/icons/2/free-truck-icon-1756-thumb.png', heading:'Efficient Delivery', para:'Count on us for timely and secure delivery of your goods.'},
    {image:'https://cdn.iconscout.com/icon/free/png-256/free-globe-showing-asia-australia-earth-33895.png', heading:'Nationwide Coverage', para:'Our extensive network ensures your cargo reaches every corner of the country.'},
    {image:'https://png.pngtree.com/png-clipart/20230423/original/pngtree-solution-flat-icon-png-image_9088938.png', heading:'Tailored Solutions:', para:' Customized transportation plans to meet your specific business requirements.'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9a1UYypUDymgrpb8kFHaLRQiyJC6y8-9AVg&s', heading:'Modern Fleet:', para:' State-of-the-art trucks equipped with the latest technology for safe and efficient transport.'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKmsgaRUxQL24sCphteKKfXFMbpneJFeskg&s', heading:'Experienced Drivers', para:' Professional and skilled drivers ensuring the utmost care and punctuality.'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lyKzUg6Fk0wMW_ZQO4Ty0k5XryGobodkDQ&s', heading:'Real-Time Tracking', para:' Stay informed with our advanced tracking system, offering real-time updates on your shipment.'},
    {image:'https://cdn-icons-png.flaticon.com/256/2331/2331709.png', heading:'Competitive Rates', para:' High-quality service at competitive prices, ensuring value for your money.'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjc6klDStit9_knEmHG0qk5ImU4NkpE9z-XA&s', heading:'24/7 Support', para:' Dedicated customer service team available around the clock to assist you.'},
    {image:'https://t3.ftcdn.net/jpg/05/78/18/54/360_F_578185479_nTgqW9Xmzb4hR9vTm4uIW8knKSsdTPdw.jpg', heading:'Safety First', para:' Comprehensive safety protocols to protect your goods during transit.'},
    {image:'https://w7.pngwing.com/pngs/183/217/png-transparent-a-1-hesperia-recycling-co-inc-computer-icons-recycling-symbol-eco-friendly-miscellaneous-angle-leaf.png', heading:'Eco-Friendly Options', para:' Committed to reducing our carbon footprint with environmentally friendly transportation solutions.'},
    {image:'https://cdn-icons-png.flaticon.com/512/3588/3588110.png', heading:'Flexible Scheduling', para:' We work around your schedule to provide the most convenient service possible.'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99XLgxCbS9nPfJ8H13gJ7nM2uc04VV4lSew&s', heading:'Innovative Technology', para:'Leveraging the latest in logistics technology to streamline operations and enhance efficiency.'},

  ]
  return (
    <Main>
      <div className='px-5  md:px-24 mx-auto text-center bg-gray-100'>
        <div className='py-10 space-y-5 text-center'>
          <h1 className='text-xl font-semibold text-red-600'>Why us?</h1>
          <h2 className='text-3xl md:text-6xl font-light'>Reliable Trucking Services<br/>for Your Business Needs</h2>
          <h3 className='text-sm md:text-lg font-md text-gray-700'>All the features need for your business</h3>
          {/* <FaAnglesDown size={30} className='text-red-600 animate-bounce mx-auto z-10'/> */}
        </div>
        <div className='md:grid grid-cols-3 gap-10 pb-5'>
          {data&&data.map((item,index)=>(
             <FeatureCardComponent image={item.image} heading={item.heading} para={item.para}/>
        
          ))}
         </div>
      </div>
    </Main>
  )
}

export default Whyus

