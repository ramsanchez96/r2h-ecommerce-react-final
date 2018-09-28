import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="img/slide2.jpg" className="slider__Img" alt="This is a promotional slider"/>
          </div>
          <div>
          <img src="img/slide1.jpg" className="slider__Img" alt="This is a promotional slider"/>
          </div>
          <div>
          <img src="img/slide3.jpg" className="slider__Img" alt="This is a promotional slider"/>
          </div>
          <div>
          <img src="img/slide4.jpg" className="slider__Img" alt="This is a promotional slider"/>
          </div>
        </Slider>
      </div>
    );
  }
}