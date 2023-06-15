import Image from "next/image";
import styles from "./page.module.css";
import Banner from "public/images/banner.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Defining The Future Of Web Solutions!</h1>
        <p className={styles.desctiption}>
          Welcome to RoxHightech, your one-stop solution for all your design,
          development, and training needs. We specialize in providing
          high-quality services that empower businesses to thrive in the digital
          landscape.
        </p>
        <Button url={"/projects"} text={"See Our Works"} />
      </div>
      <div className={styles.item}>
        <Image src={Banner} alt="banner image" className={styles.img} />
      </div>
    </div>
  );
}
