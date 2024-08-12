"use client";
import React, { useRef } from "react";
import ArrowRight from "@/assets/arrow-right-black.svg";
import CogImage from "@/assets/cog.png";
import Cylinder from "@/assets/cylinder.png";
import nodledIm from "@/assets/noodle.png";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // useMotionValueEvent(translateY, "change", (lv) => {
  //   console.log(lv);
  // });

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center ">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.9 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis harum eius ullam! Eligendi excepturi, facere
              laboriosam facilis deleniti repellendus, error saepe minus omnis,
              cum nesciunt harum necessitatibus dignissimos commodi perferendis.
              Iste laborum nesciunt praesentium alias suscipit hic repudiandae,
              minima aspernatur?
            </p>
            <div className="flex gap-1 items-center mt-[30px] ">
              <button className="btn">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <Image
                  src={ArrowRight}
                  alt="arrow"
                  width={70}
                  height={70}
                  className="h-5 w-5 inline-flex pt-px justify-center items-center"
                />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
            <motion.img
              src={CogImage.src}
              alt="cog iamge"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0  "
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={Cylinder.src}
              width={220}
              height={220}
              alt="Cylinder iamge"
              className="hidden md:block -top-8 -left-32 md:absolute "
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={nodledIm.src}
              width={220}
              height={220}
              alt="noodled iamge"
              className="absolute top-[524px] left-[448px] hidden lg:block rotate-[30deg] "
              style={{
                rotate: "30deg",
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
