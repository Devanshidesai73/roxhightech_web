import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className={styles.container}>
      <Link href={"/blogs/testId"} className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={"/images/banner.png"}
            fill={true}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={"/images/banner.png"}
            fill={true}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={"/images/banner.png"}
            fill={true}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
