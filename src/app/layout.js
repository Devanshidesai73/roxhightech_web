import Navbar from "@/components/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const open_sans = Open_Sans({
  subsets: ["cyrillic"],
  variable: "--font-open_sans",
});

export const metadata = {
  title: "Rox Hightech",
  description: "Design and Develop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
