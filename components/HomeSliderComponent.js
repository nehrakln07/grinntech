import React, { useState } from "react";
import Slider from "react-slick";

const HomeSliderComponent = (props) => {
  let slider;
  const [isRunning, setIsRunning] = useState(true);
  const settings = {
    arrows: props.arrows || false,
    dots: props.dots || false,
    infinite: props.infinite || true,
    speed: props.speed || 500,
    slidesToShow: props.slidesToShow || 1,
    slidesToScroll: props.slidesToScroll || 1,
    autoplay: props.autoplay || false,
  };

  const _next = () => {
    slider.slickNext();
  };
  const _previous = () => {
    slider.slickPrev();
  };

  const _play = () => {
    setIsRunning(true);
    slider.slickPlay();
  };
  const _pause = () => {
    setIsRunning(false);
    slider.slickPause();
  };

  return (
    <div className="slider relative">
      <Slider
        ref={(c) => {
          slider = c;
        }}
        {...props}
        {...settings}
      >
        {props.config.map((item, key) => {
          return (
            <div key={key} className={`relative ${props.sliderClassName ? props.sliderClassName: ''}`}>
              <img src={item.image} />
              {item.component && item.component()}
            </div>
          );
        })}
      </Slider>
      {
        props.customArrow && 
        <div className="flex  justify-end items-center pr-16">
          <button className="flex z-10" onClick={_previous}>
            <i class="fa fa-long-arrow-left px-1"></i>
          </button>
          <button className="z-10 text-xs border-2 border-black p-2 rounded-full" onClick={isRunning ? _pause : _play}>
            <i
              class={
                isRunning ? "fa fa-pause px-1" : "fa fa-play px-1"
              }
            ></i>
          </button>
          <button className="flex z-10" onClick={_next}>
            <i class="fa fa-long-arrow-right px-1"></i>
          </button>
        </div>
      }
    </div>
  );
};

export default HomeSliderComponent;
