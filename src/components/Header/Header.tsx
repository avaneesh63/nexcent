import React from "react";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navItems = [
    { item: "Home", link: "/" },
    { item: "Service", link: "/" },
    { item: "Feature", link: "/" },
    { item: "Product", link: "/" },
    { item: "Testimonial", link: "/" },
    { item: "FAQ", link: "/" },
  ];
  return (
    <div className="p-[2rem] justify-between flex items-center pl-[8rem] pr-[8rem] bg-[#F5F7FA]">
      <div className="flex gap-1 items-center">
        <Image src={logo} alt="logo" />
        <span className="text-[#263238] font-bold text-[2rem]">Nexcent</span>
      </div>
      <div className="flex gap-[5rem] items-center">
        {navItems.map((items) => (
          <Link href={items.link} className="text-[1.6rem]">
            {items.item}
          </Link>
        ))}
      </div>
      <div className="flex gap-[3rem] items-center">
        <span className="text-[#4CAF4F] text-[1.4rem]">Login</span>
        <button className="bg-[#4CAF4F] text-[1.4rem] text-white rounded-[0.6rem] h-[4rem] w-[9.1rem]">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Header;
