import React, {useState} from 'react';
import { useRouter } from 'next/router'

import LogoIcon from "../public/assets/logo.svg"

const HeaderConfig = [{
    url: "/",
    name: "Home",
    subLink: [{
        url: "/about-us",
        name: "About US"
    },{
        url: "/about-us",
        name: "About US"
    },{
        url: "/about-us",
        name: "About US"
    },{
        url: "/about-us",
        name: "About US"
    }]
},{
    url: "/about-us",
    name: "About US"
},{
    url: "/products-services",
    name: "Products & Services"
},{
    url: "/news",
    name: "News"
},{
    url: "/career",
    name: "Join Us"
}]

const Header = (childeren) =>{
    const [isHover,setISHover] = useState(false)
    const router = useRouter();
    console.log(isHover);

    const mouseEnter = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        console.log("enter");
        setISHover(true);
    }
    const mouseLeave = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        console.log('leave');
        setISHover(false);
    }
    return(
        <header className="sticky top-0 bg-white w-full z-50">
            <div className="relative w-full py-5 px-8 flex justify-between">
                <div className="flex items-center">
                    <a href="/">
                        <img src={LogoIcon} />
                    </a>
                    <span className="pl-2 text-lg italic">Performance matter</span>
                </div>
                <div 
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                >
                <ul 
                    className="flex items-center text-lg text-black border-b border-gray-200"
            
                    >
                    {
                        HeaderConfig.map((item, key)=>{
                            return(
                                <li key={key}
                    
                                 className={`py-4 px-8 relative ${router.asPath === item.url ? 'font-bold border-b-4 border-green-450 transform scale-x-100' : ''}`}>
                                    <a href={item.url}>{item.name}</a>
                                    {
                                        item.subLink && item.subLink.length && isHover &&
                                        <ul key={key} className="absolute mt-10 z-30">
                                            {
                                                item.subLink.map((item, index)=>{
                                                    return(
                                                        <li key={index} className={`py-2 ${router.asPath === item.url ? 'font-bold border-b-4 border-green-450' : ''}`}>
                                                            <a href={item.url}>{item.name}</a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
                {
                    isHover &&
                    <div className="absolute z-20 left-0 right-0 top-0 h-24 bg-red">
                    
                    </div>
                }
            </div>
        </header>
    )
}

export default Header;