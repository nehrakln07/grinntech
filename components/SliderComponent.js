import React, { useState } from "react";
import Slider from "react-slick";

const SliderComponent = (props) => {
  console.log(props);
  let slider;
  const [isRunning, setIsRunning] = useState(true);
  const settings = {
    arrows: props.arrows || false,
    dots: props.dots || false,
    infinite: props.infinite || true,
    speed: props.speed || 500,
    slidesToShow: props.slidesToShow || 1,
    slidesToScroll: props.slidesToScroll || 1,
    autoplay: props.autoplay || false
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

  const renderItems = (config) =>{
    return(
      <>
      {
        config.map((item, key)=>{
          return(
            <div key={key} className="abc">
              <img src={item.image} />
            </div>
          )
        })
      }
      </>
    )
  }

  return (
    <div className="slider">
      <Slider
        ref={(c) => {
          slider = c;
        }}
        {...props}
        {...settings}
      >
        
        {/* {
        props.config.map((item, key)=>{
          return(
            <div key={key} className="relative">
              <img src={item.image} />
              <p className=" text-2xl">{item.content ? item.content : null} </p>
            </div>
          )
        })
      } */}
      {props.children}
      </Slider>
      <div className="text-xl text-right">
        <button className="button" onClick={_previous}>
          <i class="fa fa-long-arrow-left px-1"></i>
        </button>
        <button onClick={isRunning ? _pause : _play}>
          <i class={isRunning ? "fa fa-pause-circle px-1" : "fa fa-play-circle px-1"}></i>
        </button>
        <button className="button" onClick={_next}>
          <i class="fa fa-long-arrow-right px-1"></i>
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
