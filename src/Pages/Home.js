import React from 'react'
import Main from '../Components/Main'
import Benefit from '../Components/Page_components/Benefit'
import Feature from '../Components/Page_components/Feature'
import SliderDiv from '../Components/Page_components/SliderDiv'
import SliderComponent from '../Components/Page_components/SliderComponent.js'

const Home = () => {
  return (
    <Main>
      <SliderComponent/>
        <Benefit/>
        <Feature/>
    </Main>
  )
}

export default Home
