import React from 'react'
import { Button, Image, Link } from "@nextui-org/react";

const Makeup = () => {
  return (
    <div className="flex flex-row-reverse w-full items-center justify-center gap-28 p-10">
      <div className="lex-shrink-0 w-full max-w-lg">
        <Image
          className="object-cover w-full h-auto"
          alt="NextUI hero Image"
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
