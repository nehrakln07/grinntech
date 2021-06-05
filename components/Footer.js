import React from 'react';
import FbIcon from "../public/assets/fb.svg";
import TwitteIcon from "../public/assets/twitter.svg";
import LinkedinIcon from "../public/assets/linkedin.svg";
import YoutubeIcon from "../public/assets/youtube.svg";
import MailIcon from "../public/assets/mail.svg";

const SocialLinks = [{
    alt: "Facebook",
    image: FbIcon,
    url: "/"
},{
    alt: "Twitter",
    image: TwitteIcon,
    url: "/"
},{
    alt: "Linkedin",
    image: LinkedinIcon,
    url: "/"
},{
    alt: "Youtube",
    image: YoutubeIcon,
    url: "/"
},{
    alt: "Email",
    image: MailIcon,
    url: "/"
}]
const Footer = () =>{
    return(
        <footer className="bg-gray-800 border-t-8 border-green-450 text-gray-400">
            <div className="flex flex-wrap justify-between p-8">
                <div className="flex w-3/4">
                    <div className="w-1/5 p-2 border-r border-green-450">
                        <ul>
                            <li className="p-2">
                                <a href="/">Home</a>
                            </li>
                            <li className="p-2">
                                <a href="/about-us">About Us</a>
                            </li>
                            <li className="p-2">
                                <a href="/blogs">Blogs</a>
                            </li>
                            <li className="p-2">
                                <a href="/contact-us">Contact US</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-2/5 px-4">

                    </div>
                    <div className="w-2/5">
                        <div className="">
                            <h3 className="text-xl text-white">Grinntech Motors & Services Pvt. Ltd</h3>
                            <div className="pt-2 text-xl">
                                <p>11B/1, 1st Cross Road</p>
                                <p>Ambattur Industrial Estate</p>
                                <p> Chennai - 600058</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 p-4 border-l border-green-450">
                    <div className="text-4xl text-bold border-b pb-4 mb-8 border-green-450" >
                        <div className="text-white">Let<span className="text-green-450">'</span>s</div>
                        <div className="text-green-450">Connect</div>
                    </div>
                    <div className="social flex">
                        {
                            SocialLinks.map((item, key)=>{
                                return(
                                    <a className="pr-2" href="item.url" target="_blank">
                                        <img src={item.image} alt={item.alt} style={{width:'30px', height:'30px'}} />
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-full p-2">
                    <p className="m-0 text-sm">Copyright © 2020 Grinntech Motors & Services Pvt. Ltd. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;