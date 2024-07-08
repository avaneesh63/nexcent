import React from "react";
import client1 from "../../../public/images/client1.svg";
import client2 from "../../../public/images/client2.svg";
import client3 from "../../../public/images/client3.svg";
import client4 from "../../../public/images/client4.svg";
import client5 from "../../../public/images/client5.svg";
import client6 from "../../../public/images/client6.svg";
import client7 from "../../../public/images/client7.svg";
import member from "../../../public/images/member.svg";
import national from "../../../public/images/national.svg";
import group from "../../../public/images/group.svg";
import rafiki from "../../../public/images/rafiki.svg";
import event from "../../../public/images/event.svg";
import payment from "../../../public/images/payment.svg";
import members from "../../../public/images/members.svg";
import pana from "../../../public/images/pana.svg";
import tesla from "../../../public/images/tesla.svg";
import marketing1 from "../../../public/images/marketing1.svg";
import marketing2 from "../../../public/images/marketing2.svg";
import marketing3 from "../../../public/images/marketing3.svg";
import arrow from "../../../public/images/arrow.svg";
import whitearrow from "../../../public/images/whitearrow.svg";

import Image from "next/image";
const Client = () => {
  const clientImg = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
  ];
  const cardData = [
    {
      imageUrl: member,
      heading: "Membership Organisations",
      subHeading:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imageUrl: national,
      heading: "National Associations",
      subHeading:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imageUrl: group,
      heading: "Clubs And Groups",
      subHeading:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  const marketingCards = [
    {
      imageUrl: marketing1,
      content: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      imageUrl: marketing2,
      content:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      imageUrl: marketing3,
      content: "Revamping the Membership Model with Triathlon Australia",
    },
  ];
  return (
    <div className="flex flex-col pt-[5rem]">
      <div className="flex flex-col justify-center items-center pl-[10rem] pr-[10rem]">
        <span className=" text-[#4D4D4D] text-[3.6rem] font-semibold">
          Our Clients
        </span>
        <span className=" text-[#717171] text-[1.6rem]">
          We have been working with some Fortune 500+ clients
        </span>
      </div>
      <div className="flex gap-[10rem] justify-center mt-[3rem] pl-[10rem] pr-[10rem]">
        {clientImg.map((imgUrl) => (
          <Image src={imgUrl} alt="client" />
        ))}
      </div>
      <div className="flex flex-col  items-center mt-[5rem] pl-[10rem] pr-[10rem]">
        <span className="text-[#4D4D4D] text-[3.6rem] font-semibold">
          Manage your entire community{" "}
        </span>
        <span className="text-[#4D4D4D] text-[3.6rem] font-semibold">
          in a single system
        </span>
        <span className="text-[#717171] font-normal text-[1.6rem]">
          Who is Nextcent suitable for?
        </span>
      </div>
      <div className="flex justify-center gap-[3rem] items-center mt-[3rem] pl-[10rem] pr-[10rem]">
        {cardData.map((data) => (
          <div className="flex flex-col items-center justify-center w-[30%]">
            <Image src={data.imageUrl} alt="img" />
            <span className="w-[50%] text-center text-[2.8rem] font-bold text-[#4D4D4D]">
              {data.heading}
            </span>
            <span className="text-center text-[#717171] text-[1.4rem] font-normal">
              {data.subHeading}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-[10rem] pl-[10rem] pr-[10rem]">
        <Image src={rafiki} alt="" className="h-[43.3] w-[44.2]" />
        <div className="flex flex-col gap-[5rem]">
          <div className="flex flex-col justify-center gap-[1rem]">
            <span className="text-[#4D4D4D] text-[3.6rem] font-semibold">
              The unseen of spending three years at Pixelgrade
            </span>
            <span className="text-[#717171] font-normal text-[1.4rem]">
              When joining the JustGo Community, your success becomes our
              success. In other words, our Customer Success team will be on hand
              from day one to ensure we understand your requirements, share your
              goals and work with you for a smooth adoption of our software.
            </span>
          </div>
          <button className="bg-[#4CAF4F] text-[1.4rem] text-white rounded-[0.6rem] h-[4rem] w-[15.1rem]">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex mt-[10rem] bg-[#F5F7FA] p-[10rem]">
        <div className="flex flex-col w-[50%]">
          <span className="text-[#4D4D4D] text-[3.6rem] font-semibold">
            Helping a local
          </span>
          <span className="text-[#4CAF4F] text-[3.6rem] font-semibold">
            business reinvent itself
          </span>
          <span className="text-[#18191F] text-[1.6rem] font-normal">
            We reached here with our hard work and dedication
          </span>
        </div>
        <div className="flex flex-col w-[50%] gap-[3rem]">
          <div className="flex">
            <div className="flex items-center gap-[1.5rem] w-[50%]">
              <Image src={members} alt="" />
              <div className="flex flex-col">
                <span className="text-[#4D4D4D] text-[2.6rem] font-bold">
                  2,245,341
                </span>
                <span className="text-[#717171] text-[1.4rem] font-normal">
                  Members
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[1.5rem]">
              <Image src={group} alt="" />
              <div className="flex flex-col">
                <span className="text-[#4D4D4D] text-[2.6rem] font-bold">
                  46,328
                </span>
                <span className="text-[#717171] text-[1.4rem] font-normal">
                  Clubs
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center gap-[1.5rem] w-[50%]">
              <Image src={event} alt="" />
              <div className="flex flex-col">
                <span className="text-[#4D4D4D] text-[2.6rem] font-bold">
                  828,867
                </span>
                <span className="text-[#717171] text-[1.4rem] font-normal">
                  Event Bookings
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[1.5rem]">
              <Image src={payment} alt="" />
              <div className="flex flex-col">
                <span className="text-[#4D4D4D] text-[2.6rem] font-bold">
                  1,926,436
                </span>
                <span className="text-[#717171] text-[1.4rem] font-normal">
                  Payments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[5rem] pl-[10rem] pr-[10rem]">
        <Image src={pana} alt="" className="h-[43.3] w-[44.2]" />
        <div className="flex flex-col gap-[5rem]">
          <div className="flex flex-col justify-center gap-[1rem]">
            <span className="text-[#4D4D4D] text-[3.6rem] font-semibold">
              How to design your site footer like we did
            </span>
            <span className="text-[#717171] font-normal text-[1.4rem]">
              One event calendar shared across National, Regional and Club
              events to simplify your event experience. Allowing you to create
              waiting lists, share data capture, issue credential for course
              completion, apply smart purchasing rules and much more.
            </span>
          </div>
          <button className="bg-[#4CAF4F] text-[1.4rem] text-white rounded-[0.6rem] h-[4rem] w-[15.1rem]">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex mt-[10rem] bg-[#F5F7FA] p-[5rem] pl-[10rem] pr-[10rem] justify-center items-center gap-[3rem]">
        <Image src={tesla} alt="" />
        <div className="flex flex-col justify-center gap-[1rem]">
          <span className="text-[#717171] text-[1.6rem] font-medium">
            “We have enjoyed working with the JustGo system to setup and go live
            with our new membership platform. The initial effort to organise it
            along the lines of how our sport currently works was quick and
            relatively easy. The new system has already massively improved the
            time and effort it takes to setup and process member and club
            applications. It will help us to communicate with people in our
            sport in a much more effective way, and collect data to help us
            improve how our sport is governed.”
          </span>
          <div className="flex flex-col">
            <span className="text-[#4CAF4F] text-[2rem] font-semibold">
              Tim Smith
            </span>
            <span className="text-[#89939E] text-[1.6rem]">
              British Dragon Boat Racing Association
            </span>
          </div>
          <div className="flex gap-[3rem]">
            {clientImg.map((imgUrl) => (
              <Image src={imgUrl} alt="client" className="h-[3rem] w-[3rem]" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pl-[10rem] pr-[10rem] mt-[5rem]">
        <span className=" text-[#4D4D4D] text-[3.6rem] font-semibold">
          Caring is the new marketing
        </span>
        <span className=" text-[#717171] text-[1.6rem] w-[60%]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </span>
      </div>

      <div className="flex gap-[3rem] w-full justify-center mt-[2rem] pl-[10rem] pr-[10rem]">
        {marketingCards.map((data) => (
          <div className="relative w-[36.8rem] h-[28.6rem] p-[1rem]">
            <Image src={data.imageUrl} alt="" />
            <div className="bg-[#F5F7FA] absolute bottom-[2%] left-[10%] w-[80%] rounded-[0.8rem] flex flex-col items-center h-[10.6rem]">
              <div className="flex flex-col justify-center items-center h-full gap-[1rem]">
                <span className="text-[#717171] text-[1.5rem] text-center">
                  {data.content}
                </span>
                <div className="flex">
                  <span className="text-[#4CAF4F] text-[1.5rem]">
                    Read More
                  </span>
                  <Image src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-[10rem] bg-[#F5F7FA] p-[5rem] pl-[10rem] pr-[10rem] justify-center items-center gap-[3rem]">
        <div className="flex flex-col text-center">
          <span className="text-[#263238] text-[6.4rem] font-semibold">
            Pellentesque suscipit{" "}
          </span>
          <span className="text-[#263238] text-[6.4rem] font-semibold">
            fringilla libero eu.
          </span>
        </div>
        <button className="bg-[#4CAF4F] text-[1.4rem] text-white rounded-[0.6rem] h-[4rem] w-[17.8rem] flex items-center justify-center gap-[0.5rem]">
          Get a Demo
          <Image src={whitearrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Client;
