"use client";

import React from "react";
import { Button, Card, Divider, Link, CardBody } from "@nextui-org/react";

const Hero = () => {
  return (
    <div>
      <Card className="z-0 h-[80vh] w-full bg-[url('https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-1" radius="none">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <CardBody className="z-10 flex flex-col items-center gap-12 text-center justify-center">
          <p className="text-3xl">Get a classy look with us</p>
          <p className="text-7xl">It is your time to shine</p>
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
