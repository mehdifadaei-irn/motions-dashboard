"use client";
import React from "react";
import { testimonials } from "../sections/Testimonials";

import Image from "next/image";

import { motion } from "framer-motion";

const TestmonialCol = (props: {
  className?: string;
  testmonials: typeof testimonials;
  duration: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className={`flex flex-col gap-6 pb-6 `}
      >
        {[...new Array(2)].fill(0).map((_, i) => (
          <React.Fragment key={i}>
            {props.testmonials.map((tes, i) => (
              <div key={i} className="card">
                <div className="">{tes.text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={tes.imageSrc}
                    alt={tes.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {tes.name}
                    </div>
                    <div className="leading-5 tracking-tight">
                      {tes.username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestmonialCol;
