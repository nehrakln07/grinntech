import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Heading from "./Heading";
import SimpleSlider from "./SliderComponent";

const HomeBg1 = "/assets/home-page/bg1.png";
const HomeBg2 = "/assets/home-page/bg2.png";

const SBg2 = "/assets/home-page/s2-bg.png";

const P1 = "/assets/home-page/Intersect-1.png";
const P2 = "/assets/home-page/Intersect.png";
const P3 = "/assets/home-page/Intersect-3.png";

const Images = [HomeBg1, HomeBg2, HomeBg1, HomeBg1, HomeBg1];

const CONFIG = {
  autoPlay: true,
  emulateTouch: true,
  infiniteLoop: true,
  preventMovementUntilSwipeScrollTolerance: true,
  showThumbs: false,
  swipeable: true,
  transitionTime: 500,
};

const SLIDER_CONFIG = [
  {
    image: "/assets/home-page/Intersect-1.png",
    content: "Grinntech emerges a Winner in the NXP India start-up challenge"
  },{
    image: "/assets/home-page/Intersect-1.png",
    content: "Grinntech emerges a Winner in the NXP India start-up challenge"
  },{
    image: "/assets/home-page/Intersect-1.png",
    content: "Grinntech emerges a Winner in the NXP India start-up challenge"
  },{
    image: "/assets/home-page/Intersect-1.png",
    content: "Grinntech emerges a Winner in the NXP India start-up challenge"
  },{
    image: "/assets/home-page/Intersect-1.png",
    content: "Grinntech emerges a Winner in the NXP India start-up challenge"
  }
]


export default () => {
  return (
    <div className="app-container">
      <section className="relative">
        <div className="absolute z-10 p-8">
          <h1 className="text-white text-5xl mt-8 mb-4 font-normal">
            A team committed to power the coming EV revolution
          </h1>
          <button className="text-white text-lg border border-white py-2 px-4">
            Learn More
          </button>
        </div>
        <div className="">
          <Carousel {...CONFIG}>
            {Images.map((item, key) => {
              return (
                <div key={key}>
                  <img src={item} alt="grinntech-bg" />
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
      <section
        className="p-16 w-full bg-no-repeat bg-right"
        style={{ backgroundImage: 'url("/assets/home-page/s2-bg.png")' }}
      >
        <Heading text="Powering the transformation of mobility" />
        <div className="text-3xl w-full sm:w-2/4">
          <p>
            EV Batteries & Solutions that employ intelligent hardware &
            applications to achieve:
          </p>
          <ul className="list-disc list-inside">
            <li> High Performance </li>
            <li> Long Life</li>
            <li>Sustainability</li>
            <li>Affordability</li>
          </ul>
        </div>
      </section>
      <section className="p-16 w-full">
        <Heading text="Products and Services" align="right" />
        <div className="flex justify-between">
          <div
            className="tilted-box hover:bg-opacity-50 border-l border-t border-green-450 overflow-hidden bg-contain bg-no-repeat tranform-tilt-30 h-60 w-full sm:w-2/6"
            style={{ backgroundImage: `url(${P1})` }}
          >
            <div className="box-text"><p>Proprietary Products to address most common EV segments</p></div>
          </div>
          <div
            className="tilted-box hover:bg-opacity-50 border-l mx-0.5 border-b border-green-450 overflow-hidden bg-contain bg-no-repeat tranform-tilt-30 h-60 w-full sm:w-2/6"
            style={{ backgroundImage: `url(${P2})` }}
          >
            <div className="box-text"><p>Custom Battery Developmentoptimally designed and made to customer requirements</p></div>
          </div>
          <div
            className="tilted-box hover:bg-opacity-50 border-r border-t border-green-450 overflow-hidden bg-contain bg-no-repeat tranform-tilt-30 h-60 w-full sm:w-2/6"
            style={{ backgroundImage: `url(${P3})` }}
          >
            <div className="box-text"><p>Battery Analytics leveraging data for performance, safety and long life</p></div>
          </div>
        </div>
      </section>
      <section className="p-16">
        
        <Heading text="News" />
        <SimpleSlider
            dots={false}
            slidesToShow={3}
            slidesToScroll={1}
            config={SLIDER_CONFIG}
            autoplay={true}
            infinite={true}
            autoplaySpeed= {5000}
            cssEase= {"linear"}
        />
      </section>
    </div>
  );
};

// export default Home;
