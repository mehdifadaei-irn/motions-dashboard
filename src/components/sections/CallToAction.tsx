"use client";
import React, { useRef } from "react";
import arrowRight from "@/assets/arrow-right-black.svg";
import statImg from "@/assets/star.png";
import springImg from "@/assets/spring.png";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

const CallToAction = () => {
  const sctionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sctionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [350, -350]);

  return (
    <section
      ref={sctionRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] overflow-x-clip py-24"
    >
      <div className="container">
        <div className="max-w-[600px] mx-auto relative">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
            Sign up for free today
          </h2>
          <p className="text-center mt-5 text-[22px] leading-[30px] tracking-tight text-[#010d3e]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            porro, vero culpa laudantium, enim voluptate ea excepturi saepe
            facere ut ipsum explicabo suscipit omnis!
          </p>
          <motion.img
            src={statImg.src}
            alt="Start image"
            width={360}
            className="absolute -left-[350px] -top-[136px]"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={springImg.src}
            alt="spring image"
            width={360}
            className=" absolute -right-[331px] -top-[19px]"
            style={{
              translateY: translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center ">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            <span>Learn more</span>
            <Image src={arrowRight} alt="arrow right" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
