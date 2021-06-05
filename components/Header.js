import React from 'react';
import { useRouter } from 'next/router'

import LogoIcon from "../public/assets/logo.svg"

const HeaderConfig = [{
    url: "/",
    name: "Home"
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
    const router = useRouter()
    return(
        <header className="sticky top-0 bg-white w-full z-50">
            <div className="w-full py-5 px-8 flex justify-between">
                <div className="flex items-center">
                    <a href="/">
                        <img src={LogoIcon} />
                    </a>
                    <span className="pl-2 text-lg italic">Performance matter</span>
                </div>
                <ul className="flex items-center text-lg text-black border-b border-gray-200">
                    {
                        HeaderConfig.map((item, key)=>{
                            return(
                                <li className={`p-4 ${router.asPath === item.url ? 'font-bold border-b-4 border-green-450' : ''}`}>
                                    <a href={item.url}>{item.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header;