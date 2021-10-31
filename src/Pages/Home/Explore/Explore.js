
import React, { Component } from "react";
import Slider from "react-slick";
import './Explore.css'

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <div className='container mt-5 pb-5'>
          <h2 className='text-uppercase mb-5 title-text'> explore our parks & resort </h2>
          <Slider {...settings}>
            <div>
                      <img className='rounded-3' src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585740583.jpeg" alt="" />
                      <p className='text-uppercase'>Xtreme Racing</p>
            </div>
            <div>
                      <img className='rounded-3' src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585741207.jpeg" alt="" />
                      <p className='text-uppercase'>resort atlantis</p>
            </div>
            <div>
                      <img className='rounded-3' src="https://fantasykingdom.net/wp-content/uploads/2021/08/FKC.jpg" alt="" />
                      <p className='text-uppercase'>fantasy kingdom</p>
            </div>
            <div>
                      <img className='rounded-3' src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585740742.jpeg" alt="" />
                      <p className='text-uppercase'>heritage park</p>
            </div>
            <div>
                      <img className='rounded-3' src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585740502.jpeg" alt="" />
                      <p className='text-uppercase'>Water kingdom</p>
            </div>
          </Slider>
        </div>
      );
    }
  }