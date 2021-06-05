import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Heading from "./Heading";

import HomeBg1 from "../public/assets/home/grinntech-bg.svg"

const Images = [
    HomeBg1,HomeBg1,HomeBg1,HomeBg1,HomeBg1
];

const CONFIG = {
    autoPlay: true,
    emulateTouch: true,
    infiniteLoop: true,
    preventMovementUntilSwipeScrollTolerance: true,
    showThumbs: false,
    swipeable: true,
    transitionTime: 500,
}

export default () =>{
    return(
        <div className="app-container">
            <section className="relative">
                <div className="absolute z-10 p-8">
                    <h1 className="text-white text-5xl mt-8 mb-4 font-normal">A team committed to power the coming EV revolution</h1>
                    <button className="text-white text-lg border border-white py-2 px-4">Learn More</button>
                </div>
                <div className="">
                    <Carousel {...CONFIG}>
                        {
                            Images.map((item, key)=>{
                                return(
                                    <div key={key}>
                                        <img src={item} alt="grinntech-bg"/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </section>
            <section className="p-16">
                <Heading text="Powering the transformation of mobility" />
            </section>
            <section className="p-16">
                <Heading text="Products and Services" align="right" />
            </section>
            <section className="p-16">
                <Heading text="News" />
            </section>
        </div>
    )
}

// export default Home;