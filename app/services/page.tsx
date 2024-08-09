import React from "react";
import { services } from "../lib/data";
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
import BusinessHours from "../components/business-hours";

const Services = () => {
  return (
    <div className="z-0 flex flex-col items-center justify-center max-w-full gap-10 p-10">
      <div className="z-1 flex flex-col items-center max-w-6xl gap-12 p-10 text-center justify-center bg-[url('https://images.unsplash.com/photo-1633681926053-9074b76e21a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-1">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <p className="z-10 text-5xl font-bold">
          Expert Beauty Services for Radiant Results
        </p>
        <p className="z-10 text-3xl">Learn more about what we offer</p>
        <div className="z-10 w-32 h-1 bg-danger"></div>
        <Button radius="none" color="danger" className="p-10 text-xl">
          Book an appointement
        </Button>
      </div>

      <div className="z-10 flex flex-wrap items-center justify-between max-w-6xl gap-8 p-10">
        {services.map((service, index) => (
          <Card shadow="sm" key={index} isPressable className="max-w-lg w-full">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                alt={service.name}
                className="w-full object-cover h-full"
                src={service.image_url}
              />
            </CardBody>
            <CardFooter className="flex-col items-start gap-8 p-10">
              <b className="text-3xl">{service.name}</b>
              <div className="w-32 h-1 bg-pink-600"></div>
              <p className="text-default-500 text-left">
                {service.description}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="max-w-6xl bg-danger rounded-lg">
        <BusinessHours />
      </div>
      
    </div>
  );
};

export default Services;
