import React from 'react'
import Main from '../Components/Main'
import OurClientsSection from '../Components/Page_components/OurClientsSection'

const OurClients = () => {
  return (
    <Main >
        <div className='md:grid grid-cols-2 items-center bg-red-500'>
        <div className='px-5 py-5 md:py-0 md:px-24 '>
          <div className='space-y-10 text-white'>
            <h1 className='text-6xl font-semibold text-white'>We Love Our Client And<br/><h2 className='my-2 font-light text-5xl '>They Love Us too</h2></h1>
            <hr className='w-[15%] border-2 border-red-600'/>
            <p align='justify' className='w-[100%] font-light'>
            At Pooja Roadways, our clients love us for our unwavering commitment to reliability and excellence in logistics. With years of experience and a dedicated team, we ensure timely and safe delivery of goods, no matter the distance. Our tailored solutions, transparent communication, and customer-centric approach have earned us the trust and loyalty of numerous businesses. We go the extra mile to meet our clients' unique needs, making Pooja Roadways a preferred partner in their success.
          </p></div>
        </div>
        <img className='w-[100%]' src={require('../Assets/website poster.png')}/>
        </div>
        <OurClientsSection/>
    </Main>
  )
}

export default OurClients
