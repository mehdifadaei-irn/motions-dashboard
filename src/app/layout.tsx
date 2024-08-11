import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="relative antialiased bg-[#EAEEFE]">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
