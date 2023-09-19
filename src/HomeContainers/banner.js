import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center px-12">
      <h1 className="text-3xl md:text-6xl xl:text-8xl text-center leading-tight tracking-wide font-bold uppercase z-10">
        Defining The Future Of Web Solutions!
      </h1>
      <div className="relative flex">
        <Image
          alt="Underline"
          src="/underline.svg"
          height={600}
          width={1200}
          className="-mt-3 md:-mt-4 lg:-mt-5 xl:-mt-7 2xl:-ml-10 lg:-ml-12"
        />
      </div>
    </section>
  );
};

export default Banner;
