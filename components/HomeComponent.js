import React from "react";
import Reveal from "react-reveal/Reveal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Heading from "./Heading";
import SliderComponent from "./SliderComponent";
import HomeSliderComponent from "./HomeSliderComponent";

const isWindowContext = typeof window !== "undefined";

const HomeBg1 = "/assets/home-page/bg1.png";
const HomeBg2 = "/assets/home-page/bg2.png";
const HomeBg3 = "/assets/home-page/bg3.png";
const HomeBg4 = "/assets/home-page/bg4.png";

const SBg2 = "/assets/home-page/s2-bg.png";

const P1 = "/assets/home-page/Intersect-1.png";
const P2 = "/assets/home-page/Intersect.png";
const P3 = "/assets/home-page/Intersect-3.png";

const NEWS_CONFIG = [
  {
    image: "/assets/blog/11.webp",
    url: "/assets/pdf/Grinntech-Press-Release.pdf",
    text: "Grinntech inaugurates their larger Manufacturing Facility",
  },
  {
    image: "/assets/blog/10.webp",
    url: "/assets/pdf/Grinntech-Press-Release.pdf",
    text: "Grinntech Press Release - Funding and new product launch",
  },
  {
    image: "/assets/blog/8.webp",
    url: "https://www.thehindubusinessline.com/companies/grinntech-raises-funds-launches-new-range-of-ev-batteries/article32458091.ece",
    text: "Grinntech raises funds, launches new range of EV batteries",
  },
  {
    image: "/assets/blog/7.webp",
    url: "https://www.financialexpress.com/industry/sme/ev-battery-maker-grinntech-raises-2-m-led-by-sumantran-lakshmi-narayanan/",
    text: "EV battery maker Grinntech raises $2M led by Sumantran, Lakshmi Narayanan",
  },
  {
    image: "/assets/blog/9.webp",
    url: "https://www.autocarpro.in/news-national/iitmadras-incubated-grinntech-unveils-hightech-lithiumion-batteries-for-evs-67086",
    text: "IIT-Madras incubated Grinntech unveils high-tech lithium-ion batteries for EVs",
  },
  {
    image: "/assets/blog/6.webp",
    url: "https://www.qualcomm.com/company/location/india/design-in-india-challenge-2019/2019",
    text: "Grinntech won third prize in prestigious Qualcomm Design in India Challenge 2019",
  },
  {
    image: "/assets/blog/5.webp",
    url: "https://circuitdigest.com/interview/nikhilesh-mishra-ceo-of-grinntech-technologies-on-how-his-startup-became-leading-lithium-battery-technology-provider-in-india",
    text: "Nikhilesh Mishra, CEO of Grinntech, Shares insights on company's position in EV industry",
  },
  {
    image: "/assets/blog/4.webp",
    url: "/assets/pdf/Energy-Storage-Challenge-India.pdf",
    text: "Puneet Jain, COO of Grinntech, Spoke to ETN about solving India's Energy storage challenges",
  },
  {
    image: "/assets/blog/3.webp",
    url: "https://evtechnews.in/aiovg_videos/presentation-by-mr-nikhilesh-mishra-concluding-remarks/",
    text: "Grinntech at CII Conference on E-Mobility 2019",
  },
  {
    image: "/assets/blog/2.webp",
    url: "https://www.thehindubusinessline.com/specials/emerging-entrepreneurs/designing-and-packaging-the-technology-for-ev-battery-makers/article26052802.ece",
    text: "Designing and packaging the technology for EV battery makers",
  },
  {
    image: "/assets/blog/1.webp",
    url: "https://www.youtube.com/watch?v=FTqGeWiIQoA",
    text: "Grinntech, a lithium battery technology company - An IITM Incubated Startup",
  },
];

const HOME_SLIDER_CONFIG = [
  {
    image: HomeBg1,
    component: () => {
      return (
        <div className="absolute z-10 p-8 top-20 left-10">
          <h1 className="text-white text-5xl mt-8 mb-4 font-normal">
            A team committed to power the coming EV revolution
          </h1>
          <hr className="w-2/5 h-1 bg-green-450 mb-6" />
          <button className="text-white text-lg border border-white py-2 px-4">
            Learn More
          </button>
        </div>
      );
    },
  },
  {
    image: HomeBg2,
    component: () => {
      return (
        <div className="absolute z-10 p-8 bottom-24 left-10 w-full sm:w-1/2">
          <h1 className="text-black text-5xl mt-8 mb-4 font-normal">
            A team committed to power the coming EV revolution
          </h1>
          <hr className="w-2/5 h-1 bg-green-450 mb-6" />
          <button className="text-black text-lg border border-black py-2 px-4">
            Learn More
          </button>
        </div>
      );
    },
  },
  {
    image: HomeBg3,
    component: () => {
      return (
        <div className="absolute z-10 p-8 bottom-4 left-10 w-full sm:w-1/2">
          <h1 className="text-white text-5xl mt-8 mb-4 font-normal">
            Custom battery development optimally designed and made to customer
            requirements
          </h1>
          <hr className="w-2/5 h-1 bg-green-450 mb-6" />
          <button className="text-white text-lg border border-white py-2 px-4">
            Learn More
          </button>
        </div>
      );
    },
  },
  {
    image: HomeBg4,
    component: () => {
      return (
        <div className="absolute z-10 p-8 bottom-4 left-10 w-full sm:w-1/2">
          <h1 className="text-black text-5xl mt-8 mb-4 font-normal">
            Wide product range
          </h1>
          <hr className="w-2/5 h-1 bg-green-450 mb-6" />
          <h3 className="text-xl">
            Grinntech offers a wide range of products for robotics to various
            automotive applications
          </h3>
          <button className="text-black text-lg border border-black py-2 px-4">
            Learn More
          </button>
        </div>
      );
    },
  },
];

const PS_CONFIG = [
  {
    image: P1,
    heading: "Grinntech proprietary products",
    content: "Proprietary Products to address most common EV segments",
  },
  {
    image: P2,
    heading: "Custom Battery",
    content:
      "Custom Battery Developmentoptimally designed and made to customer requirements",
  },
  {
    image: P3,
    heading: "Battery Analytics",
    content:
      "Battery Analytics leveraging data for performance, safety and long life",
  },
];

const Home = () => {
  const width = isWindowContext && window.innerWidth;
  const isMobile = width && width < 600 ? true : false;
  return (
    <div className="app-container">
      <section
        className="relative"
        style={{ maxWidth: "1300px", margin: "auto" }}
      >
        <div className="w-full">
          <HomeSliderComponent
            dots={isMobile ? false : true}
            slidesToShow={1}
            slidesToScroll={1}
            config={HOME_SLIDER_CONFIG}
            autoplay={true}
            infinite={true}
            autoplaySpeed={5000}
            cssEase={"linear"}
            customArrow={isMobile ? false : true}
          />
        </div>
      </section>
      <section
        className="container p-16 w-full bg-no-repeat bg-right"
        style={{ backgroundImage: 'url("/assets/home-page/s2-bg.png")' }}
      >
        <Heading text="Powering the transformation of mobility" />
        <Reveal effect="fadeInUp">
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
        </Reveal>
      </section>
      <section className="container p-16 w-full">
        <Heading text="Products and Services" align="right" />
        <div className="flex justify-between flex-wrap">
          {PS_CONFIG.map((item, key) => {
            return (
              <div className="prod-container w-full w-30 my-2 shadow-2xl">
                <div className="w-full h-48 flex justify-center overflow-hidden items-center">
                  <img src={item.image} />
                </div>
                <div className="w-full p-4 bg-white">
                  <Reveal effect="fadeInUp">
                    <h4 className="text-lg text-green-450">{item.heading}</h4>
                    <p className="text-sm text-black">{item.content}</p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container p-16">
        <Heading text="Featured In" />
        <SliderComponent
          arrows={true}
          dots={false}
          slidesToShow={isMobile ? 1 : 3}
          slidesToScroll={1}
          config={NEWS_CONFIG}
          autoplay={false}
          infinite={true}
          autoplaySpeed={5000}
          cssEase={"linear"}
        />
      </section>
    </div>
  );
};

export default Home;
