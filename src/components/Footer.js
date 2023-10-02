import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="p-4">
      <div className="h-0.5 bg-gradient-to-r from-black via-slate-200" />
      <div className="flex justify-between items-center py-12 px-2 lg:px-24 flex-wrap gap-12">
        <div className="relative flex-2 lg:flex-1">
          <Image
            width={400}
            height={300}
            src={"/RHT_logo_white.svg"}
            alt="Logo"
            className="object-contain"
          />
        </div>
        <p className="flex flex-1 flex-col text-center text-sm font-semibold">
          Need Support?
          <a href={"mailto:contact@roxhightech.com"} className="md:text-lg">
            contact@roxhightech.com
          </a>
        </p>
        <p className="flex flex-1 items-center flex-col text-center uppercase text-xs font-semibold gap-1">
          FOLLOW US
          <span className="flex gap-2">
            <a href="https://www.facebook.com/roxhightech/" target="_blank">
              <Image
                alt="facebook"
                src={"/facebook.svg"}
                height={20}
                width={20}
              />
            </a>
            <a href="https://www.instagram.com/roxhightech/" target="_blank">
              <Image
                alt="Instagram"
                src={"/insta.svg"}
                height={20}
                width={20}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/roxhightech/"
              target="_blank"
            >
              <Image
                alt="LinkedIn"
                src={"/linkedin.svg"}
                height={20}
                width={20}
              />
            </a>
          </span>
        </p>
      </div>
      <div className="h-0.5 bg-gradient-to-r from-black via-slate-200" />
      <div className="flex justify-between items-center pt-4  px-2 lg:px-24 flex-wrap gap-4 text-xs font-semibold">
        <p className="uppercase">PRIVACY POLICY | TERMS OF USE </p>
        <p className="flex flex-col">
          Copyright © All Rights Reserved By
          <span>Rox Hightech</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
