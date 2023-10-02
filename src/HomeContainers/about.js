import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="relative flex flex-col min-h-screen p-4 md:px-12 xl:px-24 md:mt-8">
      <h2 className="text-3xl md:text-4xl xl:text-6xl leading-tight tracking-wide font-bold uppercase z-10">
        About Us
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center pt-20 pb-6 gap-12">
        <div className="relative flex-1  flex items-center justify-center z-10">
          <Image
            src={"/aboutSection.svg"}
            alt="about"
            className="object-contain"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col flex-1 gap-8 items-start z-10">
          <p className="font-sans text-base sm:text-lg lg:text-xl">
            Get to know Rox Hightech, where innovation meets creativity.
            Discover our mission, values, and the expertise that drives us.
            Learn why we're the choice for transformative digital solutions.
          </p>
          <Link
            href={"/about"}
            className="font-sans text-xs md:text-base font-semibold sm:text-lg lg:text-xl rounded-xl border py-2 md:py-4 px-4 md:px-8"
          >
            Explore Our Story
          </Link>
        </div>
        <div className="absolute flex-1 text-zinc-700 opacity-50 font-bold text-[0px] sm:text-[180px] lg:text-[180px] 2xl:text-[250px] leading-[250px] flex flex-col w-4/5 h-4/5 justify-center">
          <span className="text-center">Who We</span>
          <span className="text-center">Are</span>
        </div>
      </div>
    </section>
  );
};

export default About;
