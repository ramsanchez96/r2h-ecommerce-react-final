import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="img/slide2.jpg" className="slider__Img"/>
          </div>
          <div>
          <img src="img/slide1.jpg" className="slider__Img"/>
          </div>
          <div>
          <img src="img/slide3.jpg" className="slider__Img"/>
          </div>
          <div>
          <img src="img/slide4.jpg" className="slider__Img"/>
          </div>
        </Slider>
      </div>
    );
  }
}