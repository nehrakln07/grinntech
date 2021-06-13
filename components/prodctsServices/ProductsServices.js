import React, { useState } from 'react';
import Heading from "../Heading";

import Proprietary from "./Proprietary";
import CustomDev from "./customeDev";
import BatteryAnalytics from "./BatteryAnalytics";

const TAB_CONFIG = [
    {
        component: () => <Proprietary />,
        label: 'Proprietary Products',
    },{
        component: () => <CustomDev />,
        label: 'Custom Development',
    },{
        component: () => <BatteryAnalytics />,
        label: 'Battery Analytics',
    }
]

const ProductsServices = () =>{
    const [activeKey, setActiveKey] = useState(0);
    const onChangeTab = (key) => setActiveKey(key);
    return(
        <div className="container py-8">
            <Heading text="Powering the transformation of mobility" style={{fontSize: '1.5rem!important', lineHeight: '2rem!important'}} />
            <div className="text-4xl font-light">
                <p>Grinntech offer a large range of batteries and BMS to suit a variety of applications</p>
            </div>
            <div className="tab-container mt-8">
                <div className="px-0 sm:px-16 sticky top-24 bg-white z-20">
                    <ul className="rc-tab">
                    {
                    TAB_CONFIG.map((tab, key)=>{
                        return(
                            <li className={`rc-tab-nav ${activeKey===key ? "active" : ''}` } onClick={()=>onChangeTab(key)} key={key}>
                                {tab.label}
                            </li>
                        )
                    })  
                    }
                    </ul>
                </div>
                <div className="tab-content">
                {TAB_CONFIG[activeKey].component()}
                </div>
            </div>
        </div>
    )
}

export default ProductsServices;