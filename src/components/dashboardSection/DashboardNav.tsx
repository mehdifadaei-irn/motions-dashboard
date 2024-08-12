import React from "react";
import Image from "next/image";

import Logo from "@/assets/logosaas.png";
import avatar from "@/assets/avatar.png";

import { Bell } from "lucide-react";

import DynamicToolbar from "./DynamicToolbar";
import Link from "next/link";
import Avatar from "./Avatar";

const DashboardNav = () => {
  return (
    <nav className="flex h-14">
      <div className="w-full flex flex-row justify-between items-center sm:px-10 px-2 py-3">
        <div className="flex items-center">
          <Link href={"/"} className="md:flex hidden items-center flex-row">
            <Image src={Logo} alt="Sass logo" height={33} width={33} />
            <p className="ml-2 font-bold text-lg ">MehdiFadaei</p>
          </Link>
          <DynamicToolbar />
        </div>
        <div className="flex gap-x-6 items-center">
          <div className="rounded-full bg-slate-300/50 hover:bg-slate-300 p-1.5 cursor-pointer transition-all duration-300">
            <Bell
              size={23}
              className="hover:text-blue-500 text-neutral-800/60"
            />
          </div>
          <Avatar />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
