import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="relative flex flex-col min-h-screen px-4 md:px-12 md:mt-8 justify-center">
      <h2 className="text-3xl md:text-4xl xl:text-6xl leading-tight tracking-wide font-bold uppercase z-10">
        About Us
      </h2>
      <div className="flex flex-wrap justify-center items-center py-8">
        <div className="relative w-2/3 -mr-24 -mb-56 sm:mb-0 sm:-mr-24 md:mr-0 lg:mr-0 xl:-mr-10 2xl:-mr-52 sm:w-1/2 xl:w-2/5 2xl:w-1/2">
          <Image
            height={600}
            width={600}
            src={"/girl_with_laptop.png"}
            className="object-contain -ml-12 sm:ml-0"
          />
        </div>
        <div className="flex flex-col flex-1 gap-8 items-start">
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
      </div>
      {/* <span className="absolute text-slate-500 text-9xl flex justify-center items-center flex-1">
Who We Are
</span> */}
    </section>
  );
};

export default About;
