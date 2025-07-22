import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
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
        className={`${roboto.variable} antialiased min-h-fit font-sans md:pt-[25vh] px-4 select-none`}
      >
        <Sidebar />
        <div className="flex flex-col gap-12 max-w-[650px] mx-auto pb-24 md:pb-0">
         
          <div className="flex flex-col flex-1">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
