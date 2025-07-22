import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
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
        className={`${roboto.variable} antialiased min-h-screen font-sans`}
      >
        <div className="max-w-3xl mx-auto flex flex-col min-h-screen px-4 text-justify">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
