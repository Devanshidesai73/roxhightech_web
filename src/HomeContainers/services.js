import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web/Mobile App Development",
      icon: "/developmentCard.svg",
      description: "Building the Future of the Web, One Code at a Time.",
      link: "/services/development",
    },
    {
      id: 2,
      title: "Branding And Advertising",
      icon: "/designCard.svg",
      description:
        "Turning Concepts into Visual  Masterpieces for Lasting Impressions.",
      link: "/services/design",
    },
    {
      id: 1,
      title: "Digital Marketing",
      icon: "/marketingCard.svg",
      description:
        "Navigating the Digital Landscape to Elevate Your Brand's Reach.",
      link: "/services/marketing",
    },
  ];
  return (
    <section className="relative flex flex-col min-h-screen p-4 md:px-12 xl:px-24 justify-center">
      <h2 className="text-3xl md:text-4xl xl:text-6xl leading-tight tracking-wide font-bold uppercase z-10">
        Services
      </h2>
      <ul className="flex gap-12 justify-center items-center mt-24 flex-wrap">
        {services.map((item, index) => (
          <li
            key={index}
            className="w-80 border-2 md:p-4 p-2 rounded-xl h-96 flex"
          >
            <Link href={item.link} className="flex flex-col gap-8 flex-1">
              <div className="relative flex-1 justify-center items-center flex">
                <Image fill={true} src={item.icon} alt="Logo" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-2xl text-center">
                  {item.title}
                </h4>
                <p className="text-sm flex-wrap mt-2 text-center">
                  {item.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* <span className="absolute text-slate-500 text-9xl flex justify-center items-center flex-1">
        What we do
      </span> */}
    </section>
  );
};

export default Services;
