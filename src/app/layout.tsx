import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import VinylPlayer from "@/components/lastfm/vinyl-player";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = saved || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${mono.variable} antialiased min-h-fit font-mono`}>
        {children}
        <VinylPlayer />
      </body>
    </html>
  );
}
