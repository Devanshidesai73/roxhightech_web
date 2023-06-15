import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h2 className={styles.category}>{params.category}</h2>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={"/images/banner.png"}
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={"/images/banner.png"}
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={"/images/banner.png"}
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
