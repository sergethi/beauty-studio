import React from "react";
import { Image, Link } from "@nextui-org/react";

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
            href="https://1manstartup.com/privacy-policy"
            target="_blank"
            className="btn btn-link"
          >
            Book
          </Link>
          {/* <span>|</span> */}
          <Link
            href="https://1manstartup.com/terms-and-conditions"
            target="_blank"
            className="btn btn-link"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-8 w-full max-w-lg">
          <Link
            href="https://1manstartup.com/privacy-policy"
            target="_blank"
            className="btn btn-link"
          >
            Privacy
          </Link>
          {/* <span>|</span> */}
          <Link
            href="https://1manstartup.com/terms-and-conditions"
            target="_blank"
            className="btn btn-link"
          >
            Terms
          </Link>
          {/* <span>|</span> */}
          <Link
            href="mailto:Roads Audio<dave@roadsaudio.com>"
            className="btn btn-link"
          >
            Contact
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
