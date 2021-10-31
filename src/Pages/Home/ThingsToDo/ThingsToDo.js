import React, { Component } from "react";
import Slider from "react-slick";
import './ThingsToDo.css'

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className='container mb-5'>
        <h2 className='title-text'>things to do</h2>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className='slider-img'>
                    <img className='img-fluid' src="https://fantasykingdom.net/wp-content/uploads/2021/08/H15.jpg" alt="" />
                    <p>corporate day out</p>
          </div>
          <div className='slider-img'>
                    <img className='img-fluid' src="https://fantasykingdom.net/wp-content/uploads/2021/08/H10.jpg" alt="" />
                    <p>group picnic</p>
          </div>
          <div className='slider-img'>
                    <img className='img-fluid' src="https://fantasykingdom.net/wp-content/uploads/2021/08/H19.jpg" alt="" />
                    <p>bbq party</p>
          </div>
          <div className='slider-img'>
                    <img className='img-fluid' src="https://fantasykingdom.net/wp-content/uploads/2021/08/H20.jpg" alt="" />
                    <p>birthday party</p>
          </div>
          <div className='slider-img'>
                    <img className='img-fluid' src="https://fantasykingdom.net/wp-content/uploads/2021/08/wave-pool4.jpg" alt="" />
                    <p>wave pool</p>
          </div>
        </Slider>
      </div>
    );
  }
}