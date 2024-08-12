"use client";
import React from "react";
import acmelogo from "@/assets/logo-acme.png";
import quantomlogo from "@/assets/logo-quantum.png";
import echologo from "@/assets/logo-echo.png";
import pulselogo from "@/assets/logo-pulse.png";
import apexlogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white ">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]  ">
          <motion.div
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-14 flex-none pr-14"
          >
            <Image src={acmelogo} alt="acme logo" className="logo-ticker" />
            <Image
              src={quantomlogo}
              alt="quantom logo"
              className="logo-ticker"
            />
            <Image src={echologo} alt="echo logo" className="logo-ticker" />
            <Image src={pulselogo} alt="pulse logo" className="logo-ticker" />
            <Image src={apexlogo} alt="apex logo" className="logo-ticker" />
            {/* Sec */}
            <Image src={acmelogo} alt="acme logo" className="logo-ticker" />
            <Image
              src={quantomlogo}
              alt="quantom logo"
              className="logo-ticker"
            />
            <Image src={echologo} alt="echo logo" className="logo-ticker" />
            <Image src={pulselogo} alt="pulse logo" className="logo-ticker" />
            <Image src={apexlogo} alt="apex logo" className="logo-ticker" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
