import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/componentStyles/header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const navbarRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 60) {
        console.log("Sticky");
        navbarRef.current.classList.add(styles.fixedHeader);
      } else {
        console.log("Not Sticky");
        navbarRef.current.classList.remove(styles.fixedHeader);
      }
    };
    window.addEventListener("scroll", onScroll, false);
    return () => {
      window.removeEventListener("scroll", onScroll, false);
    };
  }, []);
  return (
    <nav className={styles.container} ref={navbarRef}>
      <Image src={require("@/public/assets/Images/Logo.png")} height={70} />
      <ul className={`${styles.menu} ${toggleBtn && styles.activeMenu}`}>
        <li>
          <Link className={styles.navItem} href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navItem} href={"/"}>
            Services
          </Link>
        </li>
        <li>
          <Link className={styles.navItem} href={"/"}>
            Our Work
          </Link>
        </li>
        <li>
          <Link className={styles.navItem} href={"/"}>
            About
          </Link>
        </li>
        <li>
          <Link className={styles.navItem} href={"/"}>
            Contact Us
          </Link>
        </li>
      </ul>
      <button
        aria-label="Navigation"
        className={`${styles.navBtn} ${toggleBtn && styles.active}`}
        id="toggle"
        onClick={() => setToggleBtn(!toggleBtn)}
      />
    </nav>
  );
};

export default Header;
