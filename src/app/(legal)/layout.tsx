import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

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
        className={`${inter.variable} antialiased min-h-screen font-sans`}
      >
        <div className="max-w-3xl mx-auto flex flex-col min-h-screen px-4 text-justify">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
