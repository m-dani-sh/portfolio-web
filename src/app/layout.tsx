import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Portfolio | Skills & Projects",
  description: "Showcasing my full-stack and AI development skills",
  icons: {
    icon: [
      { url: "./logo.svg" }, // default
      { url: "./logo.svg", sizes: "32x32", type: "image/png" },
      { url: "./logo.svg", sizes: "16x16", type: "image/png" },
    ],
    
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Header/>
        {children}
      </body>
    </html>
  );
}
