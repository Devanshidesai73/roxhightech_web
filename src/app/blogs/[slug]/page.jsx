import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            perferendis autem in at consequuntur dolorem.
          </h3>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            neque ut veritatis accusantium quidem perferendis sint reiciendis
            earum culpa omnis, laudantium aperiam magnam nam, accusamus optio
            odit aliquam enim architecto voluptatibus placeat corporis! Nisi
            eaque ea temporibus. Dolorum, officiis? Sint magnam, debitis ullam
            fuga facere blanditiis quasi minus necessitatibus sunt!
          </p>
          <div className={styles.author}>
            <Image
              src={"/images/banner"}
              alt="avtar"
              width={40}
              height={40}
              className={styles.avtar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}></div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default BlogPost;
