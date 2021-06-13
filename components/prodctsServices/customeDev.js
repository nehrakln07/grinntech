import React from 'react';
import Reveal from "react-reveal/Reveal";

import Heading from "../Heading";

const CONFIG = [{
    width: "250px",
    heading: "Grinntech’s design flexibility derives from experience with:",
    data: [{
        image: "/assets/rect.png",
        text: "All cell form factors, thus always delivering the optimal solution",
    },{
        image: "/assets/rect.png",
        text: "Most commonly used cell-chemistry to tailor to customer needs",
    },{
        image: "/assets/rect.png",
        text: "Most application sectors, so we can shorten development time and improve reliability",
    },{
        image: "/assets/rect.png",
        text: "High-voltage battery solutions, unleashing higher efficiency in a safe manner",
    },]
},{
    width: "300px",
    heading: "Grinntech’s advanced inhouse BMS...",
    data: [{
        image: "/assets/rect.png",
        text: "...are completely designed and developed in-house, giving full flexibility in customization",
    },{
        image: "/assets/rect.png",
        text: "...come with award winning and patented BMS technology with industry leading IOT solutions",
    },{
        image: "/assets/rect.png",
        text: "...are designed to meet global automotive standards making it ready for worldwide deployment",
    }]
},{
    width: "250px",
    heading: "Grinntech batteries employ innovative cooling solutions:",
    data: [{
        image: "/assets/rect.png",
        text: "Intelligent passive cooling design where liquid-cooling is not practical",
    },{
        image: "/assets/rect.png",
        text: "Industry leading thermal uniformity within the battery pack for exceptional battery life and safety",
    },{
        image: "/assets/rect.png",
        text: "Liquid cooling for reliable operation in high-temperature ambient conditions",
    },{
        image: "/assets/rect.png",
        text: "Products with Phase Change Materials (PCM), an essential ingredient for prolonging the battery life in battery-swapping applications",
    },]
},{
    width: "300px",
    heading: "Standards and Certifications",
    data: [{
        image: "/assets/rect.png",
        text: "Every battery is AIS-048 certified ensuring the safety and reliability",
    },{
        image: "/assets/rect.png",
        text: "Batteries are certified for international standards like VDE, IEC etc on demand",
    },{
        image: "/assets/rect.png",
        text: "All automotive grade components with extensive DFMEA paves the way for functional safety (ISO-26262)",
    }]
}]

const CustomDev = () =>{
    return(
        <div className="w-full">
           <div className="w-full flex flex-wrap items-center">
               <div className="w-full text-black sm:w-1/2">
                    <h2 className="text-3xl text-semibold">Custom battery development</h2>
                    <hr className="w-64 h-1 my-2 bg-green-450" />
                    <div className="text-xl font-light mt-2">
                        Batteries optimally designed and made to specific customer requirements
                    </div>
               </div>
               <div className="w-full sm:w-1/2">
                   <img className="m-auto" src="/assets/home-page/Intersect.png" alt="Custom battery development" />
               </div>
           </div>
           <div className="w-full">
               {
                   CONFIG.map((row, key)=>{
                       return(
                            <div className="w-full mb-8" key={key}>
                                <Heading text={row.heading} textClass="text-2xl font-normal" />
                                <div className="w-full flex flex-wrap justify-between mr-2">
                                    {
                                        row.data.map((column, index)=>{
                                            return(
                                                    <div key={index} className="mb-4 sm:mb-0 m-w-full hover:shadow-xl" style={{width: row.width}}>
                                                        <div className="w-full">
                                                            <img className="m-w-full m-auto" src={column.image} />
                                                        </div>
                                                        <Reveal effect="fadeInUp">
                                                            <div className="p-2 text-center text-xl font-light">{column.text}</div>
                                                        </Reveal>
                                                    </div>
                                            )
                                        })
                        
                                    }
                                </div>
                            </div>
                        )
                   })
               }
           </div>
        </div>
    )
}

export default CustomDev;