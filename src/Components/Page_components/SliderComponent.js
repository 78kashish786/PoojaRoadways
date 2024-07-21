import React from 'react'
import Slider from 'react-slick'
import SliderDiv from './SliderDiv.js'
import Image1 from '../../Assets/website image.jpg'
import Image2 from '../../Assets/website poster.png'
import Image3 from '../../Assets/website file photo edit.png'
function SliderComponent () {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div>
          <SliderDiv
            image={
              Image1  
            }
            heading={'Best in Class Transportation Services'}
            subheading={'Pooja Roadways are the leaders in Transport services across India'}
          />
        </div>
        <div>
          <SliderDiv
            image={
             Image2}
            heading={'All India Transportation Services'}
            subheading={'We Provide Services Across india with wide range of Features'}
          />
        </div>
        <div>
          <SliderDiv
            image={
            Image3}
            heading={'Your Safety, Our Concern'}
            subheading={'WE are concerned with the safety of your goods and so provide a safe and secure travel logistics for your goods '}
          />
        </div>
      </Slider>
    </div>
  )
}

export default SliderComponent
