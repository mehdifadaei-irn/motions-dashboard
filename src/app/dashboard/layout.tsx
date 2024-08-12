import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import DashboardNav from "@/components/dashboardSection/DashboardNav";
import DashboardSideBar from "@/components/dashboardSection/DashboardSideBar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "By Mehdi Fadaei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" min-h-screen">
      <div
        className={"relative antialiased bg-neutral-50 flex flex-col min-h-svh"}
      >
        <DashboardNav />
        <div className="flex flex-row flex-1">
          <DashboardSideBar />
          <div className="sm:w-full w-[88%] h-full bg-[#EAEEFE]/60 rounded-tl-xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
