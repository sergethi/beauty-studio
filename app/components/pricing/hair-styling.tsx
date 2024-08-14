"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import { hairStyle } from "../../lib/data";

const HairStyling = () => {
  return (
    <div className="z-10 flex w-full max-w-6xl items-center justify-center gap-28">
      <div className="flex-shrink-0 w-full max-w-2xl">
        <Image
          className="object-cover w-full h-auto"
          alt="NextUI hero Image"
          src="https://images.unsplash.com/photo-1633681926053-9074b76e21a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-md">
        <p className="text-6xl font-bold mb-8">Hair Styling</p>
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
