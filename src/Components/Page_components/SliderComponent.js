import React from 'react'
import Slider from 'react-slick'
import SliderDiv from './SliderDiv.js'

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
              'https://drive.google.com/file/d/1uQj0Y55Y1P-CBiV9Hr0U6r5WWc5ugQ90/view?usp=sharing'
            }
            heading={'Best in Class Transportation Services'}
            subheading={'Pooja Roadways are the leaders in Transport services across India'}
          />
        </div>
        <div>
          <SliderDiv
            image={
              'https://img.freepik.com/free-photo/many-transport-trucks-parked-service-station-sunset-ai-generative_123827-23416.jpg'
            }
            heading={'All India Transportation Services'}
            subheading={'We Provide Services Across india with wide range of Features'}
          />
        </div>
        <div>
          <SliderDiv
            image={
              'https://static.vecteezy.com/system/resources/previews/027/868/408/non_2x/a-big-truck-is-driving-along-the-highway-delivering-goods-the-concept-of-logistics-and-delivery-routes-by-road-ai-generated-free-photo.jpg'
            }
            heading={'Your Safety, Our Concern'}
            subheading={'WE are concerned with the safety of your goods and so provide a safe and secure travel logistics for your goods '}
          />
        </div>
      </Slider>
    </div>
  )
}

export default SliderComponent
