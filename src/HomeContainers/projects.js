import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="relative flex flex-col min-h-screen p-4 md:px-12 xl:px-24 md:mt-28">
      <h2 className="text-3xl md:text-4xl xl:text-6xl leading-tight tracking-wide font-bold uppercase z-10">
        Projects
      </h2>
      <div className="relative flex flex-1 flex-col lg:flex-row justify-center items-center pt-20 pb-6 gap-12">
        <div className="relative flex-1 flex items-center justify-center z-10">
          <Image
            src={"/projectsSection.svg"}
            alt="projects"
            className="object-contain"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-1 flex-col gap-8 items-start z-10">
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
        <div className="absolute flex-1 text-zinc-700 opacity-50 font-bold text-[0px] sm:text-[120px] lg:text-[150px] xl:text-[170px] 2xl:text-[220px] 2xl:leading-[220px] flex flex-col w-4/5 h-4/5 justify-center">
          <span className="text-center">What We</span>
          <span className="text-center">Have Done</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
