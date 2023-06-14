"use client";
import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Projects",
    url: "/projects",
  },
  {
    id: 3,
    name: "Courses",
    url: "/courses",
  },
  {
    id: 4,
    name: "Blogs",
    url: "/blogs",
  },
  {
    id: 5,
    name: "About",
    url: "/about",
  },
  {
    id: 6,
    name: "Contact",
    url: "/contact",
  },
  {
    id: 7,
    name: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div>
      <Link href={"/"}>Rox Hightech</Link>

      <div>
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.name}
          </Link>
        ))}
        <button onClick={() => console.log("Logged out")}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
