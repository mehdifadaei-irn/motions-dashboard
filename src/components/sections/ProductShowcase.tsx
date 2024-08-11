import React from "react";
import pyrmidImage from "@/assets/pyramid.png";
import prodimage from "@/assets/product-image.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b overflow-x-clip from-white to-[#d2dcff] py-24">
      <div className="container">
        <div className="max-w-[600px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost you productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5   ">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
            accusamus esse. Unde praesentium mollitia rerum quo voluptates
            adipisci aliquam natus?
          </p>
        </div>
        <div className="relative">
          <Image src={prodimage} alt="prod image" className="mt-10 " />
          <Image
            src={pyrmidImage}
            alt="pyramid"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt="tube image"
            height={248}
            className="absolute hidden md:block bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
