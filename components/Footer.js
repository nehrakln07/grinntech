import React from "react";
import Reveal from 'react-reveal/Reveal';
import FbIcon from "../public/assets/fb.svg";
import TwitteIcon from "../public/assets/twitter.svg";
import LinkedinIcon from "../public/assets/linkedin.svg";
import YoutubeIcon from "../public/assets/youtube.svg";
import MailIcon from "../public/assets/mail.svg";

const SocialLinks = [
  {
    alt: "Facebook",
    image: FbIcon,
    url: "/",
  },
  {
    alt: "Twitter",
    image: TwitteIcon,
    url: "/",
  },
  {
    alt: "Linkedin",
    image: LinkedinIcon,
    url: "/",
  },
  {
    alt: "Youtube",
    image: YoutubeIcon,
    url: "/",
  },
  {
    alt: "Email",
    image: MailIcon,
    url: "/",
  },
];
const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t-8 border-green-450 text-gray-400">
      <div className="container">
        <div class="flex justify-between flex-wrap w-full pt-8 border-b border-white">
          <div className="w-full sm:w-1/2 flex flex-start flex-wrap">
            <div class="w-full sm:w-1/2">
              <Reveal effect="fadeInUp">
                <h2 className="text-white text-sm font-medium mb-2">
                  Grinntech Motors & Services Pvt. Ltd.
                </h2>
                <p className="text-xs leading-6 text-white opacity-70 font-light">
                  11B/1, 1st Cross Road
                  <br />
                  Ambattur Industrial Estate
                  <br />
                  Chennai - 600058
                </p>
              </Reveal>
            </div>
            <div className="w:full sm:w-1/2 px-4">
              <Reveal effect="fadeInUp">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    // height="200"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=grinntech%20motors%20and%20services&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                  <a href="https://www.google.com/maps/place/Grinntech+Motors+%26+Services+Pvt.+Ltd./@13.095729,80.162676,13z/data=!4m5!3m4!1s0x0:0xd00b0bd5ad346d96!8m2!3d13.095545!4d80.1626649?hl=en-US"></a>
                  <br />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="w:full sm:w-1/5 text-xs text-white opacity-70">
            <Reveal effect="fadeInUp">
              <ul>
                <li className="pl-2">
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
            </Reveal>
          </div>
          <div className="w:full sm:w-1/5 ">
            <div className="text-2xl text-white font-medium mb-8">
              Let's Connect
            </div>
            <Reveal effect="fadeInUp">
              <div className="social flex">
                {SocialLinks.map((item, key) => {
                  return (
                    <a className="pr-3" href="item.url" target="_blank">
                      <img
                        src={item.image}
                        alt={item.alt}
                        style={{ width: "25px", height: "25px" }}
                      />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
        <div className="w-full p-4 text-center">
          <p className="m-0 text-sm">
            Copyright © 2020 Grinntech Motors & Services Pvt. Ltd. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
