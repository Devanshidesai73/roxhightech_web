import { Open_Sans, Roboto_Serif } from "next/font/google";
import Banner from "../HomeContainers/banner";
import Services from "@/HomeContainers/services";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
});
const roboto = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function Home() {
  return (
    <main
      className={`${roboto.variable} ${open_sans.variable} flex min-h-screen w-screen flex-col font-sans`}
    >
      <Banner />
      <Services />
    </main>
  );
}
