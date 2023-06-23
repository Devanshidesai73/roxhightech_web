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
            alt="Blog page"
            className={styles.img}
            src={"/images/4.png"}
            fill={true}
          />
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.title}>Lorem, ipsum.</h4>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            perspiciatis, fuga excepturi nemo minus officiis magnam illum
            ducimus tempora quo dolorum non, voluptatem sunt accusantium magni
            eligendi in hic suscipit?
          </p>
        </div>
      </Link>
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            alt="blog 1"
            className={styles.img}
            src={"/images/3.png"}
            fill={true}
          />
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.title}>Lorem, ipsum dolor.</h4>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            quae corrupti cupiditate sint, officiis consectetur amet? Error
            incidunt beatae dignissimos labore, molestias qui corporis nihil
            iste delectus sit quis. Unde id voluptatibus quos in eius,
            praesentium nostrum. Expedita mollitia, fuga totam aperiam placeat,
            inventore aliquam sint impedit molestiae nihil cum.
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            alt="blog 2"
            className={styles.img}
            src={"/images/5.png"}
            fill={true}
          />
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.title}>Lorem ipsum dolor sit amet.</h4>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ab
            placeat culpa minima delectus, dolorem ut facere aperiam laboriosam
            magni.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
