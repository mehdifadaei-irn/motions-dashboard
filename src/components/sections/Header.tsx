import React from "react";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import AnimatedBackground from "../ui/animatedBg";
import Link from "next/link";

const TABS = ["About", "Features", "Dashboard", "Update", "Help"];

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 ">
        <p className="text-white/60 hidden md:block">
          I am Mehdi Fadaei Front end developer
        </p>
        <a
          href="https://online.publuu.com/608965/1362716"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
          className="inline-flex gap-1 items-center"
        >
          <p>Get My Resume</p>
          <Image
            src={ArrowRight}
            alt="arrow"
            width={70}
            height={70}
            className="h-5 w-5 inline-flex pt-px justify-center items-center"
          />
        </a>
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
              <div className="flex flex-row">
                <AnimatedBackground
                  defaultValue={TABS[2]}
                  className="rounded-lg bg-[#38bdf8]/60  dark:bg-zinc-800"
                  transition={{
                    type: "spring",
                    bounce: 0.1,
                    duration: 0.2,
                  }}
                  enableHover
                >
                  {TABS.map((tab, index) => (
                    <Link
                      key={index}
                      data-id={tab}
                      href={"/dashboard"}
                      // type="button"
                      className="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-500"
                    >
                      {tab}
                    </Link>
                  ))}
                </AnimatedBackground>
              </div>
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
