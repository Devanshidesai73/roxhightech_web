import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h4 className={styles.category}>{params.category}</h4>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h5 className={styles.title}>Lorem, ipsum dolor.</h5>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            repellendus perspiciatis asperiores, hic reiciendis magnam tempora
            fuga! Hic labore alias impedit quisquam provident at aliquid?
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="category 1"
            className={styles.img}
            src={"/images/banner.png"}
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h5 className={styles.title}>Lorem, ipsum.</h5>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            asperiores eaque! Animi commodi praesentium quidem architecto
            veniam, magni nihil earum nobis dolore, laboriosam consectetur sequi
            nisi facere dicta necessitatibus dolorem?
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="category 2"
            className={styles.img}
            src={"/images/banner.png"}
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h5 className={styles.title}>Lorem ipsum dolor sit.</h5>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            qui ipsam ipsa distinctio voluptatum consectetur odit eligendi
            similique asperiores repudiandae aut a deleniti, rem ut ullam.
            Dolorem tempore impedit consequuntur, voluptatibus quidem, excepturi
            non, debitis cupiditate et accusantium laborum nesciunt explicabo
            assumenda rem. Placeat, quia nemo sit voluptatibus nam numquam?
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="category 3"
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
