import React, { useState } from "react";
import Slider from "react-slick";
import Reveal from "react-reveal/Reveal";

const SliderComponent = (props) => {
  const settings = {
    arrows: props.arrows || true,
    dots: props.dots || false,
    infinite: false,
    speed: props.speed || 500,
    slidesToShow: props.slidesToShow || 1,
    slidesToScroll: props.slidesToScroll || 1,
    autoplay: props.autoplay || false
  };

  return (
    <div className="slider">
      <Slider
        {...props}
        {...settings}
      >
      {props.config.map((item, key) => {
          return (
            <div key={key} className={`px-2 h-96 flex flex-col justify-between`} style={{height: "350px"}}>
              <div className="">
                <img src={item.image} alt={item.text} />
              </div>
              <div className="text-sm p-2 h-24 pl-0 flex flex-col justify-between">
                <Reveal effect="fadeInUp">
                  <div className="divbb-2">
                    {item.text}
                  </div>
                  <div className="">
                    <a href={item.url} target="_blank" className="text-black border border-black py-2 px-4">
                      Learn More
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
