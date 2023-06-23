import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={"/images/2.png"}
          alt="about image"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imageText}>
          <h3 className={styles.imageTitle}>Digital Storytellers</h3>
          <h5 className={styles.imageDesc}>
            Handcrafting award winning digital experience
          </h5>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who we are?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec varius mauris. Nulla aliquet felis vel ante egestas, at sodales
            neque commodo. Nullam eu elit a urna elementum blandit non at
            lectus. Nunc eros nulla, egestas non vestibulum sit amet, pretium in
            sapien. Aliquam scelerisque mattis felis, at auctor risus tempus
            nec.
            <br />
            <br /> Vivamus ultricies augue et fringilla congue. Donec eget dolor
            rutrum, condimentum felis vel, mattis risus. Etiam porta tellus
            metus, in lacinia libero sodales eget. Morbi ultricies nec ante a
            tempor. Vivamus a lacus ac felis consectetur finibus. Praesent at
            tellus at nulla maximus accumsan fringilla nec eros. Cras eget leo
            in ex consectetur sollicitudin. Nulla facilisi. Pellentesque aliquet
            scelerisque erat, in congue risus aliquam quis. Fusce auctor dolor
            eu massa tempor, ut porta sem cursus.
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>What we do?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec varius mauris. Nulla aliquet felis vel ante egestas, at sodales
            neque commodo. Nullam eu elit a urna elementum blandit non at
            lectus. Nunc eros nulla, egestas non vestibulum sit amet, pretium in
            sapien.
            <br />
            <br />
            Vivamus a lacus ac felis consectetur finibus. Praesent at
            <br />
            <br />
            Nulla facilisi.
            <br />
            <br />
            Pellentesque aliquet
          </p>
          <Button url={"/contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
