import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 RoxHightech , All Right Receved.</div>
      <div className={styles.social}>
        <Image
          src="/images/facebook.png"
          width={24}
          height={24}
          className={styles.icon}
          alt="facebook"
        />
        <Image
          src="/images/linkedin.png"
          width={24}
          height={24}
          className={styles.icon}
          alt="linkedin"
        />
        <Image
          src="/images/instagram.png"
          width={24}
          height={24}
          className={styles.icon}
          alt="instagram"
        />
        <Image
          src="/images/twitter.png"
          width={24}
          height={24}
          className={styles.icon}
          alt="twitter"
        />
        <Image
          src="/images/whatsapp.png"
          width={24}
          height={24}
          className={styles.icon}
          alt="whatsapp"
        />
      </div>
    </div>
  );
};

export default Footer;
