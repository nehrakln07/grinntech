import React from 'react';
import Reveal from "react-reveal/Reveal";

import Heading from "../Heading";

const CONFIG = [{
    width: "250px",
    heading: "Cell Analytics",
    data: [{
        image: "/assets/rect.png",
        text: "Large database of cells to choose from for optimum cell selection.",
    },{
        image: "/assets/rect.png",
        text: "State-of-the-art lab for extensive cell characterization",
    },{
        image: "/assets/rect.png",
        text: "Data driven advance algorithm brings out the best from the cell",
    },{
        image: "/assets/rect.png",
        text: "Customers gets full access of raw data as well as data analysis results.",
    },]
},{
    width: "300px",
    heading: "Battery Design, Manufacturing and Integration",
    data: [{
        image: "/assets/rect.png",
        text: "Cell characterization driven thermal design for safety and long life of battery.",
    },{
        image: "/assets/rect.png",
        text: "Battery manufacturing and end of line testing data which gives insight to the quality.",
    },{
        image: "/assets/rect.png",
        text: "Production test data which gives insight to the integration success and manufacturing quality.",
    }]
},{
    width: "300px",
    heading: "Field Data Analytics",
    data: [{
        image: "/assets/rect.png",
        text: "Live data analysis for performance tracking. Highly useful for fleet operations as well as OEMs.",
    },{
        image: "/assets/rect.png",
        text: "Advance algorithms for trend observation and failure forecast. Increasing the reliability multifold.",
    },{
        image: "/assets/rect.png",
        text: "Battery life time data tracking and analysis which improves warranty cost as well as gives a reliable second life value calculation of the battery.",
    }]
}]

const BatteryAnalytics = () =>{
    return(
        <div className="w-full">
           <div className="w-full flex flex-wrap items-center">
               <div className="w-full text-black sm:w-1/2">
                    <h2 className="text-3xl text-semibold">Cell and Battery Analytics</h2>
                    <hr className="w-64 h-1 my-2 bg-green-450" />
                    <div className="text-xl font-light mt-2">
                        To anticipate and avoid failure, improve performance and enhance life
                    </div>
               </div>
               <div className="w-full sm:w-1/2">
                   <img className="m-auto" src="/assets/home-page/Intersect-3.png" alt="Custom battery development" />
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
                                                <Reveal effect="fadeInUp">
                                                    <div key={index} className="m-w-full" style={{width: row.width}}>
                                                        <div className="w-full">
                                                            <img className="m-w-full m-auto" src={column.image} />
                                                        </div>
                                                        <div className="p-2 text-center text-xl font-normal">{column.text}</div>
                                                    </div>
                                                </Reveal>
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

export default BatteryAnalytics;