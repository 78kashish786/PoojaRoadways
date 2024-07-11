import React from "react";
import Slider from "react-slick";
import SliderDiv from "./SliderDiv.js";

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <SliderDiv image={require('../../Assets/website file photo edit.png')} heading={"Great At Logistics"} subheading={"this is ony the extr subheading in the componet"}/>
        </div>
        <div>
        <SliderDiv image={require('../../Assets/website image.jpg')} heading={"Great At Logistics"} subheading={"this is ony the extr subheading ine componet"}/>
        </div>
        <div>
        <SliderDiv image={require('../../Assets/website poster.png')} heading={"Great At Logistics"} subheading={"this is ony the extr subheading in the componet"}/>
        </div>
       
      </Slider>
    </div>
  );
}

export default SliderComponent;
