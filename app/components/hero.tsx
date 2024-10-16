"use client";

import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

const Hero = () => {
  return (
    <div>
      <Card className="z-0 h-[80vh] max-w-full w-full bg-[url('/images/hero-jessica-felicio-unsplash.jpg')] bg-cover bg-center opacity-1" radius="none">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <CardBody className="z-10 flex flex-col items-center gap-12 text-center justify-center">
          <p className="text-3xl text-white">Get a classy look with us</p>
          <p className="text-7xl text-white">It is your time to shine</p>
          <div className="w-32 h-1 bg-pink-600"></div>
          <Button
            radius="none"
            color="danger"
            className="p-10 text-xl"
            as={Link}
            href="/book"
          >
            Book an appointement
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Hero;
