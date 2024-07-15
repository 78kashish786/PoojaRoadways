import React from 'react'
import Main from '../Components/Main'
import AboutSectionDivComponents from '../Components/Page_components/AboutSectionDivComponents'

const About = () => {
  return (
    <Main>
      <div className='md:grid grid-cols-2 items-center bg-red-500'>
        <div className='px-5 py-5 md:py-0 md:pl-24 md:pr-12 '>
          <div className='space-y-10 text-white'>
            <h1 className='text-6xl font-md text-white'>About us <br/><h2 className='my-2 font-light text-5xl '>"Not Just A Logistics Business!"</h2></h1>
            <hr className='w-[15%] border-2 border-red-600'/>
            <p align='justify' className='w-[100%] font-light'>
            At Pooja Roadways, our clients love us for our unwavering commitment to reliability and excellence in logistics. With years of experience and a dedicated team, we ensure timely and safe delivery of goods, no matter the distance. Our tailored solutions, transparent communication, and customer-centric approach have earned us the trust and loyalty of numerous businesses. We go the extra mile to meet our clients' unique needs, making Pooja Roadways a preferred partner in their success.
          </p></div>
        </div>
        <img className='w-[100%]' src={require('../Assets/website poster.png')}/>
        </div>
        
         {/* <AboutSectionDivComponents image={'https://www.daimlertruck.com/fileadmin/_processed_/2/2/csm_Motiv2_2-kachel_240327_LoRes_0a99004164.jpg'} heading={"Abouit us "} subheading={"Not just a logistics business"} para={"POOJA ROADWAYS Trucking is a well-established road freight transport company, located in  AMBALA(INDIA). The business transports a variety of general goods, From its humble beginnings in 2003, the company started out as a home based transport business with the acquisition of a medium sized truck, Within a couple of years the company opened a depot in AMBALA. Soon the business expanded its services to include the All India route, and since then the business has grown substantially and also had to open a depot in Delhi to cater for an ever increasing demand for its services."}/> */}
    </Main>
  )
}

export default About
