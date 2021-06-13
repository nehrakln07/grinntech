import React from "react";
import Reveal from "react-reveal/Reveal";

import Heading from "./Heading";

const TeamConfig = [
  {
    image: "/assets/About/Nikhilesh.png",
    name: "Nikhilesh Mishra",
    description: "CEO",
  },
  {
    image: "/assets/About/puneet.png",
    name: "Puneet Jain",
    description: "COO",
  },
  {
    image: "/assets/About/Bala.png",
    name: "E.Balasubramonium",
    description: "President",
  },
  {
    image: "/assets/About/Lakshmi.png",
    name: "Mr. Lakshmi Narayanan",
    description: "Founder Member COGNIZANT Technology Solutions",
  },
  {
    image: "/assets/About/V.png",
    name: "Dr. V.Sumantran",
    description:
      "Chairman, Celeris Technologies Former VC, Ashok Leyland Former ED, Tata Motors",
  },
];

const AboutUs = () => {
  return (
    <section className="container">
      <div className=" w-full mt-10">
        <Heading text="Our Mission" />
        <div className="w-full">
          <div className="w-full sm:w-1/2">
            <p className="text-lg font-normal">
              Mobility for the Future needs to be environmentally sustainable,
              economically affordable, and socially fun. Electrification of
              mobility is recognised as a key enabler to achieve these goals.
              <br />
              At Grinntech, we are passionate about playing a role in this
              transformation. This is the goal that motivates us.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <img className="m-auto" src="" />
          </div>
        </div>
      </div>
      <hr className="w-5/6 bg-gray-400 h-0.5 mx-auto my-10" />
      <div className="w-full">
        <Heading text="Our Story" />
        <div className="w-full flex flex-wrap">
          <div className="w-full sm:w-3/5">
            <img className="m-auto" src="/assets/About/story.png" />
          </div>
          <div className="w-full sm:w-2/5 ">
            <p className="text-lg font-normal px-8">
              Mobility for the Future needs to be environmentally sustainable,
              economically affordable, and socially fun. Electrification of
              mobility is recognised as a key enabler to achieve these goals.
              <br />
              At Grinntech, we are passionate about playing a role in this
              transformation. This is the goal that motivates us.
            </p>
          </div>
        </div>
      </div>
      <hr className="w-5/6 bg-gray-400 h-0.5 mx-auto my-10" />
      <div className="w-full">
        <Heading text="Our People" />
        <div className="w-full flex flex-wrap">
          <div className="w-full sm:w-1/2">
            <p className="text-lg font-normal">
              Mobility for the Future needs to be environmentally sustainable,
              economically affordable, and socially fun. Electrification of
              mobility is recognised as a key enabler to achieve these goals.
              <br />
              At Grinntech, we are passionate about playing a role in this
              transformation. This is the goal that motivates us.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <img className="m-auto" src="/assets/About/people.png" />
          </div>
        </div>
      </div>
      <hr className="w-5/6 bg-gray-400 h-0.5 mx-auto my-10" />
      <div className="">
        <Heading text="Our Leadership" />
        <div className="w-full flex flex-wrap justify-around">
          {TeamConfig.map((item, key) => {
            return (
              <div className="w-full sm:w-2/5 md:w-1/4 md:mx-2 mb-4 hover:shadow-2xl">
                <div className="w-full">
                  <img
                    className="m-auto"
                    src={item.image}
                    alt={item.name}
                  ></img>
                </div>

                <div className="text-center mt-2 p-2">
                <Reveal effect="fadeInUp">
                  <h2 className="text-2xl font-semibold">{item.name}</h2>
                  <p className="text-lg font-normal mt-1">{item.description}</p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="w-5/6 bg-gray-400 h-0.5 mx-auto my-10" />
      <div className="w-full mb-10 text-xl font-medium text-center">
        Grinntech’s leadership team combines the passion and entrepreneurship of
        youth with the experience and wisdom of recognized thought-leaders from
        the domains of autos and technology.
      </div>
    </section>
  );
};

export default AboutUs;
