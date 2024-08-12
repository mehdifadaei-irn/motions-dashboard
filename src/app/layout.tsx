import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "motion & dashboard",
  description: "By Mehdi Fadaei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" " >
      <body
        className={cn(
          dmSans.className,
          "relative antialiased bg-[#EAEEFE] min-h-full"
        )}
      >
        {children}
      </body>
    </html>
  );
}
