import React from "react";
import { Button, Image } from "@nextui-org/react";
import Link from 'next/link';

const AboutInfo = () => {
  return (
    <div className="flex sm:flex-row flex-col max-w-full w-full items-center justify-center sm:gap-28 gap-8 p-10">
      <div className="lex-shrink-0 w-full max-w-lg">
        <Image
          className="object-cover w-full h-auto"
          alt="salon image"
          src="/images/salon-benyamin-bohlouli-unsplash.jpg"
        />
      </div>
      <div className="max-w-md">
        <p className="xs:text-3xl sm:text-6xl font-bold">Who we are</p>
        <p className="mt-4 mb-6 text-base leading-relaxed text-default-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.
        </p>
        <Button radius="lg" color="danger" as={Link} href="/pricing" className="p-10 text-xl">
          Know More
        </Button>
      </div>
    </div>
  );
};

export default AboutInfo;
