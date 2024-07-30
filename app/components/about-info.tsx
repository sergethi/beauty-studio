import React from "react";
import { Button, Image } from "@nextui-org/react";

const AboutInfo = () => {
  return (
    <div className="flex w-full items-center justify-center gap-28 p-10">
      <div className="lex-shrink-0 w-full max-w-lg">
        <Image
          className="object-cover w-full h-auto"
          alt="NextUI hero Image"
          src="https://images.unsplash.com/photo-1633681926053-9074b76e21a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="max-w-md">
        <p className="text-2xl font-bold">Who we are</p>
        <p className="mt-4 mb-6 text-base leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.
        </p>
        <Button radius="none" color="danger" className="p-10 text-xl">
          Know More
        </Button>
      </div>
    </div>
  );
};

export default AboutInfo;
