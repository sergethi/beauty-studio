import React from "react";
import { Button, Image, Link } from "@nextui-org/react";
import { openHours } from "../lib/data";

interface BusinessHoursProps {
  className1?: string;  // Optional prop with default value
  className2?: string;  // Optional prop with default value
  className3?: string;  // Optional prop with default value
}

const BusinessHours:React.FC<BusinessHoursProps> = ({ className1 = "", className2 = "", className3="", }) => {

  return (
    <div
      className={`flex flex-row-reverse w-full items-center justify-center gap-32 p-10`}
    >
      <div className={`lex-shrink-0 w-full max-w-lg ${className1}`}>
        <Image
          className="object-cover w-full h-auto"
          alt="NextUI hero Image"
          src="/images/open-hours-obi-unsplash.jpg"
        />
      </div>
      <div className={`w-full max-w-md ${className2}`}>
        <p className="text-6xl font-bold">Open hours</p>
        <div className="mt-4 mb-6">
          {openHours.map((hour, index) => (
            <p
              key={index}
              className="text-base leading-relaxed mb-4 text-default-500"
            >
              {hour.day} : {hour.time}
            </p>
          ))}
        </div>
         {/* Avoid linking when disabled  href={isDisabled ? undefined : "/book"}*/}
        <Button radius="lg"  as={Link}  href= "/book"   color="danger" className={`p-10 text-xl ${className3}`}>
          Book an appointement
        </Button>
      </div>
    </div>
  );
};

export default BusinessHours;
