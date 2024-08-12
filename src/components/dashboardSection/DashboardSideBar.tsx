"use client";

import {
  AlignJustify,
  Armchair,
  Building2,
  ClipboardList,
  LineChart,
  LogOut,
} from "lucide-react";
import AnimatedBackground from "../ui/animatedBg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const DashboardSideBar = (props: any) => {
  const pathname = usePathname();
  const [window, setWindow] = useState(true);

  return (
    <>
      {/* <div
        onClick={() => {
          console.log("w");
          setWindow((prev) => !prev);
        }}
        className="flex md:hidden fixed left-0  w-8 h-8 z-40 rounded-r-lg justify-center items-center mt-1.5  border border-neutral-900 p-[2px] "
      >
        <AlignJustify />
      </div> */}
      <section
        className={`  z-30 md:w-64 sm:w-14 w-11   transition-all duration-500 ease-linear `}
      >
        <div
          className={`pr-3 md:pl-5 pt-10 flex flex-col justify-between h-full pb-5 `}
        >
          <ul className={`flex flex-col gap-y-2 `}>
            <AnimatedBackground
              className="rounded-lg bg-zinc-100 bg-[#38bdf8]/60"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.3,
              }}
              enableHover
            >
              {/*  */}
              <Link
                href={"/dashboard"}
                data-id={"Dashboard"}
                className={cn(
                  "lispan sm:justify-between flex justify-center items-center  cursor-pointer flex-row text-zinc-600 transition-colors duration-300  dark:text-zinc-400 dark:hover:text-zinc-50 px-3 py-1.5",
                  {
                    activeDashboardLink: pathname == "/dashboard",
                  }
                )}
              >
                <Armchair size={21} />
                <span className="font-medium md:block max-md:!hidden tracking-wide text-neutral-900 ">
                  Dashboard
                </span>
              </Link>
              <Link
                href={"/dashboard/companies"}
                data-id={"Companies"}
                className={cn(
                  "lispan sm:justify-between flex justify-center items-center cursor-pointer  flex-row text-zinc-600 transition-colors duration-300  dark:text-zinc-400 dark:hover:text-zinc-50 px-3 py-1.5",
                  {
                    activeDashboardLink: pathname == "/dashboard/companies",
                  }
                )}
              >
                <Building2 size={21} />
                <span className="font-medium  md:block max-md:!hidden tracking-wide text-neutral-900 ">
                  Companies
                </span>
              </Link>
              <Link
                href={"/dashboard/tasks"}
                data-id={"Tasks"}
                className={cn(
                  "lispan sm:justify-between flex justify-center items-centern cursor-pointer flex-row text-zinc-600 transition-colors duration-300  dark:text-zinc-400 dark:hover:text-zinc-50 px-3 py-1.5",
                  {
                    activeDashboardLink: pathname == "/dashboard/tasks",
                  }
                )}
              >
                <ClipboardList size={21} />
                <span className="font-medium  md:block max-md:!hidden  tracking-wide text-neutral-900  ">
                  Tasks
                </span>
              </Link>
            </AnimatedBackground>
          </ul>
          {/* <div
            data-id={"LogOut"}
            className="lispan justify-between cursor-pointer rounded-lg  hover:bg-red-400 flex-row text-zinc-600 transition-colors duration-300 dark:text-zinc-800 dark:hover:text-zinc-800 px-3 py-1.5 flex"
          >
            <LogOut size={21} />
            <span className="font-medium tracking-wide text-neutral-900 ">
              LogOut
            </span>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default DashboardSideBar;
