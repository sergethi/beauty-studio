import React from "react";
import type { Metadata } from "next";
import { Image } from "@nextui-org/image";
import { Card } from "@nextui-org/card";
import { CardBody } from "@nextui-org/card";
import { team } from "../lib/data";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <div className=" z-0 flex flex-col items-center justify-center max-w-full gap-8 mb-40">
      <div className="relative z-1 flex flex-shrink-0 flex-col items-center justify-center w-full max-w-6xl h-[50vh] text-center bg-[url('/images/salon-benyamin-bohlouli-unsplash.jpg')] bg-cover bg-center opacity-1">
        <div className="absolute z-1 inset-0 bg-black opacity-50"></div>
        {/* Dark overlay */}
        <p className="z-10 text-6xl text-white font-bold">Who we are</p>
      </div>
      <div className=" z-10 max-w-6xl custm-pad md:p-0">
        <p className="mt-4 mb-6 text-base leading-relaxed text-default-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Iure sequi tenetur nam ipsam excepturi enim
          voluptate beatae veniam quos deleniti, doloribus libero illo? Nobis
          perspiciatis maxime similique consequuntur dolores natus.
        </p>
      </div>
      <p className="z-10 text-6xl font-bold text-left max-w-6xl w-full custm-pad md:p-0">
        Our team
      </p>
      <div className=" z-10 flex md:flex-row flex-col items-center justify-center max-w-6xl w-full gap-8 custm-pad md:p-0">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col gap-8 max-w-full">
            <Card
              shadow="sm"
              key={index}
              isPressable
              className="max-w-lg w-full"
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  alt={member.name}
                  className="w-full h-full object-cover"
                  src={member.image_url}
                />
              </CardBody>
            </Card>
            <b className="text-3xl">{member.name}</b>
            <div className="w-32 h-1 bg-pink-600"></div>
            <p className="text-default-500 text-left">{member.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
