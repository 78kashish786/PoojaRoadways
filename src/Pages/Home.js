import React from 'react'
import Main from '../Components/Main'
import Benefit from '../Components/Page_components/Benefit'
import Feature from '../Components/Page_components/Feature'
import SliderDiv from '../Components/Page_components/SliderDiv'
import SliderComponent from '../Components/Page_components/SliderComponent.js'
import OurClientsSection from '../Components/Page_components/OurClientsSection.js'
import WhyChooseUsSection from '../Components/Page_components/WhyChooseUsSection.js'

const Home = () => {
  return (
    <Main>
      <SliderComponent/>
        <Benefit/>
        {/* <Feature/> */}
        <WhyChooseUsSection/>
        <OurClientsSection/>
    </Main>
  )
}

export default Home
