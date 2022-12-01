import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevBtn from './PrevBtn.js';
import React from 'react';
import NextBtn from './NextBtn.js';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';
import "./Slides.css";

function Slides() {
    var settings = {
        // dots: true,
        infinite: 1,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 1400,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1000,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]                                                                                                                           
      };
  return <div className='slides'>
        <Slider {...settings} prevArrow={<PrevBtn />} nextArrow={<NextBtn />}>
            <div className="image">
                <img src={img1} alt="" />
            </div>
            <div className="image">
                <img src={img2} alt="" />
            </div>
            <div className="image">
                <img src={img3} alt="" />
            </div>
            <div className="image">
                <img src={img4} alt="" />
            </div>
            <div className="image">
                <img src={img5} alt="" />
            </div>
            <div className="image">
                <img src={img6} alt="" />
            </div>
        </Slider>
  </div>;
}

export default Slides;