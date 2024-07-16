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
              'https://static.vecteezy.com/system/resources/thumbnails/027/843/401/small_2x/a-cargo-truck-with-a-container-is-seen-driving-across-a-bridge-while-a-semi-truck-with-a-cargo-trailer-follows-closely-behind-photo.jpg'
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
