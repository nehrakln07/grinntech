import React from 'react';
import Slide from 'react-reveal/Slide';

import Heading from "./Heading";
import SimpleSlider from "./SliderComponent";

const renderItems = (config) =>{
  return(
    <div className="relative bg-gray-400 h-60">
      <p className="absolute bottom-0 left-0 text-gray-900">
      Headline For the news evemnt
      </p>
    </div>
  )
}

const NEWS_CONFIG = [
    {
        title: "Recent Events",
        config: [
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
    },{
        title: "Grinntech Endorsement",
        config: [
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
    },{
        title: "Grinntech Press releases",
        config: [
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
    },{
        title: "Grinntech in Media",
        config: [
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
    },{
        title: "Blogs",
        config: [
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
    },
]

const News = () =>{
    return(
        <div className="px-4 py-4 text-2xl text-center text-green-450">
            <section className="p-16">
            <Heading text="News" />
            {
                NEWS_CONFIG.map((item, key)=>{
                    return(
                        <div key={key} className="mb-8">
                          <Slide left>
                            <h2 className="text-left text-gray-900">{item.title}</h2>
                          </Slide>
                            <SimpleSlider
                                dots={false}
                                slidesToShow={3}
                                slidesToScroll={3}
                                config={item.config}
                            >
                              {
                                item.config.map((item,key)=>{
                                  return(
                                    renderItems(item)
                                  )
                                })
                              }
                              </SimpleSlider>
                        </div>
                    )
                })
            }
            </section>
        </div>
    )
}

export default News;