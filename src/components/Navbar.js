"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigation = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Services", link: "/services" },
    { id: 3, title: "Courses", link: "/courses" },
    { id: 4, title: "Logo", link: "/" },
    { id: 5, title: "Projects", link: "/projects" },
    { id: 6, title: "About Us", link: "/about" },
    { id: 7, title: "Contact Us", link: "/contact" },
  ];
  const toggleNav = () => {
    setToggle(!toggle);
  };
  return (
    <div className="p-4">
      <ul className="hidden lg:flex justify-center gap-10 xl:gap-16 items-center">
        {navigation.map((item, index) => (
          <li
            className="xl:font-semibold xl:text-base lg:font-medium lg:text-sm"
            key={index}
          >
            <Link href={item.link}>
              {item.title === "Logo" ? (
                <div className="relative">
                  <Image
                    width={300}
                    height={200}
                    src={"/RHT_logo_white.svg"}
                    alt="Logo"
                    className="object-contain"
                  />
                </div>
              ) : (
                item.title
              )}
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative justify-between items-center flex lg:hidden">
        <div className="relative flex  flex-1">
          <Image
            width={300}
            height={200}
            src={"/RHT_logo_white.svg"}
            alt="Logo"
          />
        </div>
        <div className="relative flex flex-col flex-1">
          <button onClick={toggleNav}>
            <div className="relative flex justify-end">
              <Image
                alt="Toggle Off"
                width={25}
                height={28}
                src={"/toggleNavOff.svg"}
                className={`${!toggle ? "flex" : "hidden"}`}
              />
              <Image
                alt="Toggle On"
                width={25}
                height={28}
                src={"/toggleNavOn.svg"}
                className={`${toggle ? "flex" : "hidden"}`}
              />
            </div>
          </button>
          <div
            className={`${toggle ? "flex" : "hidden"} absolute top-10 right-0`}
          >
            <ul className="justify-center gap-10 xl:gap-16 items-center text-right">
              {navigation.map((item, index) => (
                <li
                  className="xl:font-semibold xl:text-base lg:font-medium lg:text-sm"
                  key={index}
                >
                  <Link href={item.link}>
                    {item.title !== "Logo" && item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
