import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="relative flex flex-col min-h-screen p-4 md:px-12 xl:px-24 md:mt-8 justify-center">
      <h2 className="text-3xl md:text-4xl xl:text-4xl leading-tight tracking-wide font-bold capitalize z-10 xl:w-2/3 2xl:w-1/2">
        Connect with Rox Hightech to bring your vision to life.
      </h2>

      <div className="relative flex flex-wrap justify-center items-center py-8">
        <div className="flex flex-col flex-1 gap-4 items-start z-10">
          <a
            href={"mailto:contact@roxhightech.com"}
            className="flex gap-2 items-center font-sans text-xs md:text-base sm:text-lg lg:text-xl w-9/12"
          >
            <Image
              height={22}
              width={22}
              src={"/mail.svg"}
              className="object-contain"
            />
            contact@roxhightech.com
          </a>
          <span className="flex gap-2 font-sans text-xs md:text-base sm:text-lg lg:text-xl w-9/12">
            <Image
              height={22}
              width={22}
              src={"/contact.svg"}
              className="object-contain"
            />
            <span>
              <a href={"tel:07600013470"} className="mr-1">
                +91-7600013470
              </a>
              {" / "}
              <a href={"tel:+07600013471"} className="ml-1">
                +91-7600013471
              </a>
            </span>
          </span>
          <a
            target="_blank"
            href={"https://maps.app.goo.gl/sWtn5oWkPGQwnDoY8"}
            className="flex gap-2 items-start font-sans text-xs md:text-base sm:text-lg lg:text-xl w-9/12"
          >
            <Image
              height={18}
              width={18}
              src={"/location.svg"}
              className="object-contain mt-2"
            />
            Business Hub - 810 Arved Transcube Plaza, Near Ranip BRTS Bus Stop,
            132 Feet Ring Rd, Ranip, Ahmedabad - 382480, Gujarat, India
          </a>
        </div>
        <a
          target="_blank"
          href={"https://maps.app.goo.gl/sWtn5oWkPGQwnDoY8"}
          className="relative 2xl:w-1/2"
        >
          <Image
            height={600}
            width={700}
            src={"/Office_Map.svg"}
            className="object-contain"
          />
        </a>
        <div className="absolute -top-10 flex-1 text-zinc-700 opacity-50 font-bold text-[0px] sm:text-[120px] lg:text-[140px] xl:text-[140px] 2xl:text-[180px] flex flex-col w-4/5 h-4/5 justify-center">
          <span className="text-center">Let's Make It</span>
          <span className="text-center">Reality!</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
