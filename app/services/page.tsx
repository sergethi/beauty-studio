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
    <div className="flex flex-col items-center justify-center max-w-full gap-8 p-10">
      <div className="flex flex-col items-center max-w-4xl w-full gap-12 p-10 text-center justify-center">
        <p className="text-6xl text-pink-600 font-bold">
          Expert Beauty Services for Radiant Results
        </p>
        <p className="text-3xl">Learn more about what we offer</p>
        <div className="w-32 h-1 bg-pink-600"></div>
        <Button radius="none" color="danger" className="p-10 text-xl">
          Book an appointement
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center max-w-full gap-8 p-10">
        {services.map((service, index) => (
          <Card shadow="sm" key={index} isPressable className="max-w-lg w-full">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={service.name}
                className="w-full object-cover h-full"
                src={service.image_url}
              />
            </CardBody>
            <CardFooter className="flex-col items-start gap-8 p-10">
              <b className="text-3xl">{service.name}</b>
              <div className="w-32 h-1 bg-pink-600"></div>
              <p className="text-default-500 text-left">{service.description}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <BusinessHours />
    </div>
  );
};

export default Services;
