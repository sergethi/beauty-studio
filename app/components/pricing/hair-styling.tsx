"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { hairStyle } from "../../lib/data";

const HairStyling = () => {
  return (
    <div className="z-10 flex md:flex-row flex-col w-full max-w-6xl items-center justify-center gap-28 custm-pad md:p-0">
      <div className="flex-shrink-0 w-full max-w-2xl">
        <Image
          className="object-cover w-full h-auto"
          alt="salon"
          src="/images/salon-benyamin-bohlouli-unsplash.jpg"
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-md">
        <p className="md:text-6xl text-4xl font-bold mb-8">Hair Styling</p>
        <div className="w-full">
          {hairStyle.map((service, index) => (
            <div
              key={index}
              className="flex justify-between text-base leading-relaxed mb-6 text-default-500"
            >
              <span className="flex-grow">{service.name}</span>
              <span className="flex-shrink-0 ml-4">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairStyling;
