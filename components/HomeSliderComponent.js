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
            <div
              key={key}
              className={`relative ${
                props.sliderClassName ? props.sliderClassName : ""
              }`}
            >
              <img className="h-80 sm:h-auto" src={item.image} />
              {item.component && item.component()}
            </div>
          );
        })}
      </Slider>
      {props.customArrow && (
        <div className="home-arrow-button flex justify-end items-center pr-16">
          <button
            className="flex z-10 outline-none focus:outline-none w-12"
            onClick={_previous}
          >
            <span class="long-arrow-left"></span>
          </button>
          <button
            className="z-10 border rounded-full border-white p-2 mx-4 outline-none focus:outline-none"
            onClick={isRunning ? _pause : _play}
          >
            <i class={isRunning ? "fa fa-pause px-1" : "fa fa-play px-1"}></i>
          </button>
          <button
            className="flex z-10 outline-none focus:outline-none  w-11"
            onClick={_next}
          >
            <span class="long-arrow-right"></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeSliderComponent;
