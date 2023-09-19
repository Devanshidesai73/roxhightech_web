import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="relative flex flex-col min-h-screen px-4 md:px-12 md:mt-28 justify-center">
      <h2 className="text-3xl md:text-4xl xl:text-6xl leading-tight tracking-wide font-bold uppercase z-10">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center items-center pt-6 pb-6">
        <div className="flex flex-col flex-1 -mr-24 sm:-mr-24 lg:-mr-52 gap-8 items-start">
          <p className="font-sans text-base sm:text-lg lg:text-xl">
            Dive into our showcase of innovative projects that bridge creativity
            and technology, showcasing the impact of Rox Hightech's design and
            development prowess. Explore how we turn concepts into digital
            realities that captivate and engage.
          </p>
          <Link
            href={"/projects"}
            className="font-sans text-xs md:text-base font-semibold sm:text-lg lg:text-xl rounded-xl border py-2 md:py-4 px-4 md:px-8"
          >
            Discover Our Work
          </Link>
        </div>
        <div className="relative -mr-4 -mb-64 sm:mb-0 w-2/3 sm:w-1/2 lg:w-1/2">
          <Image
            height={600}
            width={600}
            src={"/girl_with_tab.png"}
            className="object-contain"
          />
        </div>
      </div>
      {/* <span className="absolute text-slate-500 text-9xl flex justify-center items-center flex-1">
What We Have Done
</span> */}
    </section>
  );
};

export default Projects;
