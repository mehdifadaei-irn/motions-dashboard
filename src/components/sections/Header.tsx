import React from "react";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 ">
        <p className="text-white/60 hidden md:block">
          I am Mehdi Fadaei Front end developer
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get My Resume</p>
          <Image
            src={ArrowRight}
            alt="arrow"
            width={70}
            height={70}
            className="h-5 w-5 inline-flex pt-px justify-center items-center"
          />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="Sass logo" height={40} width={40} />
            <Image
              src={MenuIcon}
              alt="arrow"
              width={70}
              height={70}
              className="h-8 w-8 inline-flex pt-px justify-center items-center md:hidden"
            />
            <nav className="hidden md:flex gap-6 text-black/60 items-center ">
              <a href="">About</a>
              <a href="">Features</a>
              <a href="">Customers</a>
              <a href="">Update</a>
              <a href="">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight ">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
