import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center pr-12 pl-12">
      <h1 className="text-3xl md:text-6xl xl:text-8xl text-center leading-tight tracking-wide font-bold uppercase z-10">
        Defining The Future Of Web Solutions!
      </h1>
      <div className="relative flex w-10/12 h-16">
        <Image
          src="/underline.svg"
          className="-mt-10 md:-mt-9 xl:-mt-10"
          fill={true}
        />
      </div>
    </section>
  );
};

export default Banner;
