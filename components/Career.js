import React from "react";
import Reveal from "react-reveal/Reveal";
import HomeSliderComponent from "./HomeSliderComponent";

const isWindowContext = typeof window !== "undefined";

const HomeBg1 = "/assets/home-page/bg1.png";
const HomeBg2 = "/assets/home-page/bg2.png";
const HomeBg3 = "/assets/home-page/bg3.png";
const HomeBg4 = "/assets/home-page/bg4.png";
const HOME_SLIDER_CONFIG = [
  {
    image: HomeBg1,
  },
  {
    image: HomeBg2,
  },
  {
    image: HomeBg3,
  },
  {
    image: HomeBg4,
  },
];

const OFFER = [
  {
    heading: "Get a Career, not a job !",
    description:
      "Every employee at Grinntech is offered a successful career path, filled with learning experience, making them ready for their next role. Also you get a chance to work in Electric vehicle domain which is the next big thing in Automotive industry.",
  },
  {
    heading: "Excellent work environment",
    description:
      "We are never done learning and always seek to improve ourselves. We are curious about new possibilities and act to explore them.",
  },
  {
    heading: "Work/life balance",
    description:
      "Grinntech also provides great work/life balance, and support unique individual and family needs.",
  },
];

const JOB = [
  {
    heading: "BMS Hardware / Software Development",
    description:
      "Battery Management System (BMS) is the epitome of embedded system ensuring safety. No other single embedded system could have had more profound effect on safety than BMS ensuring safety from fire hazard in a Lithium-ion battery.",
  },
  {
    heading: "Battery Pack Design",
    description:
      '"A chain is only as strong as its weakest link". In the battery design there is no possibility to have a weak link. It takes an exceptional mind to ensure all components are equally reliable.',
  },
  {
    heading: "Battery Analytics",
    description:
      "The Lithium ion battery life depends on the Nature (How it was made) and Nurture (How it is used). Having a knowledge of both opens the doors to infinite information on performance, reliability, safety, and seconds life worth.",
  },
];

const Career = () => {
  const width = isWindowContext && window.innerWidth;
  const isMobile = width && width < 600 ? true : false;
  return (
    <section className="w-full mt-10">
      <div className="container">
        <div className="w-full my-10 flex flex-wrap items-center">
          <div className="w-full md:w-2/5">
            <h1 className="text-4xl font-semibold">
              {" "}
              Come Invent <br /> With Us
            </h1>
            <div className="mt-10">
              <a
                href="/"
                target="_blank"
                className="text-black border border-black py-2 px-4"
              >
                Jobs
              </a>
            </div>
          </div>
          <div className="w-full md:w-3/5">
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
        </div>

        <div className="w-full my-10">
          <div className="w-full flex flex-wrap">
            <div className="w-full sm:w-1/2">
              <img className="m-auto" src="/assets/career.png" />
            </div>
            <div className="w-full sm:w-1/2 px-8">
              <h4 className="text-green-450 text-2xl mb-2 font-medium">
                We’re looking for curious minds to help bringing the EV
                revolution.
              </h4>
              <p className="text-2xl font-light">
                Grinntech is leading the Indian efforts in bringing the EV
                revolution, making it reach masses and make India centre of EV
                battery manufacturing. We have audacious targets but this is
                just the begining of all those possibilities. It takes inventive
                minds with diverse skills, backgrounds, and cultures to
                transform worlds one of the largest industry to make a paradigm
                shift. This is your chance to write the history.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full my-10">
          <h2 className="text-green-450 text-3xl text-center font-semibold mb-10">
            What we offer
          </h2>
          <div className="w-full flex flex-wrap justify-between">
            {OFFER.map((item, key) => {
              return (
                <div
                  className="w-full sm:w-2/5 w-30 p-4 text-center hover:shadow-2xl border-b-4 border-green-450"
                  style={{ background: "#F6F5F5" }}
                >
                  <Reveal effect="fadeInUp">
                    <h2 className="text-2xl font-medium px-8 py-4">
                      {item.heading}
                    </h2>
                    <p className="text-lg font-normal px-2">
                      {item.description}
                    </p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-10 text-center px-10 font-semibold text-2xl">
          This is the age where batteries and vehicles comes together to create
          the world’s next paradigm shift called EVs.
        </div>
        <div className="w-full my-10">
          <div className="w-full flex flex-wrap justify-between">
            {JOB.map((item, key) => {
              return (
                <div
                  className="w-full sm:w-2/5 w-30 p-4 text-center hover:shadow-2xl border-b-4 border-green-450 "
                  style={{ background: "#F6F5F5" }}
                >
                  <Reveal effect="fadeInUp">
                    <h2 className="text-2xl font-medium px-8 py-4 text-green-450">
                      {item.heading}
                    </h2>
                    <p className="text-lg font-normal px-2">
                      {item.description}
                    </p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full my-10">
          <h2 className="text-green-450 text-4xl text-center font-semibold mb-10">
            Find Grinntech Jobs
          </h2>
          <div className="my-10 text-center font-normal text-2xl">
            A career at Grinntech gives you the opportunity to innovate
            technologies that is changing the world. Thousands of people are
            working diligently to make a mark in this EV paradigm shift to save
            our planet. Sounds like a pretty big deal for simple job
            application. But it does.
          </div>
          <div className="text-center my-10">
            <a
              href="/"
              target="_blank"
              className="text-green-450 border border-green-450 py-2 px-4"
            >
              Find Job Openings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
