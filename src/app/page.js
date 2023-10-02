import { Open_Sans, Roboto_Serif, Poppins } from "next/font/google";
import Banner from "../HomeContainers/banner";
import Services from "@/HomeContainers/services";
import Courses from "@/HomeContainers/courses";
import Projects from "@/HomeContainers/projects";
import About from "@/HomeContainers/about";
import Contact from "@/HomeContainers/contact";

const open_sans = Open_Sans({
  subsets: ["cyrillic"],
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
      <Courses />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
