// components/Carousel.js
"use client";
import { useState, useEffect } from "react";
import CarouselImg from "../../../public/images/CarouselImg1.svg";
import Image from "next/image";

const carouselData = [
  {
    heading: "Lessons and insights",
    subHeading: "from 8 years",
    miniHeading:
      "Where to grow your business as a photographer: site or social media?",
    imageUrl: CarouselImg,
  },
  {
    heading: "Lessons and insights",
    subHeading: "from 8 years",
    miniHeading:
      "Where to grow your business as a photographer: site or social media?",
    imageUrl: CarouselImg,
  },
  {
    heading: "Lessons and insights",
    subHeading: "from 8 years",
    miniHeading:
      "Where to grow your business as a photographer: site or social media?",
    imageUrl: CarouselImg,
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#F5F7FA] p-[2rem]">
      <div className="flex w-full h-full justify-center">
        <div className="flex flex-col justify-center">
          <span className="text-[#4D4D4D] font-semibold text-[6.4rem]">
            {carouselData[currentSlide].heading}
          </span>
          <span className="text-[#4CAF4F] font-semibold text-[6.4rem]">
            {carouselData[currentSlide].subHeading}
          </span>
          <span className="text-[#717171] text-[1.6rem]">
            {carouselData[currentSlide].miniHeading}
          </span>
          <button className="bg-[#4CAF4F] text-[1.4rem] text-white rounded-[0.6rem] h-[4rem] w-[9.1rem] mt-[3rem]">
            Register
          </button>
        </div>
        <div className="flex items-center">
          <Image src={carouselData[currentSlide].imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
