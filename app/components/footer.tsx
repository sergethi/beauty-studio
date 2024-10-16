"use client";

import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FaFacebook , FaInstagram } from "react-icons/fa";

const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10 w-full border-t-1  dark:border-white border-bg-black ">
      <div className="flex items-center justify-center gap-10 p-10 max-w-6xl w-full">
        <div className="max-w-xs w-full">
          <Image className="object-cover h-auto" alt="logo" src="/images/beautyStudio_logo.png" width={100} height={100} />
        </div>
        <div className="flex justify-center gap-8 w-full max-w-lg">
          <Link
            href="/book"
            className="text-lg"
            color="foreground"
          >
            Book
          </Link>
          <Link
            href="/contact"
            className="text-lg"
            color="foreground"
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-end gap-8 w-full max-w-lg">
          <Link
            href=""
            target="_blank"
            className="text-2xl"
            color="foreground"
          >
            <FaFacebook /> 
          </Link>
          <Link
            href=""
            target="_blank"
            className="text-2xl"
            color="foreground"
          >
            <FaInstagram /> 
          </Link>
        </div>
      </div>

      <p className="p-10 text-center">
        Copyright © {current_year}, Jess Beauty Studio LLC. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
