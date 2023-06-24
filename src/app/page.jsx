import Image from "next/image";
import styles from "./page.module.css";
import Banner from "public/images/banner.png";
import Button from "@/components/button/Button";
import Link from "next/link";

export default function Home() {
  return (
    // <>
    //   <section className={styles.container}>
    //     <div className={styles.item}>
    //       <h1 className={styles.title}>
    //         Defining The Future Of Web Solutions!
    //       </h1>
    //       <p className={styles.desctiption}>
    //         Welcome to RoxHightech, your one-stop solution for all your design,
    //         development, and training needs. We specialize in providing
    //         high-quality services that empower businesses to thrive in the
    //         digital landscape.
    //       </p>
    //     </div>
    //     <div className={styles.item}>
    //       <Image src={Banner} alt="banner image" className={styles.img} />
    //     </div>
    //   </section>
    //   <section className={styles.portfolio}>
    //     <div className={styles.portfolioImgDiv}>
    //       <Image
    //         src={"/images/Portfolio.png"}
    //         alt="Portfolio image"
    //         fill={true}
    //         className={styles.portfolioImage}
    //       />
    //     </div>
    //     <div className={styles.portfolioTextDiv}>
    //       <div className="flex flex-col">
    //         <p className={styles.portfolioTxt}>Portfolio</p>
    //         <span className={styles.portfolioBottomBorder} />
    //       </div>
    //       <Button text={"See Our Work"} url={"/portfolio"} />
    //     </div>
    //     <div className={styles.background}>
    //       <Image
    //         src={"/images/name.png"}
    //         alt="background image"
    //         className={styles.imageBG}
    //         fill={true}
    //       />
    //     </div>
    //   </section>
    //   <section className={styles.serviceContainer}>
    //     <div className="flex flex-col max-w-max ">
    //       <p className={styles.serviceTxt}>Our Services</p>
    //       <span className={styles.serviceBottomBorder} />
    //     </div>
    //     <div className={styles.cards}>
    //       <div className={styles.card}>
    //         <div className={styles.cardImageDiv}>
    //           <Image
    //             src={"/images/Design.png"}
    //             alt="card image"
    //             className={styles.cardImage}
    //             fill={true}
    //           />
    //         </div>
    //         <p className={styles.cardTxt}>
    //           Transforming ideas into visual communication, blending creativity
    //           and aesthetics with strategic messaging. It is a powerful tool
    //           that captures attention, conveys meaning, and shapes the way we
    //           perceive the world around us
    //         </p>
    //       </div>
    //       <div className={styles.card}>
    //         <div className={styles.cardImageDiv}>
    //           <Image
    //             src={"/images/Development.png"}
    //             alt="card image"
    //             className={styles.cardImage}
    //             fill={true}
    //           />
    //         </div>
    //         <p className={styles.cardTxt}>
    //           Giving life to machines through lines of code, shaping the digital
    //           world one instruction at a time. It is a language of logic and
    //           creativity, where problems are solved and possibilities are
    //           unleashed with every keystroke.
    //         </p>
    //       </div>
    //       <div className={styles.card}>
    //         <div className={styles.cardImageDiv}>
    //           <Image
    //             src={"/images/Marketing.png"}
    //             alt="card image"
    //             className={styles.cardImage}
    //             fill={true}
    //           />
    //         </div>
    //         <p className={styles.cardTxt}>
    //           Capturing attention and turning it into action, fueling the growth
    //           and success of businesses. It combines creativity, strategy, and
    //           effective communication to connect with target audiences and
    //           create meaningful relationships.
    //         </p>
    //       </div>
    //       <div className={styles.card}>
    //         <div className={styles.cardImageDiv}>
    //           <Image
    //             src={"/images/Coaching.png"}
    //             alt="card image"
    //             className={styles.cardImage}
    //             fill={true}
    //           />
    //         </div>
    //         <p className={styles.cardTxt}>
    //           Transformative journey where mentors inspire, empower, and guide
    //           individuals to unlock their full potential and achieve
    //           extraordinary results.
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    //   <section className={styles.aboutSection}>
    //     <div className={styles.aboutTextDiv}>
    //       <div className="flex flex-col max-w-max">
    //         <p className={styles.portfolioTxt}>Who we are?</p>
    //         <span className={styles.portfolioBottomBorder} />
    //       </div>
    //       <p className="text-white">
    //         Welcome to RoxHightech, where innovation, creativity, and technology
    //         converge to shape the digital landscape. With a passion for web
    //         design and development, we are committed to delivering exceptional
    //         online experiences that surpass expectations. Our team of skilled
    //         professionals combines artistic vision with technical expertise to
    //         create stunning websites that captivate and engage your audience.
    //         From responsive design to seamless user experience, we tailor our
    //         solutions to suit your unique business needs. At RoxHightech, we
    //         take pride in empowering businesses, fueling their growth, and
    //         helping them thrive in the ever-evolving digital realm. Join us on
    //         this exciting journey and let's make your digital dreams a reality.
    //       </p>
    //     </div>
    //     <div className={styles.aboutImgsDiv}>
    //       <div className={styles.aboutImgDiv}>
    //         <Image
    //           src={"/images/aboutSection1.jpg"}
    //           alt="about image"
    //           fill={true}
    //           className="object-contain -rotate-45"
    //         />
    //       </div>
    //       <div className={styles.aboutImgDiv}>
    //         <Image
    //           src={"/images/aboutSection2.jpg"}
    //           alt="about image"
    //           fill={true}
    //           className="object-contain -rotate-"
    //         />
    //       </div>
    //       <div className={styles.aboutImgDiv}>
    //         <Image
    //           src={"/images/aboutSection3.jpg"}
    //           alt="about image"
    //           fill={true}
    //           className="object-contain -rotate-6"
    //         />
    //       </div>
    //     </div>
    //     <div className={styles.background}>
    //       <span className={styles.bgText}>Who</span>
    //       <span className={styles.bgText}>We Are</span>
    //     </div>
    //   </section>
    //   <section className={styles.contactContainer}>
    //     <div className={styles.contactInfoDiv}>
    //       <div className="flex flex-col max-w-max">
    //         <p className={styles.contactTitle}>Let's Talk?</p>
    //         <span className={styles.contactTitleBorder} />
    //       </div>
    //       <p className="text-white mb-8 mt-2 max-w-sm">
    //         Contact RoxHightech to ignite your online presence with innovation
    //       </p>
    //       <div className="flex gap-2 align-middle mb-4">
    //         <div className="relative flex align-middle">
    //           <Image
    //             src={"/images/call.png"}
    //             alt="Call"
    //             width={24}
    //             height={24}
    //             className="object-contain"
    //           />
    //         </div>
    //         <div className="flex flex-col">
    //           <span className="text-white text-xs font-semibold">
    //             +91 834 783 1298
    //           </span>
    //           <span className="text-white text-xs font-semibold">
    //             +91 635 256 0583
    //           </span>
    //         </div>
    //       </div>
    //       <div className="flex gap-2 align-middle mb-4">
    //         <div className="relative flex align-middle">
    //           <Image
    //             src={"/images/mail.png"}
    //             alt="Email"
    //             width={24}
    //             height={24}
    //             className="object-contain"
    //           />
    //         </div>
    //         <span className="text-white text-xs font-semibold">
    //           contact@roxhightech.com
    //         </span>
    //       </div>
    //       <div className="flex gap-2 align-middle">
    //         <div className="relative flex align-middle">
    //           <Image
    //             src={"/images/internet.png"}
    //             alt="Website"
    //             width={24}
    //             height={24}
    //             className="object-contain"
    //           />
    //         </div>
    //         <span className="text-white text-xs font-semibold">
    //           www.roxhightech.com
    //         </span>
    //       </div>
    //     </div>
    //     <form className={styles.contactForm}>
    //       <input
    //         type="text"
    //         placeholder="Enter your name"
    //         className={styles.input}
    //       />
    //       <input
    //         type="email"
    //         placeholder="Enter your email"
    //         className={styles.input}
    //       />
    //       <textarea
    //         rows={7}
    //         placeholder="Enter your message"
    //         className={styles.textArea}
    //       />
    //       <Button url={"#"} text={"Submit"} />
    //     </form>
    //     <div className="absolute top-0 bottom-0 right-0 left-0">
    //       <div className={styles.contactBackgroundleft}>
    //         <Image
    //           src={"/images/contactSection.png"}
    //           alt="contact background"
    //           height={900}
    //           width={800}
    //           className="object-contain"
    //         />
    //       </div>
    //       <div className={styles.contactBackgroundright}>
    //         <Image
    //           src={"/images/contactSection.png"}
    //           alt="contact background"
    //           height={900}
    //           width={800}
    //           className="object-contain"
    //         />
    //       </div>
    //     </div>
    //   </section>
    // </>
    <>
      <Link
        href={"/"}
        className="flex relative justify-between overflow-hidden z-10 items-center ml-3 mt-3"
      >
        <Image
          src={"/images/logo.png"}
          width={200}
          height={100}
          alt="roxhightech"
          className="object-contain"
        />
      </Link>
      <div className="flex justify-center relative items-center overflow-hidden -mt-6 w-screen h-screen">
        <Image
          className="object-contain flex-1"
          fill={true}
          alt="Under Construction"
          src={"/images/Under_Construction.jpg"}
        />
      </div>
    </>
  );
}
