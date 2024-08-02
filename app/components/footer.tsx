import React from "react";
import { Image, Link } from "@nextui-org/react";
import { FaFacebook , FaInstagram } from "react-icons/fa";

const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10 w-full">
      <div className="flex items-center justify-center gap-16 p-10 w-full">
        <div className="max-w-xs w-full">
          <Image className="object-cover h-auto" alt="logo" src="" />
        </div>
        <div className="flex gap-8 w-full max-w-lg">
          <Link
            href=""
            target="_blank"
            className="text-lg"
            color="foreground"
          >
            Book
          </Link>
          <Link
            href=""
            target="_blank"
            className="text-lg"
            color="foreground"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-8 w-full max-w-lg">
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
            className="text-2xl"
            color="foreground"
          >
            <FaInstagram /> 
          </Link>
        </div>
      </div>

      <p>
        Copyright © {current_year}, Jess Beauty Studio LLC. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
