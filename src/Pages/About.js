import React, { useEffect } from 'react'
import Main from '../Components/Main'
import AboutSectionDivComponents from '../Components/Page_components/AboutSectionDivComponents'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Main>
      
      {/*  */}
      <div className='md:grid grid-cols-2 items-center bg-gray-200'>
        <div className=' flex items-center justify-center'>
          <img
            data-aos='zoom-in'
            className='w-[100%]'
            src={require('../Assets/POS2.jpg')}
          />
        </div>
        <div className='px-5 py-5 md:py-0 md:pl-24 md:pr-12 '>
          <div className='space-y-5 md:space-y-10 text-black'>
            <h1 className='text-3xl md:text-6xl font-md text-red-600'>
              Our Mission <br />
              <h2 className='my-2 font-light text-2xl md:text-5xl '>
                "To Provide Best Logistics Service"
              </h2>
            </h1>
            {/* <hr className='w-[15%] border-2 border-red-600' /> */}
            <p align='justify' className='w-[100%] font-light text-2xl'>
              Its goal is to Provide the highest level of transporrtation
              Service as well as safe and timely deliveries with fair and
              competitive pricing while providing a safe workspace for employees
              and maintaining integrity , fairness and honesty with customers
              and business partners
            </p>
            <p align='justify' className='w-[100%] font-light text-2xl'>
              Poojs Roadways Trucking mission is to become a recognized leader
              in India's Transportation industry for long and short distance
              trucking and transportation goal.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='md:grid grid-cols-2 items-center bg-red-500'>
        <div className='px-5 py-5 md:py-0 md:pl-24 md:pr-12 '>
          <div className='space-y-5 md:space-y-10 text-white'>
            <h1 className='text-3xl md:text-6xl font-md text-white'>
              Our Vision
              <br />
              <h2 className='my-2 font-light text-2xl md:text-5xl '>
                "Becoming Industry Leaders"
              </h2>
            </h1>
            {/* <hr className='w-[15%] border-2 border-red-600' /> */}
            <p align='justify' className='w-[100%] font-light text-2xl'>
              Poojs Roadways Trucking mission is to become a recognized leader
              in India's Transportation industry for long and short distance
              trucking and transportation goal.
            </p>
          </div>
        </div>
        <img
          data-aos='zoom-in'
          className='w-[100%]'
          src={require('../Assets/POS3.png')}
        />
      </div>
      {/*  */}

      <div className='md:grid grid-cols-2 items-center bg-gray-100'>
      <img
          data-aos='zoom-in'
          className='w-[100%]'
          src={require('../Assets/POS1.jpg')}
        />
        <div className='px-5 py-5 md:py-0 md:pl-24 md:pr-12 '>
          
          <div className=' space-y-5 md:space-y-10 text-black'>
            
              <h2 className='my-2 font-light text-2xl md:text-5xl '>
                "Not Just A Logistics Business!"
              </h2>
            
            {/* <hr className='w-[15%] border-2 border-red-600' /> */}
            <p align='justify' className='w-[100%] font-light text-2xl ' >
              At Pooja Roadways, our clients love us for our unwavering
              commitment to reliability and excellence in logistics. With years
              of experience and a dedicated team, we ensure timely and safe
              delivery of goods, no matter the distance. Our tailored solutions,
              transparent communication, and customer-centric approach have
              earned us the trust and loyalty of numerous businesses. We go the
              extra mile to meet our clients' unique needs, making Pooja
              Roadways a preferred partner in their success.
            </p>
          </div>
        </div>
        
      </div>
        </Main>
  )
}

export default About
