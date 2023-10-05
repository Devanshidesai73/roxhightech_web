"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { ApolloWrapper } from "../../lib/apollo-wrapper";
import "./globals.css";
import { useEffect } from "react";

const open_sans = Open_Sans({
  subsets: ["cyrillic"],
  variable: "--font-open_sans",
});

export const metadata = {
  title: "Rox Hightech",
  description: "Design and Develop",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove", function (e) {
      cursor.style.cssText = cursor2.style.cssText =
        "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });
  }, []);
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <div className="cursor" />
        <div className="cursor2" />
        <ApolloWrapper>
          <Navbar />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
