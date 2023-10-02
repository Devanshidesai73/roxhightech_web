import Link from "next/link";
import React from "react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Front-End Development with React for Web",
      description:
        "Master front-end development with React to craft captivating web.",
      link: "/courses",
    },
    {
      id: 2,
      title: "Front-End Development with React Native for Hybrid Apps",
      description:
        "Build cross-platform mobile apps seamlessly with React Native expertise.",
      link: "/courses",
    },
    {
      id: 3,
      title: "Full-Stack Development with React (Web/App)",
      description:
        "Becoming a versatile developer - creating web and app solutions from start to finish.",
      link: "/courses",
    },
    {
      id: 4,
      title: "Graphic Design",
      description:
        "Unlock your creativity and communication skills through the art of graphic design.",
      link: "/courses",
    },
    {
      id: 5,
      title: "UI/UX Design & Develop",
      description:
        "Craft user-friendly digital solutions by mastering UI/UX design and development.",
      link: "/courses",
    },
    {
      id: 6,
      title: "Digital Marketing",
      description:
        "Navigate the digital landscape with a comprehensive understanding of digital marketing strategies.",
      link: "/courses",
    },
  ];
  return (
    <section className="relative flex flex-col min-h-screen p-4 md:px-12 xl:px-24 justify-center">
      <h2 className="text-3xl md:text-4xl xl:text-6xl leading-tight tracking-wide font-bold uppercase z-10">
        Courses
      </h2>
      <div className="relative flex items-center justify-center">
        <ul className="flex gap-12 justify-center items-center mt-24 flex-wrap flex-1 z-10">
          {courses.map((item, index) => (
            <li
              key={index}
              className="w-56 lg:w-60 xl:w-80 border-2 md:p-4 p-2 rounded-xl h-52 lg:h-52 xl:h-48 flex"
            >
              <Link
                href={item.link}
                className="flex flex-col gap-4 xl:gap-8 flex-1"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-lg xl:text-2xl text-center">
                    {item.title}
                  </h4>
                  <p className="xl:text-sm text-xs flex-wrap mt-2 text-center">
                    {item.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute flex-1 text-zinc-700 opacity-50 font-bold text-[0px] sm:text-[180px] lg:text-[220px] 2xl:text-[250px] leading-[250px] flex flex-col w-4/5 h-4/5 justify-center">
          <span className="text-center">Time To</span>
          <span className="text-center">Learn</span>
        </div>
      </div>
    </section>
  );
};

export default Courses;
