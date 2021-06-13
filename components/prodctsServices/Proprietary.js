import React from "react";
import Heading from "../Heading";

const CONFIG = [
  {
    heading: "IC Engine starter battery",
    icons: ["/assets/Products/icons/motorcycle.png"],
    features: [
      {
        icon: "/assets/Products/icons/Vectorbattery.png",
        text: "High Capacity",
        description: "Up-to 7.6Ah of High capacity battery",
      },
      {
        icon: "/assets/Products/icons/Vectorcharge.png",
        text: "Fast Charging",
        description: "Charges 80% in 1 hour",
      },
      {
        icon: "/assets/Products/icons/Vectorjis.png",
        text: "BX5 JIS",
        description: "JIS: 2-Wheeler Starter Battery Standard",
      },
    ],
    knowMore: true,
    specification: [
      {
        heading: "PINTAIL",
        data: [
          {
            key: "Voltage",
            value: "12V",
          },
          {
            key: "Capacity",
            value: "5/7.6Ah",
          },
        ],
      },
    ],
    rightImage: "/assets/Products/Pintail Final 1.png",
  },
  {
    heading: "e-cycle and Robotics battery",
    icons: [
      "/assets/Products/icons/cycle.png",
      "/assets/Products/icons/block.png",
    ],
    features: [
      {
        icon: "/assets/Products/icons/Vectorcharge.png",
        text: "Fast Charging",
        description: "Charges 80% in 1 hour",
      },
      {
        icon: "/assets/Products/icons/Group 51.png",
        text: "Assured Safety",
        description:
          "Our ultra safe BMS ensures 100% safety for the battery and your vehicle",
      },
    ],
    knowMore: true,
    specification: [
      {
        heading: "MUNIA",
        data: [
          {
            key: "Voltage",
            value: "24/48V",
          },
          {
            key: "Capacity",
            value: "38/19Ah",
          },
        ],
      },
    ],
    rightImage: "/assets/Products/Group 138.png",
  },
  {
    heading: "2-wheeler battery",
    icons: ["/assets/Products/icons/scooter.png"],
    features: [
      {
        icon: "/assets/Products/icons/5.png",
        text: "Long Life",
        description: "Upto 5 years of life",
      },
      {
        icon: "/assets/Products/icons/Vectorcharge.png",
        text: "Fast Charging",
        description:
          "Charges 80% in 1 hour which is 4 times faster than present generation Lithium batteries.",
      },
      {
        icon: "/assets/Products/icons/Group 51.png",
        text: "Assured Safety",
        description:
          "Our ultra safe BMS ensures 100% safety for the battery and your vehicle",
      },
    ],
    knowMore: true,
    specification: [
      {
        heading: "ROBIN",
        data: [
          {
            key: "Voltage",
            value: "72V",
          },
          {
            key: "Capacity",
            value: "28.8Ah",
          },
        ],
      },
      {
        heading: "FINCH",
        data: [
          {
            key: "Voltage",
            value: "48V",
          },
          {
            key: "Capacity",
            value: "28.8Ah",
          },
        ],
      },
    ],
    rightImage: "/assets/Products/Group 245.png",
  },
  {
    heading: "3-wheeler battery",
    icons: ["/assets/Products/icons/auto.png"],
    features: [
      {
        icon: "/assets/Products/icons/3.png",
        text: "Long Life",
        description: "Upto 3 years of life",
      },
      {
        icon: "/assets/Products/icons/Vectorcharge.png",
        text: "Fast Charging",
        description:
          "Charges 80% in 2.5 hour which is 4 times faster than present generation Lithium batteries.",
      },
      {
        icon: "/assets/Products/icons/Group 51.png",
        text: "Assured Safety",
        description:
          "Our ultra safe BMS ensures 100% safety for the battery and your vehicle",
      },
    ],
    knowMore: true,
    specification: [
      {
        heading: "SHIKRA",
        data: [
          {
            key: "Voltage",
            value: "48V",
          },
          {
            key: "Capacity",
            value: "46/100Ah",
          },
        ],
      },
    ],
    rightImage: "/assets/Products/Shikra 01 1.png",
  },
  {
    heading: "Tractor and LCV",
    icons: ["/assets/Products/icons/tempo.png"],
    features: [
      {
        icon: "/assets/Products/icons/7.png",
        text: "Long Life",
        description: "Upto 7 years of life",
      },
      {
        icon: "/assets/Products/icons/Unionliquid.png",
        text: "Liquid Cooling",
        description:
          "High power yet compact liquid cooling for extreme Indian temperatures",
      },
      {
        icon: "/assets/Products/icons/Vectorcharge.png",
        text: "Fast Charging",
        description: "Fast charging in1 Hour (0 to 80%)",
      },
    ],
    specification: [
      {
        heading: "FALCON",
        data: [
          {
            key: "Voltage",
            value: "48V",
          },
          {
            key: "Capacity",
            value: "46/100Ah",
          },
        ],
      },
    ],
    rightImage: "/assets/Products/Sonalika.png",
  },
  ,
  {
    heading: "Stationary application",
    features: [
      {
        icon: "/assets/Products/icons/Vectorcharge.png",
        text: "Fast Charging",
        description:
          "Charges 80% in one hour ",
      },
      {
        icon: "/assets/Products/icons/Group 51.png",
        text: "Assured Safety",
        description:
          "Our ultra safe BMS ensures 100% safety for the battery and your vehicle",
      },
    ],
    rightImage: "/assets/Products/Render.png",
  },
];

const BlockComponent = (props) => {
  const { heading, icons, features, knowMore, specification, rightImage } = props;
  return (
    <div className="w-full border-b border-black mb-8">
      <div className="w-full flex items-center pb-4 justify-between border-b border-green-450">
        <h2 className="text-black font-semibold text-xl">{heading}</h2>
        <div className="flex flex-end">
          {icons && icons.map((item, key) => {
            return (
                <div className="p-2 border rounded-md border-green-450 ml-2">
                    <img src={item} width="auto" height="30px" style={{height: '30px!important'}} />
                </div>
            )
          })}
        </div>
      </div>
      <div className="w-full flex justify-between py-4 flex-wrap">
        <div className="w-full sm:w-1/4">
          {features.map((item, key) => {
            return (
              <div key={key} className="w-full flex items-center text-black mb-6">
                <div className="w-1/4">
                    <div className="border-2 flex items-center justify-center rounded-full w-12 h-12 border-green-450 ">
                        <img src={item.icon} style={{height: '30px!important'}} width="20" height="30" />
                    </div>
                </div>
                <div className="w-3/4 text-left">
                  <h4 className="font-semibold text-lg">{item.text}</h4>
                  <hr className="line-gradient" />
                  <p className="font-light text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
          {/* {knowMore && <button className="px-2 py-3">Know More</button>} */}
        </div>
        {specification && (
          <div className="w-full sm:w-1/4">
            {specification.map((sitem, key) => {
              return (
                <div className="w-full" key={key}>
                  <h3 className="text-green-450 italic font-bold text-2xl text-left">{sitem.heading}</h3>
                  {sitem.data.map((item, index) => {
                    return (
                      <div className="flex justify-between text-black text-xl font-normal my-2 pl-2 border-l-4 border-green-450" key={index}>
                        <span className="">{item.key}</span>
                        <span className="text-green-450">{item.value}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
        <div className="w-full sm:w-2/5">
          <img className="m-auto" src={rightImage} style={{maxHeight:"300px"}}/>
        </div>
      </div>
    </div>
  );
};

const Proprietary = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-wrap items-center">
               <div className="w-full text-black sm:w-1/2">
                    <h2 className="text-3xl text-semibold">Grinntech proprietary products</h2>
                    <hr className="w-64 h-1 my-2 bg-green-450" />
                    <div className="text-xl font-light mt-2">
                    Proprietary Products to address most common EV segments
                    </div>
               </div>
               <div className="w-full sm:w-1/2">
                   <img className="m-auto" src="/assets/home-page/Intersect-1.png" alt="Grinntech proprietary products" />
               </div>
           </div>
      <div className="details">
        {CONFIG.map((item, key) => {
          return <BlockComponent {...item} />;
        })}
      </div>
    </div>
  );
};

export default Proprietary;
