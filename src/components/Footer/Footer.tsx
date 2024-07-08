import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.svg";
import youtube from "../../../public/images/youtube.svg";
import ball from "../../../public/images/vall.svg";
import twitter from "../../../public/images/twitter.svg";
import insta from "../../../public/images/insta.svg";
import send from "../../../public/images/send.svg";

const Footer = () => {
  const socialMediaImg = [insta, ball, twitter, youtube];
  const footerItems = [
    {
      heading: "Company",
      items: ["About Us", "Blog", "Contact Us", "Pricing", "Testimonials"],
    },
    {
      heading: "Support",
      items: [
        "Help center",
        "Terms of service",
        "Legal",
        "Privacy policy",
        "Status",
      ],
    },
  ];
  return (
    <div className="bg-[#263238] w-full p-[6rem] pl-[10rem] pr-[10rem] h-[32.8rem] flex justify-between">
      <div className="flex flex-col gap-[5rem]">
        <div className="flex gap-[0.5rem]">
          <Image src={logo} alt="" />
          <span className="text-white text-[2.8rem] font-bold">Nexcent</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-[1.4rem] font-normal">
            Copyright © 2020 Landify UI Kit.
          </span>
          <span className="text-white text-[1.4rem] font-normal">
            All rights reserved
          </span>
        </div>
        <div className="flex gap-[2rem]">
          {socialMediaImg.map((img) => (
            <div className="bg-[#6D7A8C] rounded-[50%] relative z-[1] p-[1rem]">
              <Image
                src={img}
                alt=""
                className="relative z-[5] w-[1.7rem] h-[1.7rem]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-[7rem]">
        {footerItems.map((footerData) => (
          <div className="flex flex-col gap-[2rem]">
            <span className="text-white font-semibold text-[2rem]">
              {footerData.heading}
            </span>
            <div className="flex flex-col gap-[1rem]">
              {footerData.items.map((data) => (
                <span className="text-[#F5F7FA] text-[1.4rem] font-normal">
                  {data}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-[2rem]">
          <span className="text-white font-semibold text-[2rem]">
            Stay up to date
          </span>
          <div className="relative">
            <input
              type="text"
              placeholder="Your email address"
              className="rounded-[0.8rem] h-[4rem] w-[25.5rem] bg-[#6D7A8C]  text-[1.4rem] text-[#D9DBE1] pl-[1rem] font-normal"
            />
            <Image
              src={send}
              alt=""
              className="absolute right-[5%] top-[30%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
