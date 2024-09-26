import React from 'react'
import { Button, Image } from "@nextui-org/react";
import Link from 'next/link';

const Makeup = () => {
  return (
    <div className="flex sm:flex-row-reverse flex-col w-full items-center justify-center gap-28 p-10">
      <div className="lex-shrink-0 w-full max-w-lg">
        <Image
          className="object-cover w-full h-auto"
          alt="makeup"
          src="/images/makeup-unsplash.jpg"
        />
      </div>
      <div className="max-w-md">
        <p className="text-6xl font-bold">We do makeup</p>
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
  )
}

export default Makeup
