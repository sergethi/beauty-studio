"use client";

import React from "react";
import { Button, Card, CardFooter, Image, CardBody } from "@nextui-org/react";

const Hero = () => {
  return (
    <div>
      <Card className="z-0 h-screen w-full bg-[url('https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" radius="none">
        <CardBody className="z-10 flex flex-col items-center text-center justify-center">
          <p className="mt-10 mb-10 text-3xl">Get a classy look with us</p>
          <p className="text-7xl">It is your time to shine</p>
          <Button
            radius="none"
            color="danger"
            className="mt-10 mb-10 p-10 text-xl"
          >
            Book an appointement
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Hero;
