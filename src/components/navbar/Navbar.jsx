"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

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
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        <Image
          src={"/images/white_logo.png"}
          height={100}
          width={150}
          alt="roxhightech"
        />
      </Link>

      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.link}>
            {link.name}
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => console.log("Logged out")}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
