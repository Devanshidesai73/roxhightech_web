import CrossWords from "@/components/CrossWords";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="flex min-h-screen p-4 md:px-12 xl:flex-row flex-col gap-12 justify-center">
      <div className="relative z-20 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-6xl xl:text-6xl text-center font-sans xl:leading-tight tracking-wider font-bold uppercase">
          Defining The Future Of Web Solutions!
        </h1>
        <div className="relative flex -z-10">
          <Image
            alt="Underline"
            src="/underline.svg"
            height={500}
            width={600}
            className="-mt-3 md:-mt-4 lg:-mt-5 object-contain -ml-8 2xl:ml-44"
          />
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <Image
          alt="crossword"
          src="/crossword.svg"
          height={1200}
          width={1200}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;
