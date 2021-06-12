import React from 'react';
import Heading from "../Heading";

const CONFIG = [{
    heading: '3-wheeler battery',
    icons: [
        '/assets/Products/icons/cycle.png'
    ],
    features: [
        {
            icon:'/assets/Products/icons/cycle.png',
            text:'High Capacity',
            description: 'Charges 80% in 1 hour',
        }
    ],
    knowMore: true,
    specification: {
        heading: "PINTAIL",
        data: [{
            key: "Voltage",
            value: "12V"
        },{
            key: "Capacity",
            value: "5/7.6Ah"
        }]
    },
    rightIcon: '/assets/Products/Pintail Final 1.png',
    
}]

const BlockComponent = (props) =>{
    const {heading, icons,features, knowMore, specification, rightIcon} = props;
    return(
        <div className="w-full">
            <div className="w-full flex justify-between">
                <h3 className="">{heading}</h3>
                <div className="flex flex-end">
                    {
                        icons.map((item, key)=>{
                            return(
                                <img src={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-full flex justify-between flex-wrap">
                <div className="w-full sm:w-1/4">
                    {
                        features.map((item, key)=>{
                            return(
                                <div key={key} className="w-full flex">
                                    <div className="w-1/4">
                                        <img src={item.icon} />
                                    </div>
                                    <div className="w-3/4">
                                        <h4 className="">{item.heading}</h4>
                                        <p className="">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        knowMore && <button className="px-2 py-3">Know More</button>
                    }
                </div>
                {
                    specification &&
                    <div className="w-full sm:w-1/4">
                        <h3 className="">{specification.heading}</h3>
                        {
                            specification.data.map((item, key)=>{
                                return(
                                    <div className="flex justify-between" key={key}>
                                        <span className="">{item.key}</span>
                                        <span className="">{item.value}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                <div className="w-full sm:w-2/5">
                    <img src={rightIcon} />
                </div>
            </div>
        </div>
    )
}

const Proprietary = () =>{
    return(
        <div className="px-4 py-32 text-2xl text-center text-green-450">
            <div className="details">
                {
                    CONFIG.map((item, key)=>{
                        return(
                            <BlockComponent {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Proprietary;