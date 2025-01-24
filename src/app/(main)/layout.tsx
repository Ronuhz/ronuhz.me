import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Hunor Zoltáni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-fit font-sans md:pt-[25vh] px-4 select-none`}
      >
        <Sidebar />
        <div className="flex flex-col gap-12 max-w-[650px] mx-auto">
          <Header />
          <div className="flex flex-col flex-1">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
