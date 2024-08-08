import React from "react";
import { Button, Image } from "@nextui-org/react";

const About = () => {
  return (
    <div className=" z-0 flex flex-col items-center justify-center max-w-full gap-8 p-10">
      <div className=" z-1 flex flex-shrink-0 flex-col items-center justify-center w-full max-w-4xl h-[50vh] text-center bg-[url('https://images.unsplash.com/photo-1633681926053-9074b76e21a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-1">
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        {/* Dark overlay */}
        <p className=" z-10 text-6xl font-bold">Who we are</p>
        
      </div>
      <div className=" z-10 max-w-4xl">
        <p className="mt-4 mb-6 text-base leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.
        </p>
        {/* <Button radius="none" color="danger" className="p-10 text-xl">
          Know More
        </Button> */}
      </div>
      <p className="z-10 text-6xl font-bold text-left max-w-4xl w-full">Our team</p>
    </div>
  );
};

export default About;
