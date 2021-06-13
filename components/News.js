import React from "react";
import Slide from "react-reveal/Slide";

import Heading from "./Heading";
import SliderComponent from "./SliderComponent";
const isWindowContext = typeof window !== "undefined";

const NEWS_CONFIG = [
  {
    title: "Recent Events",
    config: [
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
    ],
  },
  {
    title: "Grinntech Endorsement",
    config: [
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
    ],
  },
  {
    title: "Grinntech Press releases",
    config: [
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
    ],
  },
  {
    title: "Grinntech in Media",
    config: [
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
    ],
  },
  {
    title: "Blogs",
    config: [
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
    ],
  },
];

const News = () => {
  const width = isWindowContext && window.innerWidth;
  const isMobile = width && width < 600 ? true : false;
  return (
    <section className="container">
      <div className="py-8">
        {NEWS_CONFIG.map((item, key) => {
          return (
            <div key={key} className="mb-8">
              <Slide left>
                <Heading text={item.title} />

                {/* <h2 className="text-left text-gray-900">{item.title}</h2> */}
              </Slide>
              <SliderComponent
                arrows={true}
                dots={false}
                slidesToShow={isMobile ? 1 : 3}
                slidesToScroll={1}
                config={item.config}
                autoplay={false}
                infinite={true}
                autoplaySpeed={5000}
                cssEase={"linear"}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
