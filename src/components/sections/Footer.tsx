import React from "react";
import logo from "@/assets/logosaas.png";
import twiter from "@/assets/social-x.svg";
import insta from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";
import YT from "@/assets/social-youtube.svg";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center ">
      <div className="container ">
        <div className="inline-flex relative before:h-full before:content-[''] before:bg-red-500 before:absolute ">
          <Image src={logo} height={40} alt="sass logo" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Customers</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Image
            src={twiter}
            width={60}
            height={60}
            alt="twitter"
            className="h-7 w-7"
          />
          <Image src={insta} alt="insta" className="h-7 w-7" />
          <Image src={Linkedin} alt="linkedin" className="h-7 w-7" />
          <Image src={Pin} alt="pin" className="h-7 w-7" />
          <Image src={YT} alt="YT" className="h-7 w-7" />
        </div>
        <p className="mt-6">&copy; 2024 Mehdi Fadaei.</p>
      </div>
    </footer>
  );
};

export default Footer;
