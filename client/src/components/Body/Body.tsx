/* REACT */
import React from 'react';
import Slider from "react-slick";

/* CSS */
import s from "./Body.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Body() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <div>
        <div>
            <span>Previous Rulings</span>
        </div>
        <Slider {...settings}> 

        </Slider>
    </div>
  )
}
