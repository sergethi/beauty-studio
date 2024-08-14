import React from "react";
import { Button, Image } from "@nextui-org/react";
import { openHours } from "../lib/data";

const BusinessHours = ({ className1 = "", className2 = "" }) => {
  return (
    <div
      className={`flex flex-row-reverse w-full items-center justify-center gap-32 p-10`}
    >
      <div className={`lex-shrink-0 w-full max-w-lg ${className1}`}>
        <Image
          className="object-cover w-full h-auto"
          alt="NextUI hero Image"
          src="https://images.unsplash.com/flagged/photo-1575277942704-3b02a862e5f6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <Button radius="lg" color="danger" className="p-10 text-xl">
          Book an appointement
        </Button>
      </div>
    </div>
  );
};

export default BusinessHours;
